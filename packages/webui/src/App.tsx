const packages = [
  {
    name: "@snowdrift/core",
    scope: "契约层",
    description: "Provider 能力模型、Adapter 接口和基础结构的起点。"
  },
  {
    name: "@snowdrift/http",
    scope: "运行时入口",
    description: "负责 Provider 注册、发现和后续 HTTP 生命周期编排。"
  },
  {
    name: "@snowdrift/webui",
    scope: "控制台",
    description: "承担 Provider 配置、状态查看和调试视图的前端壳层。"
  }
];

const nextSteps = [
  "补 Stream Helper / Tool Transform / Basic Struct。",
  "把 HTTP runtime 接到实际路由与请求生命周期。",
  "在 WebUI 中接入 provider 配置、日志与调试面板。"
];

const commands = ["pnpm install", "pnpm dev:webui", "pnpm typecheck", "pnpm build"];

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-7rem] top-[-6rem] h-64 w-64 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 h-80 w-80 rounded-full bg-teal-400/25 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.85fr)]">
          <section className="panel">
            <p className="eyebrow">SnowDrift / Bootstrap</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Provider-first runtime skeleton for protocols that refuse to be flattened.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              这版仓库已经具备 monorepo、核心契约、HTTP runtime 和控制台三层骨架，可以直接从
              Provider 适配器、路由层与管理界面并行推进。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {commands.map((command) => (
                <span key={command} className="command-chip">
                  {command}
                </span>
              ))}
            </div>
          </section>

          <section className="panel">
            <p className="eyebrow">Current focus</p>
            <div className="mt-5 space-y-4">
              {nextSteps.map((step, index) => (
                <div key={step} className="rounded-3xl border border-slate-200/80 bg-white/75 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                    Step 0{index + 1}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className="panel">
              <p className="eyebrow">{item.scope}</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">{item.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="panel">
            <p className="eyebrow">Architecture</p>
            <div className="mt-5 rounded-[1.5rem] bg-slate-950 p-6 font-mono text-sm leading-7 text-slate-100">
              <div>Client</div>
              <div>  ↓</div>
              <div>SnowDrift Runtime</div>
              <div>  ↓</div>
              <div>Provider Adapter</div>
              <div>  ↓</div>
              <div>Protocol Dialect Layer</div>
              <div>  ↓</div>
              <div>Actual Provider</div>
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Principles</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <p>统一的是基础设施，不是语义本身。</p>
              <p>Provider 能力需要显式声明，而不是被大 IR 隐藏。</p>
              <p>协议方言长期存在，运行时应该围绕它组织。</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}