## simu-hybird

## 说明

### 开始
```
npm install    安装依赖包
npm run start  开发环境
npm run build  构建生成包
```
### 技术

1. 自动化构建`webpack`
2. UI组件 `React`
3. 路由管理 `React-Router-dom`
4. 状态管理 `redux`
5. 通用组件 按需载入`antd-mobile`
6. es6转码 按需载入`babel-polyfill`
7. 按需加载 `react-loadable`

### 项目

整个工程使用二级路由. 一级路由为项目

`ticketManage` 券码管理

1. `/ticketManage` 首页
2. `/ticketManage/recoverList`   回收列表
3. `/ticketManage/recoverDetail` 回收详情
`...`

`homePage`  管理员首页（待生成）
...

