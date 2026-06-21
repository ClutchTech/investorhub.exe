import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface CTAProps extends Omit<ButtonProps, "variant"> {
  variant?: "gold" | "outline" | "ghost";
  href?: string;
  external?: boolean;
}

export const CTA = forwardRef<HTMLButtonElement, CTAProps>(
  ({ variant = "gold", className, href, external, children, ...rest }, ref) => {
    const base = "h-12 px-7 rounded-lg font-medium text-sm tracking-wide transition-smooth";
    const variants = {
      gold: "bg-gradient-gold text-primary-foreground hover:shadow-gold hover:-translate-y-0.5 border-0",
      outline: "bg-transparent border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary",
      ghost: "bg-secondary text-foreground hover:bg-secondary/70 border border-border",
    } as const;

    const btn = (
      <Button ref={ref} className={cn(base, variants[variant], className)} {...rest}>
        {children}
      </Button>
    );

    if (href) {
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex"
        >
          {btn}
        </a>
      );
    }
    return btn;
  },
);
CTA.displayName = "CTA";
