## 计划与技术栈
- Packag：pnpm moonrepo
- Core：Typescript + SnowDriftHttp (流程控制)
- RuntimeSdk: Typescript (Plugins)
- WebUi: Typescript + React + Tailwind + Vite
- Tests: Vitest
- Database: Sqlite + ... (Adapter Plugin)
- Desktop: Electron
## RuntimeSdk
- [ ] Stream Helper (提供流式与非流式互转)
- [ ] Tool Transform (工具调用互相转换)
- [ ] Basic Struct (基础结构创建)

## RoadMap
- [ ] 支持每一个Provider单独配置各项参数 包括Adapter/Core行为

## 目标
- [ ] 本地程序/服务端程序实现，覆盖大部分场景。
- [ ] 在100行内能够实现大部分Adapter(逆向去除无关协议转换部分200行内)