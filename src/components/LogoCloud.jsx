const companies = [
  { name: "NOVA", symbol: "✦" },
  { name: "VERTEX", symbol: "◆" },
  { name: "LUMIO", symbol: "◈" },
  { name: "ORBIT", symbol: "◉" },
  { name: "NEXA", symbol: "✧" },
];

function LogoCloud() {
  return (
    <section className="border-y border-white/5 bg-[#050816] py-14">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Powering smarter workflows for modern teams
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex h-16 items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.05]"
            >
              {/* Logo Mark */}
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-lg text-slate-500 transition duration-300 group-hover:bg-cyan-400/10 group-hover:text-cyan-400"
                aria-hidden="true"
              >
                {company.symbol}
              </span>

              {/* Brand Name */}
              <span className="text-sm font-bold tracking-[0.16em] text-slate-500 transition duration-300 group-hover:text-white">
                {company.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LogoCloud;