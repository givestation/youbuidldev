import React from "react";

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-white font-sans">
      {/* Header/Nav */}
      <header className="fixed w-full flex justify-between items-center px-6 py-8 md:px-12 relative z-50 bg-transparent">
        <div className="flex items-center gap-3">
          {/* Official YouBuild Protocol logo */}
          <img src="/youbuidlsocialsvg.svg" alt="YouBuild Protocol Logo" className="h-8 md:h-10" />
          <span className="hidden md:block text-xl font-bold tracking-tight">{'YouBuild Protocol'}</span>
        </div>
        <nav className="hidden md:flex gap-8 text-[#d3d0cc] text-base">
          <a href="#features" className="hover:text-[#CDEB63]">Features</a>
          <a href="#faq" className="hover:text-[#CDEB63]">FAQ</a>
        </nav>
        <div className="hidden md:block">
          <a href="#get-started" className="bg-[#CDEB63] text-[#141414] px-6 py-2 rounded-lg font-semibold">Get Started</a>
        </div>
        <button
          className="md:hidden text-[#CDEB63] text-3xl focus:outline-none"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}>
          ☰
        </button>

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div>
            <div
              className="fixed inset-0 bg-black/60 z-30"
              aria-label="Backdrop"
              onClick={() => setDrawerOpen(false)}
            />
            <nav
              className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-[#1b1b1b] z-40 shadow-2xl flex flex-col p-6 gap-8 animate-slide-in"
              aria-label="Mobile Navigation"
              tabIndex={-1}
            >
              <button
                className="self-end text-2xl text-[#d3d0cc] mb-4 focus:outline-none"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}>
                ×
              </button>
              <a href="#features" className="text-lg font-semibold hover:text-[#CDEB63]" onClick={() => setDrawerOpen(false)}>
                Features
              </a>
              <a href="#faq" className="text-lg font-semibold hover:text-[#CDEB63]" onClick={() => setDrawerOpen(false)}>
                FAQ
              </a>
              <a
                href="#get-started"
                className="mt-8 bg-[#CDEB63] text-[#141414] px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transition"
                onClick={() => setDrawerOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-40 pb-32 px-6 md:px-12 text-center relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#111111]"></div>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(205, 235, 99, 0.15) 0%, rgba(0,0,0,0) 50%)' }}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#CDEB63]/20 to-transparent top-0"></div>
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-white mb-8 tracking-tight max-w-4xl">
          Empowering Decentralized Social with <span className="text-[#CDEB63]">DeFi Integration</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-[#d3d0cc] font-medium leading-relaxed">
          YouBuild Protocol is an open-source framework empowering developers to build decentralized social applications with seamless integration of DeFi features. Built with EVM compatibility and leveraging a robust decentralized data layer, it provides an SDK for creating engaging, rewarding, and community-owned social experiences.
        </p>
        <a href="#get-started" className="mt-8 bg-[#CDEB63] text-[#141414] px-8 py-3 rounded-full font-semibold text-lg shadow hover:scale-105 transition">
          Build on YouBuild</a>
        <div className="w-full flex justify-center mt-12">
          {/* Placeholder for demo/animation/video section */}
          <div className="bg-[#222]/80 rounded-xl w-full max-w-2xl aspect-video flex items-center justify-center text-[#CDEB63] text-2xl font-bold">
            {/* Replace below with a 3d video background if available */}
            <span>Demo Area / 3D Video Placeholder</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-32 md:px-12 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-[#CDEB63] text-center tracking-tight">
          Why YouBuild Protocol?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <FeatureCard
            title="EVM-Compatible Open Data Layer"
            desc="Powering censorship-resistant social apps where user data is community-owned and accessible, not locked in centralized silos."
            icon="💾"
          />
          {/* Feature 2 */}
          <FeatureCard
            title="Integrated DeFi Primitives"
            desc="Enable tipping, direct value exchange, and seamless earning for all users using EVM-compatible cryptocurrencies."
            icon="💸"
          />
          {/* Feature 3 */}
          <FeatureCard
            title="Incentivized & Rewarding Engagement"
            desc="Reward contributors and community participation directly with crypto or tokens. Activate vibrant, engaged social platforms."
            icon="🎁"
          />
          {/* Feature 4 */}
          <FeatureCard
            title="Decentralized Governance Primitives"
            desc="SDK modules for token-based voting, proposal creation, and community initiatives. Empower your users & DAOs."
            icon="🗳️"
          />
          {/* Feature 5 */}
          <FeatureCard
            title="NFT Integration & Gated Experiences"
            desc="Display user-owned NFTs in profiles, power NFT-gated content, exclusive communities, and creative new experiences."
            icon="🖼️"
          />
          {/* Feature 6 */}
          <FeatureCard
            title="Developer-First, Modular SDK"
            desc="TypeScript/JavaScript SDK optimized for EVM developers. Choose only the modules you need for your dApp."
            icon="🧑‍💻"
          />
        </div>
      </section>

      {/* About/Details Section */}
      <section className="px-4 py-12 bg-[#181818] max-w-4xl mx-auto rounded-xl mt-8 mb-10 shadow-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-[#CDEB63]">Protocol Vision</h2>
        <p className="text-[#d3d0cc] text-base md:text-lg leading-relaxed">
          YouBuild Protocol is an innovative, open-source framework designed to revolutionize decentralized social applications.
          It provides developers with a comprehensive SDK enabling engaging, incentivized, and community-governed experiences with direct DeFi integration. Leveraging a robust decentralized data layer, YouBuild Protocol ensures true data ownership and censorship resistance for all platform users. The SDK’s modular, EVM-compatible architecture means you can build your dApp your way—accelerated, powerful, and open.
        </p>
        <ul className="mt-6 space-y-2 text-[#6a6a68]">
          <li>• Accelerate dApp development with pre-built social and DeFi primitives</li>
          <li>• Integrate tipping, rewards, and monetization without custom smart contracts</li>
          <li>• Build on open, decentralized data from day one</li>
          <li>• Empower users to earn, vote, create, and own their communities</li>
        </ul>
      </section>

      {/* Applications/Use Cases Section */}
      <section className="px-4 py-10 max-w-5xl mx-auto" id="applications">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#CDEB63] text-center">Potential Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard title="Creator Economy Platforms" desc="Empower artists, content creators, and fans with direct crypto support and earning." icon="🎨" />
          <FeatureCard title="NFT Communities" desc="Unlock exclusive content and community features with NFT-gating and ownership." icon="🌐" />
          <FeatureCard title="Decentralized Forums" desc="Enable token-based moderation and rewards within secure, open forums and boards." icon="💬" />
          <FeatureCard title="DAOs with Social Layers" desc="Boost DAO governance and engagement with built-in social & voting layers." icon="🫂" />
          <FeatureCard title="Social Networks with Built-in DeFi" desc="Monetize, tip, and reward contributions natively within EVM-compatible apps." icon="🌟" />
        </div>
      </section>

      {/* Stats Section - Placeholder values */}
      <section className="px-4 py-8 flex justify-center items-center gap-8 text-center max-w-3xl mx-auto">
        <div>
          <div className="text-2xl font-bold text-[#CDEB63]">100% Open Source</div>
          <div className="text-sm text-[#6a6a68]">MIT License</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-[#CDEB63]">EVM Compatible</div>
          <div className="text-sm text-[#6a6a68]">Ethereum, L2s, and more</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-[#CDEB63]">SDK v1.0</div>
          <div className="text-sm text-[#6a6a68]">Launching 2025</div>
        </div>
      </section>

      {/* Newsletter Signup/CTA */}
      <section id="get-started" className="px-4 py-10 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#CDEB63] mb-4">Stay Updated on YouBuild Protocol</h3>
        <p className="text-center text-[#6a6a68] mb-4 max-w-lg">Sign up for launch updates, developer guides, and community news.</p>
        <form className="flex flex-col md:flex-row gap-4 w-full max-w-sm" onSubmit={e => { e.preventDefault(); alert('Subscribed!'); }}>
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-[#1b1b1b] border border-[#CDEB63] text-white" required />
          <button type="submit" className="bg-[#CDEB63] text-[#141414] px-6 py-3 rounded-lg font-medium hover:scale-105 transition">Subscribe</button>
        </form>
        <small className="text-[#6a6a68] mt-2">By signing up, I confirm I have read and agree to the <a href="#" className="underline hover:text-[#CDEB63]">Privacy Policy</a>.</small>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-10 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-[#CDEB63] mb-6">FAQ</h3>
        <FaqAccordion />
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-32 flex flex-col items-center bg-[#161616] border-t border-[#222]">
        <h3 className="text-2xl md:text-4xl font-bold mb-8 text-white">Create with <span className="text-[#CDEB63]">YouBuild Protocol</span> now</h3>
        <a href="#get-started" className="bg-[#CDEB63] text-black px-12 py-4 rounded-xl font-semibold text-lg hover:bg-[#d4ee7d] transition-all duration-300">Get Started</a>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-[#888] px-6 md:px-12 py-12 mt-auto text-sm border-t border-[#222]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <img src="/youbuidlsocialsvg.svg" alt="YouBuild Protocol Logo" className="h-8 mb-2" />
            <div>&copy; 2023–2025 YouBuild Protocol (Open-source)</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#features" className="hover:text-[#CDEB63]">Features</a>
            <a href="#faq" className="hover:text-[#CDEB63]">FAQ</a>
            <a href="#get-started" className="hover:text-[#CDEB63]">Get Started</a>
          </div>
          <div className="flex gap-2 items-center mt-4 md:mt-0">
            <a href="#" aria-label="Twitter" className="hover:text-[#CDEB63]">X</a>
            <a href="#" aria-label="GitHub" className="hover:text-[#CDEB63]">GitHub</a>
            {/* update your socials here */}
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

// FeatureCard (little info+icon card for features/use cases)
function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="group bg-[#161616] rounded-2xl p-8 flex gap-6 items-start hover:bg-[#1a1a1a] transition-all duration-300 border border-[#222] hover:border-[#CDEB63]/30">
      <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div>
        <div className="font-semibold text-xl text-white mb-2">{title}</div>
        <div className="text-[#888] text-base leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

// FAQ Accordion Component
const faqItems = [
  {
    question: "What is YouBuild Protocol?",
    answer:
      "YouBuild Protocol is an open-source, EVM-compatible SDK for building decentralized social applications with built-in DeFi features, rewards, and community governance.",
  },
  {
    question: "What can I build with YouBuild Protocol?",
    answer:
      "You can create dApps such as social networks, DAOs, NFT communities, creator platforms, discussion forums, and more—all with modular DeFi, rewards, and governance integrations.",
  },
  {
    question: "How does DeFi integrate into social apps?",
    answer:
      "The SDK makes it easy to add tipping, rewards, value transfer, and token-based voting into any social experience. No deep smart contract knowledge required.",
  },
  {
    question: "Do I control user data and content?",
    answer:
      "Yes! All social data is stored on a decentralized data layer. Your users truly own their posts, profiles, and community experience.",
  },
  {
    question: "Is YouBuild Protocol open-source?",
    answer:
      "Absolutely. All SDKs and protocol code are MIT licensed and open for contribution.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = React.useState<null | number>(null);
  return (
    <div className="divide-y divide-[#333] rounded-xl overflow-hidden shadow-md bg-[#181818]">
      {faqItems.map((item, i) => (
        <div key={item.question}>
          <button
            className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-lg">{item.question}</span>
            <span className="text-2xl text-[#CDEB63]">{openIndex === i ? '-' : '+'}</span>
          </button>
          {openIndex === i && (
            <div className="p-4 text-[#6a6a68]">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// Cookie Consent Component
function CookieConsent() {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-0 right-0 max-w-xl mx-auto bg-[#181818] text-[#d3d0cc] px-6 py-4 rounded-lg shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 z-50 border border-[#CDEB63]">
      <span className="text-sm">We use cookies to provide you with the best experience and to help improve our website and application. <a href="#" className="underline hover:text-[#CDEB63]">Read more</a>.</span>
      <div className="flex gap-2">
        <button
          onClick={() => setVisible(false)}
          className="bg-[#CDEB63] text-[#141414] px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
        >
          Accept all
        </button>
        <button
          onClick={() => setVisible(false)}
          className="bg-[#333] text-white px-4 py-2 rounded-lg font-medium border border-[#CDEB63] hover:scale-105 transition"
        >
          Necessary only
        </button>
      </div>
    </div>
  );
}

export default App;