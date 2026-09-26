import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  }

  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-14">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="inline-flex items-center text-xl font-bold tracking-tight text-white transition hover:text-cyan-300"
            >
              Flowly
              <span className="text-cyan-400">.</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              AI-powered workflow automation for modern teams. Build smarter
              workflows and automate repetitive work.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xs font-semibold text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                X
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xs font-semibold text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                in
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xs font-semibold text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                GH
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#product"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Product
                </a>
              </li>

              <li>
                <a
                  href="#ai"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  AI Automation
                </a>
              </li>

              <li>
                <a
                  href="#integrations"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Integrations
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Customer Stories
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Documentation
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Stay in the loop
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Get product updates, automation tips, and AI workflow ideas.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-5"
            >
              <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition focus-within:border-cyan-400/40">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600"
                  required
                />

                <button
                  type="submit"
                  className="px-4 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  Join
                </button>
              </div>

              {subscribed && (
                <p className="mt-3 text-xs font-medium text-emerald-400">
                  You're on the list ✓
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p>
            © 2026 Flowly AI. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="transition hover:text-slate-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-slate-300"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-slate-300"
            >
              Security
            </a>
          </div>

          {/* Back To Top */}
          <button
            type="button"
            onClick={handleBackToTop}
            className="group inline-flex items-center gap-2 self-start rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-300 sm:self-auto"
          >
            Back to top

            <span
              className="transition-transform duration-300 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              ↑
            </span>
          </button>
        </div>

        {/* Built With */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-700">
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;