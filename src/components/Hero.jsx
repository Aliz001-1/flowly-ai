import heroVideo from "../assets/videos/flowly-ai-hero-bg.mp4";
function Hero({ onStartFree, onWatchDemo }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-6 pt-32">
    <video
    className="hero-video absolute inset-0 z-0 h-full w-full object-cover"
    src={heroVideo}
    autoPlay
    muted
    loop
    playsInline
    aria-hidden="true"
    />

  <div
    className="absolute inset-0 bg-[#050816]/70"
    aria-hidden="true"
   />

    <div
    className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent"
    aria-hidden="true"
    />

        
      
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wider text-cyan-300">
          AI-POWERED WORKFLOW AUTOMATION
        </div>

        {/* Main Heading */}
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Automate your work.
          <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Amplify your team.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Flowly helps modern teams automate repetitive tasks, connect their
          favorite tools, and build intelligent workflows with AI.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <button
            type="button"
            onClick={onStartFree}
            className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050816]"
          >
            Start Free
          </button>

          <button
            type="button"
            onClick={onWatchDemo}
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050816]"
          >
            Watch Demo
          </button>

        </div>

        {/* Microcopy */}
        <p className="mt-5 text-sm text-slate-500">
          No credit card required · Setup in minutes
        </p>

        {/* Dashboard Preview */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-violet-950/30">
            
            <div className="rounded-xl border border-white/10 bg-[#0B1020]">
              
              {/* Fake Browser Bar */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              {/* Dashboard Placeholder */}
              {/* Dashboard Preview */}
<div className="grid min-h-[320px] grid-cols-1 gap-4 p-6 md:grid-cols-3">

  {/* Workflow Activity */}
  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs font-medium text-slate-500">
          Workflow Activity
        </p>
        <p className="mt-2 text-2xl font-bold text-white">
          1,284
        </p>
      </div>

      <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400">
        +18.4%
      </span>
    </div>

    <div className="mt-6 flex items-end gap-2">
      <div className="h-12 flex-1 rounded-t bg-cyan-400/30" />
      <div className="h-20 flex-1 rounded-t bg-cyan-400/40" />
      <div className="h-14 flex-1 rounded-t bg-violet-400/30" />
      <div className="h-24 flex-1 rounded-t bg-cyan-400/50" />
      <div className="h-16 flex-1 rounded-t bg-violet-400/40" />
      <div className="h-28 flex-1 rounded-t bg-cyan-400/60" />
      <div className="h-20 flex-1 rounded-t bg-violet-400/50" />
    </div>

    <p className="mt-4 text-xs text-slate-500">
      Automated tasks this week
    </p>
  </div>

  {/* Automation Performance */}
  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-left">
    <div className="flex items-center justify-between">
      <p className="text-xs font-medium text-cyan-300">
        Automation Performance
      </p>

      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
    </div>

    <div className="mt-6 flex items-center justify-center">
      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-cyan-400/20">
        <div className="absolute inset-0 rounded-full border-[12px] border-transparent border-t-cyan-400 border-r-violet-500 rotate-45" />

        <div className="text-center">
          <p className="text-3xl font-bold text-white">94%</p>
          <p className="text-xs text-slate-500">success rate</p>
        </div>
      </div>
    </div>

    <div className="mt-5 flex items-center justify-between text-xs">
      <span className="text-slate-500">Tasks completed</span>
      <span className="font-semibold text-white">8,492</span>
    </div>
  </div>

  {/* Recent Automations */}
  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left">
    <div className="flex items-center justify-between">
      <p className="text-xs font-medium text-slate-500">
        Recent Automations
      </p>

      <span className="text-xs text-cyan-400">
        Live
      </span>
    </div>

    <div className="mt-5 space-y-4">

      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/10 text-xs text-violet-300">
          AI
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-white">
            Lead qualification
          </p>
          <p className="text-[11px] text-slate-500">
            Completed 2m ago
          </p>
        </div>

        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-xs text-cyan-300">
          ↗
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-white">
            Slack notification
          </p>
          <p className="text-[11px] text-slate-500">
            Completed 5m ago
          </p>
        </div>

        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10 text-xs text-blue-300">
          ✓
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-white">
            Customer follow-up
          </p>
          <p className="text-[11px] text-slate-500">
            Running now
          </p>
        </div>

        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
      </div>

    </div>
              </div>

            </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;