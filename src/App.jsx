import { useEffect, useState } from "react";

import demoVideo from "./assets/videos/flowly-ai-demo.mp4";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Features from "./components/Features";
import ProductShowcase from "./components/ProductShowcase";
import AISection from "./components/AISection";
import HowItWorks from "./components/HowItWorks";
import Integrations from "./components/Integrations";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState("idle");
  const [showPassword, setShowPassword] = useState(false);
  const [signupStatus, setSignupStatus] = useState("idle");
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsSignupOpen(false);
        setIsLoginOpen(false);
        setIsDemoOpen(false);

        setSignupStatus("idle");
        setLoginStatus("idle");
        setShowPassword(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Signup
  function openSignup() {
    setSignupStatus("idle");
    setIsSignupOpen(true);
  }

  function closeSignup() {
    setIsSignupOpen(false);
    setSignupStatus("idle");
  }

  // Demo
  function openDemo() {
    setIsDemoOpen(true);
  }

  function closeDemo() {
    setIsDemoOpen(false);
  }

  // Login
  function openLogin() {
    setLoginStatus("idle");
    setShowPassword(false);
    setIsLoginOpen(true);
  }

  function closeLogin() {
    setIsLoginOpen(false);
    setLoginStatus("idle");
    setShowPassword(false);
  }

  return (
    <>
      {/* Navbar */}
      <Navbar
        onStartFree={openSignup}
        onLogin={openLogin}
      />

      <main>
        {/* Hero */}
        <Hero
          onStartFree={openSignup}
          onWatchDemo={openDemo}
        />

        <LogoCloud />
        <Features />
        <ProductShowcase />
        <AISection />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA onStartFree={openSignup} />
      </main>

      <Footer />

      {/* =========================
          SIGNUP MODAL
      ========================== */}
      {isSignupOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-modal-title"
          onClick={closeSignup}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0B1020] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-400">
                  GET STARTED
                </p>

                <h2
                  id="signup-modal-title"
                  className="mt-2 text-2xl font-bold text-white"
                >
                  Start building with Flowly
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Enter your email to create your Flowly workspace.
                </p>
              </div>

              <button
                type="button"
                onClick={closeSignup}
                aria-label="Close signup modal"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                ✕
              </button>
            </div>

            {/* Signup Form */}
            <form
              className="mt-6"
              onSubmit={(event) => {
                event.preventDefault();

                setSignupStatus("loading");

                setTimeout(() => {
                  setSignupStatus("success");
                }, 1200);
              }}
            >
              <label
                htmlFor="signup-email"
                className="text-sm font-medium text-slate-300"
              >
                Work email
              </label>

              <input
                id="signup-email"
                type="email"
                required
                placeholder="you@company.com"
                disabled={signupStatus === "loading"}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={signupStatus === "loading"}
                className="mt-4 w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0B1020]"
              >
                {signupStatus === "loading"
                  ? "Creating workspace..."
                  : "Continue"}
              </button>
            </form>

            {/* Success Message */}
            {signupStatus === "success" && (
              <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                    ✓
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-emerald-300">
                      Workspace created!
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Your Flowly AI workspace is ready to explore.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <p className="mt-4 text-center text-xs text-slate-600">
              No credit card required.
            </p>
          </div>
        </div>
      )}

      {/* =========================
          LOGIN MODAL
      ========================== */}
      {isLoginOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-modal-title"
          onClick={closeLogin}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0B1020] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                  WELCOME BACK
                </p>

                <h2
                  id="login-modal-title"
                  className="text-2xl font-bold text-white"
                >
                  Log in to Flowly
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Continue managing your AI workflows.
                </p>
              </div>

              <button
                type="button"
                onClick={closeLogin}
                className="rounded-lg px-2 py-1 text-xl text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close login modal"
              >
                ×
              </button>
            </div>

            {/* Login Form */}
            <form
              onSubmit={(event) => {
                event.preventDefault();

                setLoginStatus("loading");

                setTimeout(() => {
                  setLoginStatus("success");
                }, 1200);
              }}
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email address
                </label>

                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={loginStatus === "loading"}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    disabled={loginStatus === "loading"}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-20 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 transition hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <label className="flex items-center gap-2 text-sm text-slate-400">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 accent-cyan-400"
                />
                Remember me
              </label>

              {/* Status */}
              {loginStatus === "success" && (
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                  Login successful! Welcome back to Flowly AI.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loginStatus === "loading"}
                className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loginStatus === "loading"
                  ? "Logging in..."
                  : "Log in"}
              </button>

              {/* Signup */}
              <p className="text-center text-sm text-slate-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    closeLogin();
                    openSignup();
                  }}
                  className="font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                  Create account
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* =========================
          DEMO VIDEO MODAL
      ========================== */}
      {isDemoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          onClick={closeDemo}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Demo Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-cyan-400">
                  FLOWLY AI DEMO
                </p>

                <h2
                  id="demo-modal-title"
                  className="mt-1 text-lg font-semibold text-white"
                >
                  See automation in action
                </h2>
              </div>

              <button
                type="button"
                onClick={closeDemo}
                aria-label="Close demo video"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                ✕
              </button>
            </div>

            {/* Demo Video */}
            <div className="aspect-video bg-black">
              <video
                className="h-full w-full object-cover"
                src={demoVideo}
                controls
                autoPlay
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;