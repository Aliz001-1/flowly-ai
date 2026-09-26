import { useState } from "react";

function ProductShowcase() {
  const [showPreview, setShowPreview] = useState(false);
  const [workflowCreated, setWorkflowCreated] = useState(false);

  function handleNewWorkflow() {
    setWorkflowCreated(true);
  }

  return (
    <section
      id="product"
      className="scroll-mt-20 overflow-hidden bg-[#050816] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Product Overview
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            See your entire workflow at a glance.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Build, monitor, and optimize your workflows from one powerful
            workspace designed for modern teams.
          </p>

          {/* Feature List */}
          <ul className="mt-8 space-y-4">
            {[
              "Visual workflow builder",
              "AI-powered automation",
              "Live workflow analytics",
              "Team activity monitoring",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-slate-300"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm text-cyan-300">
                  ✓
                </span>

                {item}
              </li>
            ))}
          </ul>

          {/* Explore Product */}
          <button
            type="button"
            onClick={() => setShowPreview((current) => !current)}
            className="mt-9 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {showPreview ? "Hide Preview" : "Explore Product"}

            <span
              className={`transition-transform duration-300 ${
                showPreview ? "rotate-90" : ""
              }`}
            >
              →
            </span>
          </button>

          {/* Product Preview Info */}
          {showPreview && (
            <div className="mt-6 max-w-xl rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-5">
              <p className="text-sm font-semibold text-cyan-300">
                Flowly Workspace Preview
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Manage workflows, monitor automation activity, and track
                time saved from one centralized workspace.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-xs text-slate-500">
                    Active workflows
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    24
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-xs text-slate-500">
                    Time saved
                  </p>
                  <p className="mt-1 text-lg font-bold text-cyan-300">
                    86h
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dashboard */}
        <div className="relative">
          {/* Background Glow */}
          <div
            className="absolute -inset-10 rounded-full bg-violet-600/10 blur-3xl"
            aria-hidden="true"
          />

          {/* Dashboard Container */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020] shadow-2xl shadow-black/30">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Workflow Overview
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Updated just now
                </p>
              </div>

              <button
                type="button"
                onClick={handleNewWorkflow}
                className="rounded-lg bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-400/20"
              >
                {workflowCreated
                  ? "Workflow Created ✓"
                  : "+ New Workflow"}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3">

              {/* Active Workflows */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Active
                  </p>

                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>

                <p className="mt-2 text-2xl font-bold text-white">
                  24
                </p>

                <p className="mt-1 text-[11px] text-emerald-400">
                  +12% this week
                </p>
              </div>

              {/* Completed Tasks */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-violet-400/20 hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Completed
                  </p>

                  <span className="text-xs text-violet-300">
                    ↗
                  </span>
                </div>

                <p className="mt-2 text-2xl font-bold text-white">
                  1,284
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  Tasks automated
                </p>
              </div>

              {/* Time Saved */}
              <div className="col-span-2 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4 transition duration-300 hover:border-cyan-400/30 sm:col-span-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Time Saved
                  </p>

                  <span className="text-xs text-cyan-300">
                    AI
                  </span>
                </div>

                <p className="mt-2 text-2xl font-bold text-cyan-300">
                  86h
                </p>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                </div>

                <p className="mt-2 text-[11px] text-slate-500">
                  Saved this month
                </p>
              </div>
            </div>

            {/* Workflow */}
            <div className="px-5 pb-5">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

                {/* Workflow Header */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Lead Follow-up Automation
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Runs automatically when a new lead arrives
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-green-400/10 px-2.5 py-1 text-xs text-green-300">
                    Active
                  </span>
                </div>

                {/* Workflow Nodes */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">

                  {/* Trigger */}
                  <div className="group flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.04]">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/10 text-sm text-violet-300">
                        ⚡
                      </span>

                      <span className="text-xs font-medium text-slate-500">
                        Trigger
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-medium text-white">
                      New form submission
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500">
                      Starts workflow automatically
                    </p>
                  </div>

                  {/* Connector */}
                  <div className="hidden items-center justify-center sm:flex">
                    <span className="text-lg text-cyan-400/60">
                      →
                    </span>
                  </div>

                  {/* AI Action */}
                  <div className="group flex-1 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] p-4 shadow-lg shadow-cyan-500/5 transition duration-300 hover:border-cyan-400/40">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-sm text-cyan-300">
                        ✦
                      </span>

                      <span className="text-xs font-medium text-cyan-400">
                        AI Action
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-medium text-white">
                      Analyze lead
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500">
                      AI evaluates intent & quality
                    </p>
                  </div>

                  {/* Connector */}
                  <div className="hidden items-center justify-center sm:flex">
                    <span className="text-lg text-cyan-400/60">
                      →
                    </span>
                  </div>

                  {/* Final Action */}
                  <div className="group flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-sm text-emerald-300">
                        ✓
                      </span>

                      <span className="text-xs font-medium text-slate-500">
                        Action
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-medium text-white">
                      Send personalized email
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500">
                      Runs automatically
                    </p>
                  </div>
                </div>

                {/* Workflow Status */}
                {workflowCreated && (
                  <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-xs text-emerald-300">
                        ✓
                      </span>

                      <p className="text-xs text-emerald-300">
                        New workflow successfully added to your workspace.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductShowcase;