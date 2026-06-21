import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, subtitle, children, className }: SectionProps) => (
  <section id={id} className={cn("py-20 md:py-28 scroll-mt-20", className)}>
    <div className="container max-w-6xl">
      {(eyebrow || title || subtitle) && (
        <div className="mb-12 md:mb-16 max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary mb-4 font-medium">
              <span className="h-px w-8 bg-gradient-gold" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

