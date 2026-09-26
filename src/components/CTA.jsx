function CTA({ onStartFree }) {
  return (
    <section
      id="cta"
      className="scroll-mt-20 relative overflow-hidden bg-[#050816] px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Secondary Glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">

        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Get Started
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Ready to automate the way you work?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Start building smarter workflows today and give your team more
          time to focus on meaningful work.
        </p>

        {/* CTA Button */}
        <div className="mt-9 flex justify-center">
          <button
            type="button"
            onClick={onStartFree}
            className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050816]"
          >
            Start Free

            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </div>

        {/* Trust Text */}
        <p className="mt-5 text-sm text-slate-500">
          No credit card required · Setup in minutes
        </p>
      </div>
    </section>
  );
}

export default CTA;