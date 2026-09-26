import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "For individuals exploring workflow automation.",
    features: [
      "5 active workflows",
      "Basic integrations",
      "1,000 tasks / month",
      "Community support",
    ],
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 23,
    description: "For growing teams that want more automation power.",
    features: [
      "Unlimited workflows",
      "Advanced AI automation",
      "25,000 tasks / month",
      "Priority support",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Business",
    monthly: 79,
    yearly: 63,
    description: "For teams scaling automation across their business.",
    features: [
      "Everything in Pro",
      "Unlimited tasks",
      "Advanced analytics",
      "Custom permissions",
      "Dedicated support",
    ],
  },
];

function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  function handlePlanSelect(planName) {
    setSelectedPlan(planName);

    setTimeout(() => {
      setSelectedPlan(null);
    }, 2200);
  }

  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-[#050816] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple pricing. Powerful automation.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Start free and upgrade when your team needs more automation.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.03] p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-white text-slate-950 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
              aria-pressed={billing === "monthly"}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-white text-slate-950 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
              aria-pressed={billing === "yearly"}
            >
              Yearly

              <span
                className={`ml-2 text-xs ${
                  billing === "yearly"
                    ? "text-violet-600"
                    : "text-cyan-400"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Billing Description */}
        <div className="mt-5 text-center">
          <p className="text-xs text-slate-500">
            {billing === "monthly"
              ? "Flexible monthly billing. Cancel anytime."
              : "Save 20% with annual billing."}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price =
              billing === "monthly"
                ? plan.monthly
                : plan.yearly;

            const isSelected =
              selectedPlan === plan.name;

            return (
              <article
                key={plan.name}
                className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-cyan-400/40 bg-cyan-400/[0.04] shadow-2xl shadow-cyan-950/20 lg:-translate-y-2"
                    : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute right-6 top-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold tracking-wide text-cyan-300">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Name */}
                <div className="pr-24">
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-7">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      ${price}
                    </span>

                    <span className="mb-2 text-sm text-slate-500">
                      /month
                    </span>
                  </div>

                  {billing === "yearly" &&
                    plan.monthly > 0 && (
                      <p className="mt-2 text-xs text-slate-500">
                        Billed annually
                      </p>
                    )}
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => handlePlanSelect(plan.name)}
                  className={`mt-8 w-full rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isSelected
                      ? "bg-emerald-400 text-slate-950"
                      : plan.popular
                        ? "bg-white text-slate-950 hover:bg-slate-200"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {isSelected
                    ? "Selected ✓"
                    : plan.name === "Starter"
                      ? "Start Free"
                      : "Get Started"}
                </button>

                {/* Divider */}
                <div className="mt-8 border-t border-white/10 pt-7">
                  <p className="text-sm font-medium text-white">
                    Includes:
                  </p>

                  {/* Features */}
                  <ul className="mt-5 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-400"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-bold text-cyan-400">
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`pointer-events-none absolute bottom-0 left-8 right-8 h-px opacity-0 transition duration-300 group-hover:opacity-100 ${
                    plan.popular
                      ? "bg-cyan-400/50"
                      : "bg-white/20"
                  }`}
                />
              </article>
            );
          })}
        </div>

        {/* Trust / Footer Note */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span className="text-xs text-slate-500">
              No credit card required
            </span>
          </div>

          <span className="hidden text-slate-700 sm:block">
            •
          </span>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <span className="text-xs text-slate-500">
              Setup in minutes
            </span>
          </div>

          <span className="hidden text-slate-700 sm:block">
            •
          </span>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

            <span className="text-xs text-slate-500">
              Upgrade anytime
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;