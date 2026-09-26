import { useState } from "react";

const features = [
  {
    title: "AI Workflows",
    description:
      "Build intelligent workflows that use AI to understand tasks, make decisions, and take action automatically.",
    icon: "✦",
    details:
      "Create AI-powered workflows that can analyze information, make decisions, and trigger actions across your connected tools.",
  },
  {
    title: "Smart Automation",
    description:
      "Automate repetitive work and keep your processes running without constant manual effort.",
    icon: "⚡",
    details:
      "Turn repetitive tasks into automated processes that run consistently in the background while your team focuses on higher-value work.",
  },
  {
    title: "Real-time Analytics",
    description:
      "Track workflow performance, task activity, and business insights from one simple dashboard.",
    icon: "◈",
    details:
      "Monitor workflow activity, execution status, and performance metrics from a centralized analytics dashboard.",
  },
  {
    title: "Team Collaboration",
    description:
      "Bring your team together with shared workflows, tasks, permissions, and activity tracking.",
    icon: "◎",
    details:
      "Give your team a shared workspace where members can collaborate, manage workflows, and control access through permissions.",
  },
  {
    title: "Powerful Integrations",
    description:
      "Connect the tools your team already uses and move information between them automatically.",
    icon: "⌘",
    details:
      "Connect your favorite productivity and communication tools so information can move between them without manual work.",
  },
  {
    title: "Enterprise Security",
    description:
      "Protect your workflows and business data with secure access controls and reliable infrastructure.",
    icon: "◇",
    details:
      "Manage access to workflows and business information with structured permissions and security-focused infrastructure.",
  },
];

function Features() {
  const [openFeature, setOpenFeature] = useState(null);

  function handleLearnMore(title) {
    setOpenFeature((current) =>
      current === title ? null : title
    );
  }

  return (
    <section
      id="features"
      className="scroll-mt-20 bg-[#050816] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Powerful Features
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need to automate at scale.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Flowly gives modern teams the tools they need to automate
            repetitive work and build smarter business processes.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const isOpen = openFeature === feature.title;

            return (
              <article
                key={feature.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/[0.03] p-7 transition-all duration-500 ${
                  isOpen
                    ? "border-cyan-400/40 bg-white/[0.05] shadow-lg shadow-cyan-950/20"
                    : "border-white/10 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                }`}
              >
                {/* Hover Glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-xl border text-xl transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300 shadow-lg shadow-cyan-500/10"
                      : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:shadow-lg group-hover:shadow-cyan-500/10"
                  }`}
                >
                  <span aria-hidden="true">{feature.icon}</span>
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="relative mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="relative mt-4 border-t border-white/10 pt-4">
                    <p className="text-sm leading-6 text-slate-300">
                      {feature.details}
                    </p>
                  </div>
                )}

                {/* Learn More */}
                <button
                  type="button"
                  onClick={() => handleLearnMore(feature.title)}
                  aria-expanded={isOpen}
                  className="relative mt-auto pt-6 inline-flex items-center gap-1 text-left text-sm font-medium text-slate-400 transition-all duration-300 hover:gap-2 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050816]"
                >
                  {isOpen ? "Show less" : "Learn more"}

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300"
                  >
                    {isOpen ? "↑" : "→"}
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;