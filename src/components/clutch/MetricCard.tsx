import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  note?: string;
  className?: string;
}

export const MetricCard = ({ label, value, note, className }: MetricCardProps) => (
  <div
    className={cn(
      "group relative rounded-xl bg-card/60 backdrop-blur-sm p-6 gold-border transition-smooth hover:bg-card hover:-translate-y-1 hover:shadow-gold-sm",
      className,
    )}
  >
    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
      {label}
    </div>
    <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
      {value}
    </div>
    {note && <div className="mt-2 text-sm text-muted-foreground">{note}</div>}
  </div>
);

