# 🎓 全球 TOP100 硕士申请导航

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-4f46e5?style=flat-square&logo=github)](https://benjaminjason.github.io/master-hub/)
[![File Size](https://img.shields.io/badge/体积-~600KB-10b981?style=flat-square)](#)
[![Schools](https://img.shields.io/badge/院校-112所-f59e0b?style=flat-square)](#)
[![Countries](https://img.shields.io/badge/覆盖-18国-6366f1?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

一个**纯前端离线工具**，覆盖全球 TOP100 硕士申请全流程。无需安装、无需注册，所有数据存储在本地浏览器。推荐通过 GitHub Pages 在线使用，也可安装为 PWA 离线 App。

**[➜ 在线体验](https://benjaminjason.github.io/master-hub/)**

---

## 功能概览

| 模块 | 说明 |
|------|------|
| 🏫 **院校库** | 112所院校 QS2027排名，展开查看简介、优势学科、申请要求、学生评分、就业实况 |
| 📋 **热门项目详情** | LSE / 帝国 / UCL / 牛津 / CMU 等15所热门学校各项目具体均分/雅思/截止日 |
| 🎯 **选校匹配** | 填均分+语言+方向，自动生成冲刺/匹配/保底梯队，支持一键加入对比 |
| 📅 **申请时间轴** | 按国家展示全周期节点，今日重点智能提醒，距 DDL 倒计时 |
| 📋 **我的申请** | TrackerV2 申请进度追踪，导出/导入/PDF导出/📤分享梯队图 |
| 💰 **奖学金** | 政府/院校/地区级奖学金，按你已选国家高亮显示 |
| 🛂 **签证&政策** | 各国签证类型、材料清单、常见被拒原因 |
| 🌏 **生活&就业** | 学生真实语录、行业评价、博主搜索词、工签/薪资/WLB、回国落户/国央企路径 |
| 📝 **文书模板** | PS/CV/推荐信框架，支持复制导出 |
| ✅ **申请清单** | 勾选式进度管理，可视化完成率 |
| 🔍 **全局搜索** | 院校/奖学金/国家/时间轴阶段一键直达 |
| ❤️ **收藏夹** | 标记目标院校，过滤只看收藏 |

---

## 覆盖国家

🇬🇧 英国 · 🇺🇸 美国 · 🇦🇺 澳大利亚 · 🇨🇦 加拿大 · 🇸🇬 新加坡 · 🇭🇰 香港 · 🇨🇭 瑞士 · 🇳🇱 荷兰 · 🇯🇵 日本 · 🇰🇷 韩国 · 🇩🇪 德国 · 🇳🇿 新西兰 · 🇲🇾 马来西亚 · 🇫🇷 法国 · 🇸🇪 瑞典 · 🇧🇪 比利时 · 🇩🇰 丹麦 · 🇨🇳 中国大陆

---

## 快速开始

### 方式一：在线使用（推荐）
直接打开 → **[https://benjaminjason.github.io/master-hub/](https://benjaminjason.github.io/master-hub/)**

### 方式二：本地运行（需同时下载两个核心文件）
```bash
# v1.2 起数据独立为 data.js，index.html 和 data.js 必须在同一目录
curl -O https://raw.githubusercontent.com/BenjaminJason/master-hub/main/index.html
curl -O https://raw.githubusercontent.com/BenjaminJason/master-hub/main/data.js
# 必须通过本地服务器打开（直接双击因浏览器安全策略无法加载 data.js）
npx serve .          # 方法一
python3 -m http.server 8080  # 方法二（访问 http://localhost:8080）
```
> 💡 **最省事的方式是直接用 GitHub Pages 链接或安装 PWA**，无需本地文件。

### 分享特定页面
切换到任意 tab / 国家后，点击右上角 **🔗** 按钮复制当前页面链接，发给朋友可直接跳转到同一视图。

### 方式三：安装为 App（PWA，推荐离线使用）
在 Chrome/Edge 打开在线链接 → 地址栏右侧点击「安装」图标 → 像 App 一样使用，支持离线访问。

---

## 数据说明

- **院校排名**：QS World University Rankings 2027（官方完整版）
- **申请数据**：基于往届中国学生录取情况统计，±4分区间内属正常波动
- **奖学金/签证**：各国官方政策，申请前以官网为准
- **数据版本**：`2026.06`，QS 2028 发布后同步更新

---

## 本地数据存储

所有个人数据（申请追踪、收藏夹、清单勾选）均存储在**本机浏览器 localStorage**，不上传服务器。

| localStorage 键 | 内容 |
|----------------|------|
| `mh_v2` | 申请追踪（TrackerV2） |
| `mh_schol` | 奖学金追踪 |
| `mh_ck` | 申请清单勾选状态 |
| `mh_vcks` | 签证清单勾选状态 |
| `mh_fees` | 费用记录 |
| `mh_fav` | 收藏夹院校列表 |
| `mh_theme` | 深色/浅色模式偏好 |

**换设备前请先在「我的申请」→「导出」备份数据。**

---

## 技术栈

- 纯 HTML + CSS + Vanilla JS，无任何外部依赖
- 单文件，无构建工具，无 npm，无服务器
- PWA 支持（manifest.json + sw.js），可离线安装
- 深色模式，响应式布局

---

## 更新计划

- [x] GPA 换算器（85分 → UK First / GPA 3.5）
- [x] 申请截止日期精准数据库（热门院校精准截止日，180天内倒计时）
- [ ] 日本 / 荷兰 / 瑞士扩展院校
- [ ] 录取数据众包（买家提交真实录取结果）
- [ ] QS 2028 数据更新（预计 2027 年 6 月）

---

## License

MIT © 2026 BenjaminJason
