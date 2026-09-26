import { useEffect, useState } from "react";

function Navbar({ onStartFree, onLogin }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Product", href: "#product" },
    { name: "AI", href: "#ai" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  // Detect active section while scrolling
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    function handleScroll() {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleNavClick() {
    setIsMobileMenuOpen(false);
  }

  function handleStartFree() {
    setIsMobileMenuOpen(false);
    onStartFree();
  }

  function handleLogin() {
    setIsMobileMenuOpen(false);
    onLogin();
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-white"
          aria-label="Flowly AI home"
          onClick={handleNavClick}
        >
          Flowly<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`group relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/5 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}

                {/* Active / Hover Bottom Highlight */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-cyan-400 transition-transform duration-200 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={handleLogin}
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Log in
          </button>

          <button
            type="button"
            onClick={handleStartFree}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050816]"
          >
            Start Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setIsMobileMenuOpen((current) => !current)
          }
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label={
            isMobileMenuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">

            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`group relative rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/5 text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-cyan-400 transition-transform duration-200 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}

            {/* Divider */}
            <div className="my-3 h-px bg-white/10" />

            {/* Mobile Login */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Log in
            </button>

            {/* Mobile Start Free */}
            <button
              type="button"
              onClick={handleStartFree}
              className="mt-1 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Start Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;