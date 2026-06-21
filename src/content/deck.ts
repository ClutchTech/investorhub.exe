// ============================================================================
// Clutch Systems HQ — Investor Deck Content
// ----------------------------------------------------------------------------
// Single source of truth. Edit copy, metrics, and links here.
//
// To wire real assets later:
//   • Investor PDF:   drop file at /public/clutch-investor-deck.pdf and
//                     leave links.investorDeck = "/clutch-investor-deck.pdf"
//   • One-pager PDF:  /public/clutch-one-pager.pdf
//   • QR images:      /public/qr/founder.png, /qr/investor.png, /qr/demo.png
//                     and set qr.* below.
//   • Vercel deploy:  push repo to GitHub → import on vercel.com →
//                     framework "Vite" → deploy. Custom domain in Vercel UI.
// ============================================================================

export const links = {
  github: "https://github.com/clutchsystemshq",
  vercel: "https://clutchsystems.vercel.app",
  website: "https://clutchsystems.com",
  booking: "https://cal.com/anthony-tanksley/intro",
  email: "imaginangelworld@gmail.com",
  handle: "@imaginangelworld",
  investorDeck: "#", // replace with "/clutch-investor-deck.pdf"
  onePager: "#",    // replace with "/clutch-one-pager.pdf"
};

export const qr = {
  founder: "",  // e.g. "/qr/founder.png"
  investor: "", // e.g. "/qr/investor.png"
  demo: "",     // e.g. "/qr/demo.png"
  contact: "",  // e.g. "/qr/contact.png"
};

export const hero = {
  brand: "Clutch Systems HQ",
  tagline: "Automation. Innovation. Profit.",
  sub: "A Detroit-built AI venture studio engineering revenue systems for operators, cities, and creators.",
};

export const summary = {
  title: "Executive Summary",
  body: "Clutch Systems HQ is an umbrella venture studio shipping AI-powered revenue systems, business automation, logistics dashboards, digital artist platforms, and enterprise growth tools. We turn fragmented operations into integrated intelligence — and intelligence into profit.",
};

export const problem = {
  title: "The Problem",
  points: [
    "Small businesses lose revenue to disconnected tools and brittle manual workflows.",
    "Cities and operators lack real-time intelligence to act on logistics and demand.",
    "Creators monetize a fraction of their reach due to weak conversion tracking.",
    "Enterprises buy software, not outcomes — leaving ROI on the table.",
  ],
};

export const solution = {
  title: "The Solution",
  body: "Clutch builds integrated AI systems that turn clicks, routes, training, content, and operations into measurable revenue. One operating layer. Multiple verticals. Compounding insight.",
};

export const products = [
  { name: "ClickMaxx", tag: "AI CPA Engine", desc: "Attribution + routing engine that optimizes paid traffic to highest-CPA outcomes in real time." },
  { name: "Clutch Intelligence Grid", tag: "Logistics OS", desc: "Real-time dashboards for fleet, smart-city ops, and field workflows. Decisions in seconds." },
  { name: "Life-Labs", tag: "HR Enterprise Growth", desc: "Workforce intelligence platform: training, retention, and performance signals for growing teams." },
  { name: "The Closer Academy", tag: "Training Platform", desc: "Sales certification engine with AI coaching, scorecards, and revenue-attached outcomes." },
  { name: "Nigredo.exe", tag: "AI Artist Platform", desc: "Tools + commerce rails for digital artists. Generate, list, license, and earn." },
  { name: "CCDI", tag: "Circular Economy", desc: "Community Circular Development Initiative — closing material loops in Detroit and beyond." },
];

export const traction = [
  { label: "Monthly Beta Revenue", value: "$2,800", note: "Recurring, early channels" },
  { label: "MVP Systems Shipped", value: "6", note: "Investor-ready stack" },
  { label: "Tech Stack", value: "Vercel · GitHub · Supabase", note: "Production-grade" },
  { label: "Launch Market", value: "Detroit", note: "Beachhead → national" },
  { label: "18-Month Target", value: "10K", note: "Active users" },
  { label: "24-Month Target", value: "25K", note: "Active users" },
];

export const revenueStreams = [
  "SaaS subscriptions",
  "Enterprise builds",
  "Affiliate / CPA routing",
  "Implementation retainers",
  "Licensing",
  "Training programs",
  "AI artist & product commissions",
];

export const market = [
  { title: "SMB Automation", body: "$30B+ TAM across U.S. small-business workflow tooling." },
  { title: "AI Workflow Tools", body: "Fastest-growing software category. Operators want outcomes, not features." },
  { title: "Creator Commerce", body: "Direct monetization rails for artists, coaches, and digital makers." },
  { title: "Smart City Operations", body: "Municipal logistics, sanitation, and fleet intelligence." },
  { title: "Workforce Intelligence", body: "HR analytics for the post-LinkedIn talent stack." },
];

export const financials = [
  { label: "Seed Ask", value: "$250K", note: "Initial round" },
  { label: "Seed+", value: "$1.5M – $2M", note: "Follow-on" },
  { label: "Year 1 Revenue", value: "$60K", note: "Projection" },
  { label: "Year 2 Revenue", value: "$250K", note: "Projection" },
  { label: "Year 3 Revenue", value: "$650K", note: "Projection" },
  { label: "Break-Even", value: "Month 8", note: "Projected" },
];

export const ask = {
  headline: "Seeking strategic capital, partners, and pilot customers.",
  useOfFunds: [
    { title: "Engineering", desc: "Core platform + product velocity" },
    { title: "Sales", desc: "Enterprise and municipal pipeline" },
    { title: "Compliance", desc: "SOC2 path, data governance" },
    { title: "Pilot Deployments", desc: "Detroit-first, repeatable playbook" },
    { title: "Content", desc: "Brand, education, founder reach" },
    { title: "Customer Acquisition", desc: "Performance channels + partnerships" },
  ],
};

export const founder = {
  name: 'Anthony "RSK" Tanksley',
  title: "Founder — Clutch Systems HQ / ClutchTech",
  blurb: "Detroit-built intelligence. Operator, builder, closer.",
};

export const businessCards = [
  {
    kind: "Founder",
    name: 'Anthony "RSK" Tanksley',
    role: "Founder · Clutch Systems HQ",
    line: "AI venture studio. Detroit-built. Built to ship.",
    cta: "Scan to connect",
    qrKey: "founder" as const,
  },
  {
    kind: "Investor Intro",
    name: "Clutch Systems HQ",
    role: "Investor Briefing",
    line: "Seed $250K · Seed+ $1.5M–$2M · Break-even Month 8.",
    cta: "Scan for deck",
    qrKey: "investor" as const,
  },
  {
    kind: "Product Demo",
    name: "ClutchTech Demos",
    role: "ClickMaxx · Intelligence Grid · Life-Labs",
    line: "Live MVPs. Book a 20-minute walkthrough.",
    cta: "Scan to book",
    qrKey: "demo" as const,
  },
];

export const nav = [
  { label: "Summary", href: "#summary" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Products", href: "#products" },
  { label: "Traction", href: "#traction" },
  { label: "Financials", href: "#financials" },
  { label: "Ask", href: "#ask" },
  { label: "Contact", href: "#contact" },
];

