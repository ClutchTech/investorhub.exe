import { ArrowRight, Download, Mail } from "lucide-react";
import { CTA } from "./CTA";
import { hero, links } from "@/content/deck";

export const Hero = () => (
  <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-gold opacity-[0.07] blur-3xl pointer-events-none" />

    <div className="container max-w-6xl relative">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs uppercase tracking-[0.25em] text-primary mb-8 animate-fade-up">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-gold" />
        Investor Briefing · 2026
      </div>

      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-up" style={{ animationDelay: "0.05s" }}>
        <span className="block text-foreground">{hero.brand.split(" ").slice(0, 2).join(" ")}</span>
        <span className="block text-gradient-gold">{hero.brand.split(" ").slice(2).join(" ") || "HQ"}</span>
      </h1>

      <p className="mt-6 font-display text-2xl md:text-3xl text-foreground/90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        {hero.tagline}
      </p>

      <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
        {hero.sub}
      </p>

      <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <CTA href={links.investorDeck} variant="gold">
          View Investor Deck <ArrowRight className="ml-2 w-4 h-4" />
        </CTA>
        <CTA href={links.onePager} variant="outline">
          <Download className="mr-2 w-4 h-4" /> Download One-Pager
        </CTA>
        <CTA href="#contact" variant="ghost">
          <Mail className="mr-2 w-4 h-4" /> Contact Anthony
        </CTA>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-xl overflow-hidden gold-border animate-fade-up" style={{ animationDelay: "0.3s" }}>
        {[
          ["$2.8K", "MRR (beta)"],
          ["6", "MVP systems"],
          ["10K", "Users · 18mo"],
          ["Month 8", "Break-even"],
        ].map(([v, l]) => (
          <div key={l} className="bg-background/80 backdrop-blur p-5">
            <div className="font-display text-2xl font-bold text-gradient-gold">{v}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

