# SnowDrift
> Any Model. Any Protocol.

---

# Design

协议转换一直以来都是基础设施领域最复杂的问题之一。

而在 LLM 时代，这个问题被进一步放大。

模型供应商正在以极高频率演化协议：

1. thinking / reasoning 字段持续变化
2. tool calling 不断调整
3. 逆向协议难以转换

所谓统一协议实际上从未真正存在。

大多数 Gateway 项目选择通过内部 IR尝试统一所有 Provider。

这种设计在理论上优雅，但随着协议复杂度增长，IR 最终会演化为问题所在。

> “所有协议不应该被强行统一”

相反。

> 协议方言（Protocol Dialects）将长期存在。

---