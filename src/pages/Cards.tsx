import { Nav } from "@/components/clutch/Nav";
import { Footer } from "@/components/clutch/Footer";
import { Section } from "@/components/clutch/Section";
import { BusinessCard } from "@/components/clutch/BusinessCard";
import { businessCards } from "@/content/deck";
import { CTA } from "@/components/clutch/CTA";
import { ArrowLeft, Printer } from "lucide-react";

const Cards = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-24">
        <Section
          eyebrow="Clutch · Digital Business Cards"
          title="Three cards. One operator."
          subtitle="Print-ready, screen-ready, QR-ready. Each card is a doorway into the Clutch grid."
        >
          <div className="flex flex-wrap gap-3 mb-10">
            <CTA href="/" variant="outline" className="h-10 px-5 text-xs">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Deck
            </CTA>
            <CTA onClick={() => window.print()} variant="gold" className="h-10 px-5 text-xs">
              <Printer className="mr-2 w-4 h-4" /> Print Cards
            </CTA>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessCards.map((c) => (
              <BusinessCard key={c.kind} {...c} />
            ))}
          </div>

          <div className="mt-16 p-6 rounded-xl bg-card/50 border border-border/60 text-sm text-muted-foreground leading-relaxed">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Deploy notes</div>
            <ul className="space-y-1 list-disc pl-5">
              <li>Replace QR placeholders by adding PNGs in <code className="text-primary">/public/qr/</code> and setting <code className="text-primary">qr.*</code> in <code className="text-primary">src/content/deck.ts</code>.</li>
              <li>Drop the investor PDF at <code className="text-primary">/public/clutch-investor-deck.pdf</code> and point <code className="text-primary">links.investorDeck</code> at it.</li>
              <li>Push the repo to GitHub → import on Vercel (framework: Vite) → deploy. Custom domain via Vercel UI.</li>
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Cards;

