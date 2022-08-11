<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/154486817-f86b8f20-5463-4122-b6e9-930622e757f2.png' alt='start-simple-template - Opinionated Vite Starter Template' width='600'/>
</p>


<p align='center'>
快速地<sup><em>start-simple-template</em></sup> 创建 Web 应用
<br> 
</p>


<br>

<p align='center'>
<a href="https://start-simple-template.netlify.app/">在线 Demo</a>
</p>

<br>

<br>

## 特性

- ⚡️ [Vue 2](https://cn.vuejs.org/index.html), [vueCli@next](https://cli.vuejs.org/zh/), [yarn](https://yarn.bootcss.com/)  - 就是稳！

- 🗂 [固定资源存放](./src/assets)

- 📦 [使用 vueRouter路由导航](https://github.com/vuejs/vue-router)

- 🛒 [使用 Vuex 的状态管理](https://github.com/vuejs/vuex)

- 🛴 [lodash工具](https://lodash.com/)函数加持

- 🔨 [vconsole](https://www.npmjs.com/package/vconsole)  独特的调试方式

- 📑 [目录系统归纳](./src/layouts)

- 🔥 使用 [传统Option写法](./src/App.vue)

- 🎭 使用 [mock](./mock) - 进行数据模拟

- 🎃 [环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)设定

- 🎄[Less预处理器](https://www.npmjs.com/package/less) 样式处理

- ☁️ 零配置部署 Netlify

<br>

## 预配置

### UI 框架

- [ElementUI](https://www.npmjs.com/package/element-ui) - 为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库

- [VantUI](https://www.npmjs.com/package/vant) - 轻量、可靠的移动端 Vue 组件库

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [babel-plugin-lodash](https://github.com/vuejs/vue-router) - 按需加载 lodash 函数库

### 编码风格

- 使用 Composition API 地 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配置为 [@antfu/eslint-config](https://github.com/antfu/eslint-config), 单引号, 无分号.

## 衍生项目

由于这个模板的业务场景非常的局限，下面提供了一个精心策划的列表，列出了社区维护的具有不同偏好和功能集的衍生项目。也可以看看他们。当然也欢迎你 PR 提供自己的项目！

###### 官方

- [start-simple-template-lite](https://github.com/antfu/start-simple-template-lite) - start-simple-template 的轻量版本
- [start-simple-template-nuxt3](https://github.com/antfu/start-simple-template-nuxt3) - start-simple-template 的 Nuxt 3 版本
- [start-simple-template-nuxt-bridge](https://github.com/antfu/start-simple-template-nuxt-bridge) - start-simple-template 的 Nuxt2 桥接版本
- [start-simple-template-webext](https://github.com/antfu/start-simple-template-webext) - 开箱即用的浏览器扩展 vite 模板


## 现在可以试试!

> start-simple-template 需要 Node 版本 >=14

### GitHub 模板

[使用这个模板创建仓库](https://github.com/dbudaiya/start-simple-template/generate).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit dbudaiya/start-simple-template my-start-simple-template-app
cd my-start-simple-template-app
yarn i # 如果你没装过 yarn, 可以先运行: npm install -g yarn
```

## 清单

使用此模板时，请尝试按照清单正确更新您自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `App.vue` 中改变标题
- [ ] 在 `vue.config.ts` 更改主机名
- [ ] 在 `public` 目录下改变favicon
- [ ] 整理 README 并删除路由

紧接着, 享受吧 :)

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:3333 中看到

```bash
yarn dev
```

### 构建

构建该应用只需要执行以下命令

```bash
yarn build
```

然后你会看到用于发布的 `dist` 文件夹被生成。

### 部署到 Netlify

前往 [Netlify](https://app.netlify.com/start) 并选择你的仓库, 一路 `OK` 下去，稍等一下后，你的应用将被创建.
