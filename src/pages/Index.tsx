import { Nav } from "@/components/clutch/Nav";
import { Footer } from "@/components/clutch/Footer";
import { Hero } from "@/components/clutch/Hero";
import { Section } from "@/components/clutch/Section";
import { MetricCard } from "@/components/clutch/MetricCard";
import { ProductCard } from "@/components/clutch/ProductCard";
import { CTA } from "@/components/clutch/CTA";
import { QRPlaceholder } from "@/components/clutch/QRPlaceholder";
import {
  summary, problem, solution, products, traction, revenueStreams,
  market, financials, ask, founder, links,
} from "@/content/deck";
import { Mail, Github, Globe, Calendar, AlertCircle, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />

        {/* Executive Summary */}
        <Section id="summary" eyebrow="01 · Executive Summary" title={summary.title}>
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-4xl">
            {summary.body}
          </p>
        </Section>

        {/* Problem */}
        <Section id="problem" eyebrow="02 · The Problem" title={problem.title}
          subtitle="Operators are drowning in tools, dashboards, and reports — and starving for outcomes.">
          <div className="grid md:grid-cols-2 gap-4">
            {problem.points.map((p, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-card/50 border border-border/60">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground/85 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Solution */}
        <Section id="solution" eyebrow="03 · The Solution" title={solution.title}>
          <div className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-card to-background gold-border overflow-hidden">
            <div className="absolute inset-0 circuit-pattern opacity-30" />
            <div className="relative">
              <Zap className="w-8 h-8 text-primary mb-5" />
              <p className="text-xl md:text-2xl font-display leading-snug max-w-4xl text-foreground/95">
                {solution.body}
              </p>
            </div>
          </div>
        </Section>

        {/* Products */}
        <Section id="products" eyebrow="04 · Product Suite" title="Six systems. One operating layer."
          subtitle="Each product ships standalone revenue — and compounds inside the Clutch grid.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => <ProductCard key={p.name} {...p} />)}
          </div>
        </Section>

        {/* Traction */}
        <Section id="traction" eyebrow="05 · Traction & Proof" title="Shipping. Earning. Scaling."
          subtitle="Editable metrics — update in src/content/deck.ts as the numbers move.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {traction.map((t) => <MetricCard key={t.label} {...t} />)}
          </div>
        </Section>

        {/* Revenue Model */}
        <Section id="revenue" eyebrow="06 · Revenue Model" title="Seven streams. Compounding margin.">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {revenueStreams.map((r) => (
              <div key={r} className="flex items-center gap-3 p-5 rounded-lg bg-card/60 border border-border/60 transition-smooth hover:border-primary/50">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">{r}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Market */}
        <Section id="market" eyebrow="07 · Market Opportunity" title="Five markets. One operating system.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {market.map((m) => (
              <div key={m.title} className="p-6 rounded-xl bg-card/60 border border-border/60 transition-smooth hover:-translate-y-1 hover:border-primary/50">
                <h3 className="font-display text-lg font-bold text-primary mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Financials */}
        <Section id="financials" eyebrow="08 · Financial Snapshot" title="Capital-efficient by design."
          subtitle="Projections — editable in the deck content file.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {financials.map((f) => <MetricCard key={f.label} {...f} />)}
          </div>
        </Section>

        {/* Ask */}
        <Section id="ask" eyebrow="09 · Investment Ask" title={ask.headline}
          subtitle="Use of funds — focused on velocity, distribution, and durable infrastructure.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ask.useOfFunds.map((u) => (
              <div key={u.title} className="p-6 rounded-xl bg-gradient-gold-soft border border-primary/20 transition-smooth hover:border-primary/50">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Use of funds</div>
                <h3 className="font-display text-xl font-bold mb-2">{u.title}</h3>
                <p className="text-sm text-muted-foreground">{u.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact / Digital Business Card */}
        <Section id="contact" eyebrow="10 · Contact" title="Let's build something that ships."
          subtitle="Digital business card — scan, save, or reach out directly.">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
            <div className="relative rounded-2xl p-8 md:p-10 bg-gradient-to-br from-card to-background gold-border overflow-hidden shadow-elevated">
              <div className="absolute inset-0 circuit-pattern opacity-25" />
              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-gold opacity-10 blur-3xl" />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3 font-semibold">
                  Founder · Detroit-built intelligence
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold">{founder.name}</h3>
                <div className="text-base text-muted-foreground mt-2">{founder.title}</div>
                <p className="mt-5 text-foreground/85 max-w-md leading-relaxed">{founder.blurb}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <CTA href={`mailto:${links.email}`} variant="gold" className="h-10 px-5 text-xs">
                    <Mail className="mr-2 w-4 h-4" /> Email
                  </CTA>
                  <CTA href={links.github} external variant="outline" className="h-10 px-5 text-xs">
                    <Github className="mr-2 w-4 h-4" /> GitHub
                  </CTA>
                  <CTA href={links.website} external variant="outline" className="h-10 px-5 text-xs">
                    <Globe className="mr-2 w-4 h-4" /> Website
                  </CTA>
                  <CTA href={links.booking} external variant="ghost" className="h-10 px-5 text-xs">
                    <Calendar className="mr-2 w-4 h-4" /> Book Call
                  </CTA>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                  <div><span className="text-muted-foreground">Email · </span>{links.email}</div>
                  <div><span className="text-muted-foreground">Handle · </span>{links.handle}</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-card/60 gold-border flex flex-col items-center justify-center text-center">
              <QRPlaceholder label="Contact" size={200} />
              <div className="mt-5 text-xs uppercase tracking-[0.25em] text-primary">Scan to connect</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Drop a PNG at <code className="text-primary">/public/qr/contact.png</code> and set <code className="text-primary">qr.contact</code>.
              </p>
              <Link to="/cards" className="mt-5 text-sm text-primary hover:underline">
                View printable business cards →
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
