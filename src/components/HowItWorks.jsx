import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    shortTitle: "Connect",
    description:
      "Connect the apps your team already uses, from email and project management to communication and storage.",
    details:
      "Bring your existing tools into one workspace so Flowly can move information between them automatically.",
    icon: "⌘",
  },
  {
    number: "02",
    title: "Build your workflow",
    shortTitle: "Build",
    description:
      "Create an automation visually or describe what you need and let Flowly AI help build it.",
    details:
      "Describe the process you want to automate and Flowly AI turns your instructions into a connected workflow.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Let AI automate it",
    shortTitle: "Automate",
    description:
      "Turn repetitive tasks into reliable automated processes that run continuously in the background.",
    details:
      "Once your workflow is ready, Flowly handles repetitive tasks automatically while your team focuses on important work.",
    icon: "⚡",
  },
];

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];

  function handleStepClick(index) {
    setActiveStep(index);
  }

  function handleNext() {
    setActiveStep((current) =>
      current === steps.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-[#050816] px-6 pb-24 pt-32 sm:pb-32 sm:pt-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Automation without the complexity.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Go from idea to automated workflow in three simple steps.
          </p>
        </div>

        {/* Progress */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => handleStepClick(index)}
                className={`group flex items-center gap-2 text-xs font-medium transition ${
                  activeStep === index
                    ? "text-cyan-300"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border text-[10px] transition ${
                    activeStep === index
                      ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {step.number}
                </span>

                <span className="hidden sm:inline">
                  {step.shortTitle}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-6 md:grid-cols-3">

          {/* Connecting Line */}
          <div
            className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-gradient-to-r from-cyan-400/20 via-violet-400/40 to-cyan-400/20 md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => handleStepClick(index)}
                className={`group relative text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 md:text-center ${
                  isActive ? "-translate-y-1" : "hover:-translate-y-1"
                }`}
              >
                <article
                  className={`h-full rounded-2xl border p-8 transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400/40 bg-cyan-400/[0.05] shadow-xl shadow-cyan-950/20"
                      : "border-white/10 bg-white/[0.03] hover:border-cyan-400/30 hover:bg-white/[0.05]"
                  }`}
                >

                  {/* Number / Icon */}
                  <div
                    className={`relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border bg-[#0B1020] text-xl font-bold transition-all duration-300 ${
                      isActive
                        ? "border-cyan-400/50 text-cyan-300 shadow-lg shadow-cyan-900/30"
                        : "border-cyan-400/20 text-cyan-300 shadow-lg shadow-cyan-950/20 group-hover:border-cyan-400/40"
                    }`}
                  >
                    {isActive ? (
                      <span className="text-lg">
                        {step.icon}
                      </span>
                    ) : (
                      step.number
                    )}
                  </div>

                  {/* Active Label */}
                  {isActive && (
                    <div className="mx-auto mt-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                      Current Step
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className={`mt-5 text-xl font-semibold transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 leading-7 text-slate-400">
                    {step.description}
                  </p>

                  {/* Expanded Details */}
                  <div
                    className={`grid transition-all duration-500 ${
                      isActive
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-sm leading-6 text-slate-500">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step Indicator */}
                  <div
                    className={`mt-6 text-xs font-medium transition ${
                      isActive
                        ? "text-cyan-300"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {isActive ? "Selected ✓" : "View step →"}
                  </div>
                </article>
              </button>
            );
          })}
        </div>

        {/* Active Step Summary */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm text-cyan-300">
                {currentStep.number}
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                  Step {activeStep + 1} of {steps.length}
                </p>

                <h3 className="mt-1 font-semibold text-white">
                  {currentStep.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {currentStep.details}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              {activeStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;