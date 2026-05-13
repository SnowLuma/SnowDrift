
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
              SnowDrift is a provider-first runtime skeleton for protocols that refuse to be flattened.
            </p>
          </section>
        </header>
      </div>
    </div>
  );
}