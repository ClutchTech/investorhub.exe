interface ProductCardProps {
  name: string;
  tag: string;
  desc: string;
}

export const ProductCard = ({ name, tag, desc }: ProductCardProps) => (
  <div className="group relative rounded-xl bg-card/60 backdrop-blur-sm p-7 gold-border overflow-hidden transition-smooth hover:-translate-y-1 hover:shadow-gold-sm">
    <div className="absolute inset-0 bg-gradient-gold-soft opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
    <div className="relative">
      <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-medium">{tag}</div>
      <h3 className="font-display text-2xl font-bold mb-3">{name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </div>
);

