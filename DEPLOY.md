# 🚀 Vercel 部署指南

## 📋 前置条件

1. **GitHub 账户**
2. **Vercel 账户** (免费: https://vercel.com)
3. **Node.js 18+**

---

## 🚀 部署步骤

### 1. 推送到 GitHub

```bash
cd /Users/heyiqing/.openclaw/workspace/ai-daily-observer

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: AI Daily Observer"

# 创建 GitHub 仓库并推送
# 1. 访问 https://github.com/new
# 2. 创建新仓库 (不要添加 .gitignore, README, license)
# 3. 复制仓库 URL
# 4. 添加远程仓库
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### 2. 部署到 Vercel

#### 方式 A: 通过 GitHub 集成 (推荐)

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你的 `ai-daily-observer` 仓库
5. 点击 "Import"

#### 方式 B: 使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd /Users/heyiqing/.openclaw/workspace/ai-daily-observer
vercel

# 按照提示操作
# 1. 设置项目名称: ai-daily-observer
# 2. 部署到生产: vercel --prod
```

### 3. 配置域名 (可选)

在 Vercel Dashboard 中：
1. 进入项目设置 → Domains
2. 添加自定义域名
3. 按照 DNS 配置说明操作

---

## 📝 如何添加新的每日 Memo

1. 创建新的 Markdown 文件
```bash
cd /Users/heyiqing/.openclaw/workspace/ai-daily-observer/content

# 创建今天的 memo
cat > 2026-02-07.md << 'EOF'
---
date: 2026-02-07
title: AI 创业圈观察 - 第2期
techInsights:
  - ...
trendingProjects:
  - ...
edTechInnovation:
  - ...
---

# 你的内容

EOF
```

2. 提交并推送
```bash
git add content/2026-02-07.md
git commit -m "Add memo for 2026-02-07"
git push
```

3. Vercel 自动部署 (1-2 分钟)

---

## 🎯 每日打卡流程

1. **打开站点** - https://ai-daily-observer.vercel.app
2. **查看最新观察** - 首页显示最新 memo
3. **添加新 memo** - 在 `content/` 目录创建新文件
4. **推送 GitHub** - 自动部署到 Vercel
5. **访问新页面** - 自动显示在首页

---

## 🔧 自定义配置

### 修改主题色
编辑 `app/globals.css` 中的 CSS 变量

### 修改布局
编辑 `app/layout.tsx` 中的 header/footer

### 添加新功能
- 创建新组件到 `components/`
- 在页面中导入使用

---

## 📊 网站结构

```
ai-daily-observer/
├── app/
│   ├── page.tsx              # 首页 (最新 + 历史)
│   ├── memos/
│   │   ├── page.tsx          # 所有 memo 列表
│   │   └── [date]/
│   │       └── page.tsx      # 单个 memo 详情
│   └── layout.tsx            # 全局布局
├── components/
│   ├── memo-card.tsx         # Memo 卡片组件
│   ├── theme-provider.tsx    # 暗黑模式
│   └── ui/
│       └── card.tsx          # 卡片 UI 组件
├── content/
│   └── 2026-02-06.md        # Memo 内容 (Markdown)
├── lib/
│   └── memo.ts              # Memo 解析工具
└── public/                   # 静态资源
```

---

## 🆕 自动更新机制

当你推送到 GitHub 时：
1. GitHub webhook 触发 Vercel
2. Vercel 自动构建
3. 部署到生产环境
4. 新 content 立即可见

---

## 💡 提示

1. **使用相对日期** - 在 Memo 中使用 "今天"、"本周" 等
2. **保持格式一致** - 遵循现有的 Markdown 格式
3. **添加链接** - 在内容中添加相关链接
4. **图片支持** - 可以在 `public/` 添加图片，在 Markdown 中引用

---

## 🎉 完成！

现在你有了一个自动部署的 AI 创业圈每日观察站！

**访问地址**: https://ai-daily-observer.vercel.app (部署后)
**本地开发**: http://localhost:3000

---

*部署完成后，记得更新 README 中的访问地址*
