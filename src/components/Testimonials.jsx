import { useState } from "react";

const testimonials = [
  {
    quote:
      "Flowly helped us remove hours of repetitive work from our weekly process. Our team can finally focus on higher-value tasks.",
    name: "Maya Chen",
    role: "Operations Lead",
    company: "NOVA",
  },
  {
    quote:
      "The AI workflow builder made automation much easier for our team. We went from an idea to a working workflow in minutes.",
    name: "Daniel Brooks",
    role: "Product Manager",
    company: "VERTEX",
  },
  {
    quote:
      "We connected the tools we already use and started automating routine tasks without rebuilding our entire workflow.",
    name: "Sara Ahmed",
    role: "Growth Manager",
    company: "LUMIO",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  function handlePrevious() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }

  function handleNext() {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }

  function handleDotClick(index) {
    setActiveIndex(index);
  }

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-[#050816] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Customer Stories
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for teams that want to move faster.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            See how modern teams use Flowly to simplify their everyday work.
          </p>
        </div>

        {/* Main Featured Testimonial */}
        <div className="mx-auto mt-16 max-w-5xl">
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 shadow-2xl shadow-black/20 sm:p-12">

            {/* Decorative Glow */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
              aria-hidden="true"
            />

            {/* Top Row */}
            <div className="relative flex items-center justify-between">
              <div
                className="text-sm tracking-[0.25em] text-cyan-400"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>

              <span className="text-xs font-medium text-slate-600">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="relative mt-8 max-w-4xl text-2xl font-medium leading-10 tracking-tight text-white sm:text-3xl sm:leading-[1.5]">
              “{activeTestimonial.quote}”
            </blockquote>

            {/* Person */}
            <div className="relative mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {activeTestimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {activeTestimonial.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {activeTestimonial.role} ·{" "}
                    {activeTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Company */}
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                {activeTestimonial.company}
              </div>
            </div>
          </article>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-pressed={activeIndex === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-cyan-400"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span className="text-lg">←</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mini Testimonial Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => handleDotClick(index)}
              className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                activeIndex === index
                  ? "border-cyan-400/30 bg-cyan-400/[0.04]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-xs font-semibold text-slate-300">
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <span className="text-[10px] uppercase tracking-widest text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-400">
                “{testimonial.quote}”
              </p>

              <div className="mt-4">
                <p className="text-xs font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[11px] text-slate-600">
                  {testimonial.role}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;