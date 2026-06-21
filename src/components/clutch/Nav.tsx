import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/deck";
import { CTA } from "./CTA";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container max-w-6xl flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-gradient-gold shadow-gold-sm" />
          <span className="text-gradient-gold">CLUTCH</span>
          <span className="text-foreground/70 hidden sm:inline">SYSTEMS HQ</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/cards" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
            Business Cards
          </Link>
          <CTA href="#contact" variant="gold" className="h-9 px-4 text-xs">
            Contact
          </CTA>
        </div>

        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95">
          <div className="container max-w-6xl py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary py-1"
              >
                {n.label}
              </a>
            ))}
            <Link to="/cards" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary py-1">
              Business Cards
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

