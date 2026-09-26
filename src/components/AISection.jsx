import { useState } from "react";

function AISection() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [workflowReady, setWorkflowReady] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [workflowCompleted, setWorkflowCompleted] = useState(false);
  const [tasksAutomated, setTasksAutomated] = useState(842);
  const [timeSaved, setTimeSaved] = useState(32);

  function handleGenerate() {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setWorkflowReady(false);
    setWorkflowCompleted(false);

    setTimeout(() => {
      setIsGenerating(false);
      setWorkflowReady(true);
    }, 1400);
  }

  function handleRunWorkflow() {
    if (isRunning || !workflowReady) return;

    setIsRunning(true);

    setTimeout(() => {
      setIsRunning(false);
      setWorkflowCompleted(true);
      setTasksAutomated((current) => current + 1);
      setTimeSaved((current) => current + 1);
    }, 1600);
  }

  return (
    <section
      id="ai"
      className="scroll-mt-20 overflow-hidden bg-[#050816] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* AI Interface */}
        <div className="order-2 lg:order-1">
          <div className="relative">

            {/* Glow */}
            <div
              className="absolute -inset-12 rounded-full bg-cyan-500/10 blur-3xl"
              aria-hidden="true"
            />

            {/* Main AI Panel */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020] shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                    ✦
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Flowly AI
                    </p>

                    <p className="flex items-center gap-1 text-xs text-green-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      Online
                    </p>
                  </div>
                </div>

                <span className="text-xs text-slate-500">
                  AI Assistant
                </span>
              </div>

              {/* Conversation */}
              <div className="space-y-5 p-5">

                {/* Default User Message */}
                <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-violet-500/10 p-4">
                  <p className="text-sm leading-6 text-slate-200">
                    Create a workflow that follows up with new leads
                    automatically.
                  </p>
                </div>

                {/* AI Response */}
                <div className="max-w-[90%] rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex gap-3">

                    {/* AI Icon */}
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-400/10 text-xs text-cyan-300">
                      ✦
                    </div>

                    <div className="min-w-0 flex-1">

                      {/* AI Status */}
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-medium text-cyan-300">
                          Flowly AI
                        </p>

                        {isGenerating ? (
                          <span className="flex items-center gap-1 text-[10px] text-violet-300">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                            Thinking...
                          </span>
                        ) : workflowCompleted ? (
                          <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Completed
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Ready
                          </span>
                        )}
                      </div>

                      {/* Dynamic AI Text */}
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {isGenerating
                          ? "I'm analyzing your request and designing the best workflow..."
                          : workflowCompleted
                            ? "Done. Your workflow has completed successfully."
                            : workflowReady
                              ? "I've created a workflow based on your instructions. Review the steps below and run it when you're ready."
                              : "Done. I've created a workflow that detects new leads, analyzes their information, and sends a personalized follow-up automatically."}
                      </p>

                      {/* Workflow Result */}
                      <div className="mt-4 rounded-lg border border-cyan-400/10 bg-cyan-400/[0.04] p-3">

                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs font-medium text-white">
                              {workflowReady
                                ? "Workflow generated"
                                : "Workflow created"}
                            </p>

                            <p className="mt-1 text-[10px] text-slate-500">
                              3 automation steps ready
                            </p>
                          </div>

                          <span
                            className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                              workflowCompleted
                                ? "bg-emerald-400/10 text-emerald-400"
                                : "bg-cyan-400/10 text-cyan-300"
                            }`}
                          >
                            {workflowCompleted ? "Completed" : "Active"}
                          </span>
                        </div>

                        {/* Progress */}
                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-700 ${
                              isGenerating
                                ? "w-1/3"
                                : workflowCompleted
                                  ? "w-full"
                                  : "w-full"
                            }`}
                          />
                        </div>

                        {/* Workflow Steps */}
                        <div className="mt-4 grid grid-cols-3 gap-2">

                          {/* Step 1 */}
                          <div className="rounded-md border border-white/5 bg-white/[0.03] p-2 text-center">
                            <span className="text-[10px] text-violet-300">
                              01
                            </span>

                            <p className="mt-1 text-[10px] text-slate-400">
                              Detect
                            </p>
                          </div>

                          {/* Step 2 */}
                          <div className="rounded-md border border-cyan-400/10 bg-cyan-400/[0.04] p-2 text-center">
                            <span className="text-[10px] text-cyan-300">
                              02
                            </span>

                            <p className="mt-1 text-[10px] text-slate-400">
                              Analyze
                            </p>
                          </div>

                          {/* Step 3 */}
                          <div className="rounded-md border border-white/5 bg-white/[0.03] p-2 text-center">
                            <span className="text-[10px] text-emerald-300">
                              03
                            </span>

                            <p className="mt-1 text-[10px] text-slate-400">
                              Follow up
                            </p>
                          </div>
                        </div>

                        {/* Run Workflow */}
                        {workflowReady && (
                          <button
                            type="button"
                            onClick={handleRunWorkflow}
                            disabled={isRunning}
                            className="mt-4 w-full rounded-lg bg-cyan-400/10 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {isRunning
                              ? "Running workflow..."
                              : workflowCompleted
                                ? "Workflow completed ✓"
                                : "Run Workflow →"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Prompt */}
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                    <div className="flex-1">
                      <label
                        htmlFor="ai-prompt"
                        className="mb-2 block text-[11px] font-medium text-slate-500"
                      >
                        Tell Flowly what you want to automate
                      </label>

                      <textarea
                        id="ai-prompt"
                        value={prompt}
                        onChange={(event) => setPrompt(event.target.value)}
                        onKeyDown={(event) => {
                          if (
                            event.key === "Enter" &&
                            !event.shiftKey
                          ) {
                            event.preventDefault();
                            handleGenerate();
                          }
                        }}
                        rows={2}
                        placeholder="e.g. Send a Slack message when a new customer signs up..."
                        className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs leading-5 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/30 focus:ring-1 focus:ring-cyan-400/20"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleGenerate}
                      disabled={!prompt.trim() || isGenerating}
                      className="shrink-0 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2.5 text-xs font-semibold text-[#050816] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {isGenerating
                        ? "Generating..."
                        : "Generate Workflow"}
                    </button>
                  </div>
                </div>

                {/* AI Metrics */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                  {/* Tasks */}
                  <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] text-slate-500">
                        Tasks automated
                      </p>

                      <span className="text-[10px] text-violet-300">
                        +24%
                      </span>
                    </div>

                    <p className="mt-2 text-xl font-bold text-white">
                      {tasksAutomated}
                    </p>

                    <div className="mt-3 flex items-end gap-1">
                      <span className="h-2 w-1/6 rounded-full bg-violet-400/30" />
                      <span className="h-3 w-1/6 rounded-full bg-violet-400/40" />
                      <span className="h-4 w-1/6 rounded-full bg-violet-400/50" />
                      <span className="h-5 w-1/6 rounded-full bg-violet-400/60" />
                      <span className="h-6 w-1/6 rounded-full bg-violet-400/70" />
                      <span className="h-8 w-1/6 rounded-full bg-violet-400" />
                    </div>
                  </div>

                  {/* Time Saved */}
                  <div className="group rounded-xl border border-cyan-400/10 bg-cyan-400/[0.03] p-4 transition duration-300 hover:border-cyan-400/30">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] text-slate-500">
                        Time saved
                      </p>

                      <span className="text-[10px] text-cyan-300">
                        This month
                      </span>
                    </div>

                    <p className="mt-2 text-xl font-bold text-cyan-300">
                      {timeSaved}h
                    </p>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div className="group rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] p-4 transition duration-300 hover:border-emerald-400/30">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] text-slate-500">
                        Success rate
                      </p>

                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-[10px] text-emerald-300">
                        ✓
                      </span>
                    </div>

                    <p className="mt-2 text-xl font-bold text-emerald-300">
                      98%
                    </p>

                    <p className="mt-3 text-[10px] text-slate-500">
                      Automation running smoothly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            AI Automation
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Your AI team, working around the clock.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Tell Flowly what you want to automate. AI turns your instructions
            into intelligent workflows that keep working while your team
            focuses on what matters.
          </p>

          {/* Steps */}
          <div className="mt-8 space-y-5">

            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                01
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Describe the task
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Explain what you want to automate using simple language.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">
                02
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Let AI build it
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Flowly turns your instructions into a connected workflow.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-400/10 text-green-300">
                03
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Let it run
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Your automation runs continuously in the background.
                </p>
              </div>
            </div>
          </div>

          {/* Small CTA */}
          <div className="mt-9 rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-sm font-medium text-white">
              No complicated workflow builder required.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Just describe what you need and let AI handle the setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AISection;