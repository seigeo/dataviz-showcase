
# 数据可视化图谱（Vue + ECharts + AI 智能推荐）

> 一个基于 Vue 3 与 ECharts 的交互式图表演示平台，结合 DeepSeek AI 接口，实现图表类型展示与智能推荐。

---

## 📌 项目简介

本项目是山东大学《数据可视化》课程的小组作业，旨在通过交互式图表演示与 AI 智能问答，帮助用户理解和掌握常见图表类型及其适用场景。

用户可：

- ✅ 点击侧边栏切换不同图表类型（如柱状图、折线图、饼图、散点图、雷达图）
- ✅ 在 AI 页面输入数据分析目标，获得基于自然语言的图表推荐
- ✅ 查看带有 Markdown 渲染的格式化回复，增强阅读体验

---

## 📷 页面预览

- **首页**：项目简介与跳转入口
- **图表页**：侧边栏图表选择 + 动态交互演示 + 场景解释
- **图表推荐页**（新增）：与 DeepSeek 对话，自动推荐可视化图表
- **关于页**：小组介绍 + 技术说明 + 致谢信息

---

## 🧩 技术栈

| 技术         | 用途                    |
| ------------ | ----------------------- |
| Vue 3        | 前端框架                |
| Vue Router   | 页面路由管理            |
| Vite         | 构建工具，快速热更新    |
| ECharts      | 图表可视化展示核心库    |
| marked       | Markdown 渲染           |
| DeepSeek API | AI 图表推荐接口（调用） |
| HTML/CSS     | 页面结构与样式          |

---

## 📁 项目结构

```bash
src/
├── main.js               # Vue 应用入口
├── App.vue               # 根组件，包含导航栏
├── router/index.js       # 路由配置
├── views/
│   ├── Home.vue          # 首页
│   ├── Charts.vue        # 图表演示页（主功能）
│   ├── Recommend.vue     # ✅ 新增：AI 图表推荐页面
│   └── About.vue         # 关于我们
├── assets/               # 静态资源
└── components/           # 可拆分组件（可选）
```

---



## **🚀 快速开始**

### **安装依赖**

```
npm install
```

### **启动开发服务器**

```
npm run dev
```

**访问地址： **[http://localhost:5173](http://localhost:5173)

### **打包构建**

```
npm run build
```

**打包结果输出在 dist/ 文件夹，可部署到静态服务器。**

---

## **🔐 关于 API Key 使用说明**

* **本项目使用了 ****DeepSeek Chat API**，需要在 Recommend.vue 中手动替换你的 API Key；
* **请勿将包含 API Key 的代码上传至 GitHub 公共仓库**，建议仅本地运行或通过后端代理转发；

---

## **🔗 参考链接**

* [ECharts 官网](https://echarts.apache.org/zh/index.html)
* [Vue 官方文档](https://cn.vuejs.org/)
* [Vite 官方文档](https://vitejs.dev/)
* [marked.js](https://marked.js.org/) — Markdown 解析库
* [DeepSeek 官网](https://deepseek.com/) — AI 接口服务平台

---

## **📄 许可**

**本项目仅用于教学与学习目的，禁止任何形式的商业用途。**
