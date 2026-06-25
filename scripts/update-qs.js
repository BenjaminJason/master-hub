#!/usr/bin/env node
/**
 * update-qs.js — QS 排名年度更新脚本
 *
 * 用法：
 *   node scripts/update-qs.js qs2028.csv
 *
 * CSV 格式（QS 官方导出 / 手动整理均可）：
 *   rank,institution_name
 *   1,Massachusetts Institute of Technology (MIT)
 *   2,Imperial College London
 *   ...
 *
 * 脚本会：
 *   1. 读取 CSV，建立 英文名 → 新排名 映射
 *   2. 按 EN_MAP 匹配 data.js 里每所学校的 en 字段
 *   3. 更新 qs: 字段
 *   4. 更新 DATA_VERSION（在 index.html 顶部的注释行）
 *   5. 打印匹配报告，未命中的手动处理
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_JS = path.join(ROOT, 'data.js');
const INDEX_HTML = path.join(ROOT, 'index.html');

// ── CSV 解析 ──────────────────────────────────────────────
function parseCSV(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').trim().split('\n');
  const header = lines[0].toLowerCase().split(',').map(h => h.trim().replace(/"/g, ''));
  const rankIdx = header.findIndex(h => h.includes('rank'));
  const nameIdx = header.findIndex(h => h.includes('institution') || h.includes('name') || h.includes('university'));
  if (rankIdx < 0 || nameIdx < 0) {
    console.error('CSV 必须包含 rank 和 institution_name 列。');
    process.exit(1);
  }
  const map = new Map();
  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split(',').map(c => c.trim().replace(/"/g, ''));
    const rank = parseInt(cells[rankIdx]);
    const name = cells[nameIdx];
    if (!isNaN(rank) && name) map.set(name.toLowerCase(), rank);
  }
  return map;
}

// ── 模糊匹配：CSV 英文名 → data.js en 字段 ─────────────────
function bestMatch(enField, csvMap) {
  const key = enField.toLowerCase();
  // 精确匹配
  if (csvMap.has(key)) return csvMap.get(key);
  // 包含匹配（CSV 名常带括号缩写）
  for (const [csvName, rank] of csvMap) {
    if (csvName.includes(key) || key.includes(csvName.replace(/\s*\(.*?\)\s*/g, '').trim())) {
      return rank;
    }
  }
  return null;
}

// ── 主逻辑 ────────────────────────────────────────────────
const csvPath = process.argv[2];
if (!csvPath) {
  console.log('用法: node scripts/update-qs.js <qs排名.csv>');
  console.log('');
  console.log('CSV 列（至少需要）: rank, institution_name');
  process.exit(0);
}

console.log(`读取 CSV: ${csvPath}`);
const csvMap = parseCSV(csvPath);
console.log(`CSV 共 ${csvMap.size} 所院校\n`);

let data = fs.readFileSync(DATA_JS, 'utf8');

// 提取所有院校 entry（匹配 {c:"xx",name:"xx",en:"xx",...,qs:N,...}）
const schoolReg = /(\{c:"[^"]+",name:"([^"]+)",en:"([^"]+)"[^}]*qs:)(\d+)/g;
let match;
const updates = [];
const missed = [];

let updated = data.replace(schoolReg, (full, prefix, name, en, oldQS) => {
  const newRank = bestMatch(en, csvMap);
  if (newRank !== null) {
    updates.push({ name, en, old: parseInt(oldQS), new: newRank });
    return prefix + newRank;
  } else {
    missed.push({ name, en, old: parseInt(oldQS) });
    return full;
  }
});

// 更新 SCHOOLS.forEach avg 计算不变，只改 qs 字段

// ── 写回 data.js ──
fs.writeFileSync(DATA_JS, updated, 'utf8');
console.log(`✅ data.js 已更新 ${updates.length} 所院校的 QS 排名`);

// ── 更新 index.html 里的 DATA_VERSION ──
const year = new Date().getFullYear();
const htmlContent = fs.readFileSync(INDEX_HTML, 'utf8');
const newYear = year + '.' + String(new Date().getMonth() + 1).padStart(2, '0');
const updatedHtml = htmlContent.replace(
  /const DATA_VERSION="[^"]+"/,
  `const DATA_VERSION="${newYear}（QS ${year + 1} 完整版）"`
);
fs.writeFileSync(INDEX_HTML, updatedHtml, 'utf8');
console.log(`✅ index.html DATA_VERSION → "${newYear}（QS ${year + 1} 完整版）"\n`);

// ── 报告 ──
console.log('=== 已更新 ===');
updates.sort((a, b) => a.new - b.new).forEach(u => {
  const arrow = u.new < u.old ? '↑' : u.new > u.old ? '↓' : '→';
  console.log(`  ${u.name.padEnd(14)} QS ${u.old} ${arrow} ${u.new}`);
});

if (missed.length) {
  console.log(`\n=== 未匹配（需手动更新）===`);
  missed.forEach(m => console.log(`  ${m.name.padEnd(14)} en="${m.en}"  当前 QS ${m.old}`));
}

console.log(`\n完成。请运行 git diff data.js 确认后 commit。`);
