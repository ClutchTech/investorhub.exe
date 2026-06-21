import { QRPlaceholder } from "./QRPlaceholder";
import { qr } from "@/content/deck";

interface BusinessCardProps {
  kind: string;
  name: string;
  role: string;
  line: string;
  cta: string;
  qrKey: "founder" | "investor" | "demo" | "contact";
}

export const BusinessCard = ({ kind, name, role, line, cta, qrKey }: BusinessCardProps) => (
  <article className="group relative rounded-2xl overflow-hidden gold-border bg-gradient-to-br from-card to-background p-7 md:p-8 shadow-elevated transition-smooth hover:-translate-y-1 hover:shadow-gold">
    <div className="absolute inset-0 circuit-pattern opacity-30 pointer-events-none" />
    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-gold opacity-10 blur-3xl" />

    <div className="relative flex flex-col h-full min-h-[280px]">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2 font-semibold">
            {kind}
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">{name}</h3>
          <div className="text-sm text-muted-foreground mt-1">{role}</div>
        </div>
        <QRPlaceholder src={qr[qrKey]} label={kind} size={96} />
      </div>

      <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1">{line}</p>

      <div className="flex items-center justify-between pt-4 border-t border-border/60">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{cta}</div>
        <div className="text-xs font-display font-bold text-gradient-gold">CLUTCH · DET</div>
      </div>
    </div>
  </article>
);
