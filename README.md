# SnowDrift
> Any Model. Any Protocol.

---

# Design

协议转换一直以来都是基础设施领域最复杂的问题之一。

而在 LLM 时代，这个问题被进一步放大。

模型供应商正在以极高频率演化协议：

- thinking / reasoning 字段持续变化
- tool calling 不断调整
- 逆向协议难以转换

所谓统一协议实际上从未真正存在。

大多数 Gateway 项目选择：

```text
Provider A
   ↓
 Internal IR
   ↓
Provider B
```

通过内部 IR尝试统一所有 Provider。

这种设计在理论上优雅。

但随着协议复杂度增长，IR 最终会演化为：

- 巨量特殊字段
- provider-specific hacks
- semantic loss
- compatibility ambiguity

最终整个系统会退化为：

```text
if provider == x:
    ...
elif provider == y:
    ...
```

我们在所有时候都不认为：

> “所有协议都应该被强行统一”

相反。

> 协议方言（Protocol Dialects）将长期存在。

并且：

> Provider-specific semantics 不应该被 IR 抹平。

---

# Core Philosophy

SnowDrift 的核心目标不是：

- 发明新的统一协议
- 构建更大的 IR
- 隐藏 Provider 差异

而是：

- 承认协议差异
- 显式表达协议能力
- 提供标准化适配脚手架
- 提供 Provider-Scoped Runtime
- 提供协议级基础设施

不仅仅是：

```json
{
  "role": "...",
  "content": "..."
}
```

---

# Architecture

```text
Client
   ↓
SnowDrift Runtime
   ↓
Provider Adapter
   ↓
Protocol Dialect Layer
   ↓
Actual Provider
```

不是构建共享一个脆弱的全局转换层，而是构建一套协议转换基础生态。

---

# Provider-First Runtime
我们

```text
Provider-First Architecture
```

而不是：

```text
IR-First Architecture
```

Provider 是一等公民。

协议差异是显式存在的。

SnowDrift 不试图隐藏这些差异。

---

# Philosophy

```text
Any Model.
Any Protocol.
Without Flattening Semantics.
```