import { useState } from "react";

const integrations = [
  {
    name: "Slack",
    description: "Send messages and notifications to your team.",
    category: "Communication",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.2 14.1a2.1 2.1 0 1 1-2.1-2.1h2.1v2.1Zm1.1 0a2.1 2.1 0 1 1 2.1 2.1v-2.1H7.3Zm0-4.2a2.1 2.1 0 1 1 2.1-2.1v2.1H7.3Zm-1.1 0H4.1a2.1 2.1 0 1 1 2.1-2.1v2.1Zm9.5 4.2a2.1 2.1 0 1 1 2.1 2.1h-2.1v-2.1Zm-1.1 0h-2.1v2.1a2.1 2.1 0 1 0 2.1-2.1Zm0-4.2a2.1 2.1 0 1 1-2.1-2.1v2.1h2.1Zm1.1 0h2.1a2.1 2.1 0 1 0-2.1 2.1V9.9Zm0-1.1V6.7a2.1 2.1 0 1 1 2.1 2.1h-2.1Z"
        />
      </svg>
    ),
  },
  {
    name: "Gmail",
    description: "Automate emails and manage incoming messages.",
    category: "Communication",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.5-.5L12 10.2 18.5 6H5.5Zm13.5 2.1-6.4 4.1a1 1 0 0 1-1.2 0L5 8.1v9.4c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V8.1Z"
        />
      </svg>
    ),
  },
  {
    name: "Notion",
    description: "Create pages and organize your team knowledge.",
    category: "Productivity",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5 3h11.5L20 6.5V21H5V3Zm2 2v14h11V7.5L15.5 5H7Zm2 3h5.5l2 2v5.5h-2V11h-3v6h-2V8Zm1.5 1.5v1h3v-1h-3Z"
        />
      </svg>
    ),
  },
  {
    name: "Google Drive",
    description: "Move and organize files automatically.",
    category: "Storage",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8.2 4h7.6l4.5 8-3.3 5.8H9.4L6 12.1 8.2 4Zm1.2 2.1-1.4 5.2 2.7 4.4h5l2.1-3.7-3.1-5.9H9.4Z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    description: "Automate development workflows and updates.",
    category: "Development",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.5a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.5Z"
        />
      </svg>
    ),
  },
  {
    name: "Discord",
    description: "Keep your communities and teams connected.",
    category: "Communication",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.5 5.1A16.2 16.2 0 0 0 15.7 4l-.5 1a14.2 14.2 0 0 0-6.4 0l-.5-1a16.2 16.2 0 0 0-3.8 1.1C2.1 8.6 1.5 12 1.8 15.4a15.8 15.8 0 0 0 4.7 2.4l1.1-1.5a9.5 9.5 0 0 1-1.8-.9l.4-.3a11.2 11.2 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l1.1 1.5a15.8 15.8 0 0 0 4.7-2.4c.4-4-.7-7.4-2.7-10.3ZM8.3 14.2c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm7.4 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z"
        />
      </svg>
    ),
  },
];

function Integrations() {
  const [selectedIntegration, setSelectedIntegration] = useState(
    integrations[0]
  );

  const [connectedApps, setConnectedApps] = useState([]);
  const [isConnecting, setIsConnecting] = useState(false);

  const isConnected = connectedApps.includes(
    selectedIntegration.name
  );

  function handleSelect(integration) {
    setSelectedIntegration(integration);
  }

  function handleConnect() {
    if (isConnecting) return;

    if (isConnected) {
      setConnectedApps((current) =>
        current.filter(
          (name) => name !== selectedIntegration.name
        )
      );

      return;
    }

    setIsConnecting(true);

    setTimeout(() => {
      setConnectedApps((current) => [
        ...current,
        selectedIntegration.name,
      ]);

      setIsConnecting(false);
    }, 1000);
  }

  return (
    <section
      id="integrations"
      className="scroll-mt-20 overflow-hidden bg-[#050816] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Integrations
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Connect everything you already use.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Bring your favorite tools together and let Flowly move
            information between them automatically.
          </p>
        </div>

        {/* Integration Network */}
        <div className="relative mx-auto mt-20 hidden min-h-[500px] max-w-5xl items-center justify-center md:flex">

          {/* Glow */}
          <div
            className="absolute h-80 w-80 rounded-full bg-violet-600/10 blur-3xl"
            aria-hidden="true"
          />

          {/* Connection Lines */}
          <div
            className="absolute h-px w-72 rotate-[25deg] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            aria-hidden="true"
          />

          <div
            className="absolute h-px w-72 -rotate-[25deg] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
            aria-hidden="true"
          />

          <div
            className="absolute h-px w-72 rotate-[155deg] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            aria-hidden="true"
          />

          <div
            className="absolute h-px w-72 -rotate-[155deg] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
            aria-hidden="true"
          />

          {/* Center Flowly */}
          <div className="relative z-20 flex h-40 w-40 items-center justify-center rounded-3xl border border-cyan-400/30 bg-[#0B1020] shadow-2xl shadow-cyan-950/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                Flowly<span className="text-cyan-400">.</span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                AI Automation
              </p>

              <div className="mx-auto mt-4 flex items-center justify-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[10px] text-emerald-400">
                  {connectedApps.length} connected
                </span>
              </div>
            </div>
          </div>

          {/* Integration Cards */}
          <div className="absolute inset-0">

            <div className="absolute left-0 top-0">
              <IntegrationCard
                integration={integrations[0]}
                selected={selectedIntegration.name === integrations[0].name}
                connected={connectedApps.includes(integrations[0].name)}
                onClick={() => handleSelect(integrations[0])}
              />
            </div>

            <div className="absolute right-0 top-0">
              <IntegrationCard
                integration={integrations[1]}
                selected={selectedIntegration.name === integrations[1].name}
                connected={connectedApps.includes(integrations[1].name)}
                onClick={() => handleSelect(integrations[1])}
              />
            </div>

            <div className="absolute -left-6 top-1/2 -translate-y-1/2">
              <IntegrationCard
                integration={integrations[2]}
                selected={selectedIntegration.name === integrations[2].name}
                connected={connectedApps.includes(integrations[2].name)}
                onClick={() => handleSelect(integrations[2])}
              />
            </div>

            <div className="absolute -right-6 top-1/2 -translate-y-1/2">
              <IntegrationCard
                integration={integrations[3]}
                selected={selectedIntegration.name === integrations[3].name}
                connected={connectedApps.includes(integrations[3].name)}
                onClick={() => handleSelect(integrations[3])}
              />
            </div>

            <div className="absolute bottom-0 left-0">
              <IntegrationCard
                integration={integrations[4]}
                selected={selectedIntegration.name === integrations[4].name}
                connected={connectedApps.includes(integrations[4].name)}
                onClick={() => handleSelect(integrations[4])}
              />
            </div>

            <div className="absolute bottom-0 right-0">
              <IntegrationCard
                integration={integrations[5]}
                selected={selectedIntegration.name === integrations[5].name}
                connected={connectedApps.includes(integrations[5].name)}
                onClick={() => handleSelect(integrations[5])}
              />
            </div>
          </div>
        </div>

        {/* Selected Integration Panel */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200">
                {selectedIntegration.icon}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-white">
                    {selectedIntegration.name}
                  </h3>

                  <span className="rounded-full bg-violet-400/10 px-2 py-1 text-[10px] text-violet-300">
                    {selectedIntegration.category}
                  </span>

                  {isConnected && (
                    <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
                      Connected
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {selectedIntegration.description}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleConnect}
              disabled={isConnecting}
              className={`shrink-0 rounded-xl px-5 py-2.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
                isConnected
                  ? "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                  : "bg-gradient-to-r from-cyan-400 to-violet-500 text-[#050816] hover:opacity-90"
              }`}
            >
              {isConnecting
                ? "Connecting..."
                : isConnected
                  ? "Disconnect"
                  : "Connect"}
            </button>
          </div>
        </div>

        {/* Mobile Integration List */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
          {integrations.map((integration) => {
            const selected =
              selectedIntegration.name === integration.name;

            const connected = connectedApps.includes(
              integration.name
            );

            return (
              <button
                key={integration.name}
                type="button"
                onClick={() => handleSelect(integration)}
                className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                  selected
                    ? "border-cyan-400/30 bg-cyan-400/[0.05]"
                    : "border-white/10 bg-white/[0.03] hover:border-cyan-400/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-200">
                    {integration.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-300">
                      {integration.name}
                    </p>

                    <p
                      className={`mt-1 text-[10px] ${
                        connected
                          ? "text-emerald-400"
                          : "text-slate-600"
                      }`}
                    >
                      {connected ? "Connected" : "Available"}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

          <p className="text-xs text-slate-500">
            Connect your tools once and let Flowly handle the rest.
          </p>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  integration,
  selected,
  connected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-40 rounded-xl border p-3 text-left shadow-xl backdrop-blur transition-all duration-300 ${
        selected
          ? "border-cyan-400/40 bg-cyan-400/[0.07] shadow-cyan-950/20"
          : "border-white/10 bg-[#0B1020]/90 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#10172a]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition ${
            selected
              ? "bg-cyan-400/10 text-cyan-300"
              : "bg-white/5 text-slate-200"
          }`}
        >
          {integration.icon}
        </div>

        <div className="min-w-0">
          <span className="block truncate text-sm font-medium text-slate-300">
            {integration.name}
          </span>

          <span
            className={`mt-1 block text-[10px] ${
              connected
                ? "text-emerald-400"
                : "text-slate-600"
            }`}
          >
            {connected ? "Connected" : "Available"}
          </span>
        </div>
      </div>
    </button>
  );
}

export default Integrations;