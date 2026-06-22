import { BarChart3, Building2, Mail, Rocket, ShieldCheck, Zap } from "lucide-react";
import { Section } from "@/components/Section";
import { BusinessCard, MetricCard, ProductCard } from "@/components/Cards";
import { businessCards, metrics, products, revenueModels, site } from "@/lib/content";

export default function Home() {
  return <main className="min-h-screen overflow-hidden bg-clutchBlack text-white">
    <div className="clutch-grid absolute inset-0 -z-0 opacity-70" />
    <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-clutchGold/10 blur-3xl" />

    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div><p className="text-lg font-black tracking-tight">{site.brand}</p><p className="text-xs uppercase tracking-[0.25em] text-clutchGold">{site.tagline}</p></div>
      <nav className="hidden gap-6 text-sm text-zinc-300 md:flex"><a href="#deck" className="hover:text-clutchGold">Deck</a><a href="#products" className="hover:text-clutchGold">Products</a><a href="#cards" className="hover:text-clutchGold">Cards</a><a href="#contact" className="hover:text-clutchGold">Contact</a></nav>
    </header>

    <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div>
        <p className="mb-5 inline-flex rounded-full border border-clutchGold/40 bg-clutchGold/10 px-4 py-2 text-sm font-semibold text-clutchGold">Investor Deck Website + QR Business Cards</p>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl"><span className="gold-text">Clutch Systems HQ</span><br/>Detroit-built AI systems.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">Clutch builds integrated AI systems that turn clicks, routes, training, content, and operations into measurable revenue.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#deck" className="rounded-full bg-clutchGold px-6 py-3 font-bold text-black hover:opacity-90">View Investor Deck</a><a href="#cards" className="rounded-full border border-white/15 px-6 py-3 font-bold text-white hover:border-clutchGold">View Business Cards</a></div>
      </div>
      <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-gold backdrop-blur"><div className="rounded-[2rem] border border-clutchGold/30 bg-black p-6"><p className="text-xs uppercase tracking-[0.35em] text-clutchGold">Founder</p><h2 className="mt-5 text-3xl font-black">{site.founder}</h2><p className="mt-2 text-zinc-300">{site.role}</p><div className="mt-8 grid gap-4"><div className="flex items-center gap-3 text-zinc-300"><Building2 className="text-clutchGold" /> {site.brand} / {site.subBrand}</div><div className="flex items-center gap-3 text-zinc-300"><Mail className="text-clutchGold" /> {site.email}</div><div className="flex items-center gap-3 text-zinc-300"><Zap className="text-clutchGold" /> {site.location}</div></div></div></div>
    </section>

    <Section id="deck" eyebrow="Executive Summary" title="A venture studio for AI-powered revenue systems."><div className="grid gap-6 md:grid-cols-3">{[['Problem','Businesses lose money from disconnected tools, manual workflows, weak conversion tracking, and poor real-time intelligence.'],['Solution','Clutch connects automation, analytics, routing, training, AI content, and sales systems into one measurable growth engine.'],['Investor Thesis','A portfolio approach lets investors back specific units while preserving the larger Clutch umbrella structure.']].map(([title,copy])=><div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h3 className="text-xl font-black text-clutchGold">{title}</h3><p className="mt-4 text-zinc-300">{copy}</p></div>)}</div></Section>
    <Section id="products" eyebrow="Product Suite" title="Multiple revenue engines under one Clutch umbrella."><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((product)=><ProductCard key={product.name} {...product} />)}</div></Section>
    <Section eyebrow="Traction & Financial Snapshot" title="Investor-ready metrics built for clear updates."><div className="grid gap-5 md:grid-cols-3">{metrics.map((metric)=><MetricCard key={metric.label} {...metric} />)}</div></Section>
    <Section eyebrow="Revenue Model" title="Recurring, service, implementation, and licensing revenue."><div className="grid gap-4 md:grid-cols-3">{revenueModels.map((model)=><div key={model} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5"><ShieldCheck className="h-5 w-5 text-clutchGold" /><span className="text-zinc-200">{model}</span></div>)}</div></Section>
    <Section eyebrow="Investment Ask" title="Seeking strategic capital, pilot customers, and enterprise partners."><div className="grid gap-6 md:grid-cols-2"><div className="rounded-3xl border border-clutchGold/30 bg-clutchGold/10 p-8"><Rocket className="h-10 w-10 text-clutchGold" /><h3 className="mt-5 text-3xl font-black">Seed Ask: $250,000</h3><p className="mt-4 text-zinc-300">Capital supports engineering, pilots, customer acquisition, compliance, AI product development, and enterprise sales.</p></div><div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"><BarChart3 className="h-10 w-10 text-clutchGold" /><h3 className="mt-5 text-3xl font-black">Seed+: $1.5M–$2M</h3><p className="mt-4 text-zinc-300">Growth round to scale infrastructure, analytics, product teams, city pilots, creator platforms, and enterprise accounts.</p></div></div></Section>
    <Section id="cards" eyebrow="QR Business Cards" title="Three cards for meetings, investors, and product demos."><div className="grid gap-6 lg:grid-cols-3">{businessCards.map((card)=><BusinessCard key={card.title} {...card} />)}</div></Section>
    <Section id="contact" eyebrow="Contact" title="Bring Clutch into the room."><div className="rounded-[2rem] border border-clutchGold/30 bg-gradient-to-br from-clutchGold/15 to-white/[0.03] p-8"><h3 className="text-3xl font-black">{site.founder}</h3><p className="mt-2 text-zinc-300">{site.role} — {site.brand}</p><div className="mt-8 flex flex-wrap gap-4"><a href={`mailto:${site.email}`} className="rounded-full bg-clutchGold px-6 py-3 font-bold text-black">Email Anthony</a><a href={site.github} className="rounded-full border border-white/15 px-6 py-3 font-bold text-white">GitHub</a><a href={site.website} className="rounded-full border border-white/15 px-6 py-3 font-bold text-white">Website</a></div></div></Section>
    <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">© 2026 Clutch Systems HQ / ClutchTech. Detroit-built intelligence.</footer>
  </main>;
}
