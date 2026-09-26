import { useState } from "react";

const faqs = [
  {
    question: "What is Flowly?",
    answer:
      "Flowly is an AI-powered workflow automation platform that helps teams connect their tools and automate repetitive business processes.",
  },
  {
    question: "Can I try Flowly for free?",
    answer:
      "Yes. Flowly's Starter plan lets you explore workflow automation without a paid subscription.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. You can create workflows visually or describe what you want to automate in natural language and let Flowly AI help build the workflow.",
  },
  {
    question: "Which tools can I integrate?",
    answer:
      "Flowly is designed to connect with common productivity, communication, development, and business tools through integrations and automation triggers.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Paid plans are designed to give you flexibility, so you can change or cancel your subscription whenever you need.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Flowly is designed with security in mind, including controlled access, secure workflows, and infrastructure practices intended to protect business data.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(index) {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  }

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[#050816] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Questions, answered.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Everything you need to know about Flowly and workflow automation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-400/30 bg-cyan-400/[0.03] shadow-lg shadow-cyan-950/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  {/* Number */}
                  <span
                    className={`hidden shrink-0 text-xs font-semibold tracking-widest sm:block ${
                      isOpen
                        ? "text-cyan-400"
                        : "text-slate-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 font-medium transition ${
                      isOpen
                        ? "text-white"
                        : "text-slate-200"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                        : "border-white/10 bg-white/5 text-slate-400"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-6">
                      <div className="sm:pl-8">
                        <p className="text-sm leading-7 text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-center">
          <p className="text-sm text-slate-500">
            Still have questions?
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Flowly is designed to make workflow automation simple,
            flexible, and easy to understand.
          </p>
        </div>

      </div>
    </section>
  );
}

export default FAQ;