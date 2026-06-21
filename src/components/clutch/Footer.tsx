import { Link } from "react-router-dom";
import { links } from "@/content/deck";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-20">
    <div className="container max-w-6xl py-12 grid gap-8 md:grid-cols-3">
      <div>
        <div className="font-display font-bold text-lg">
          <span className="text-gradient-gold">CLUTCH SYSTEMS HQ</span>
        </div>
        <div className="text-sm text-muted-foreground mt-2">ClutchTech</div>
        <div className="text-xs uppercase tracking-[0.25em] text-primary mt-4">
          Detroit-built intelligence
        </div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Navigate</div>
        <ul className="space-y-2 text-sm">
          <li><a href="#summary" className="hover:text-primary transition-smooth">Executive Summary</a></li>
          <li><a href="#products" className="hover:text-primary transition-smooth">Product Suite</a></li>
          <li><a href="#financials" className="hover:text-primary transition-smooth">Financials</a></li>
          <li><Link to="/cards" className="hover:text-primary transition-smooth">Business Cards</Link></li>
        </ul>
      </div>

      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Connect</div>
        <ul className="space-y-2 text-sm">
          <li><a href={`mailto:${links.email}`} className="hover:text-primary transition-smooth">{links.email}</a></li>
          <li><a href={links.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-smooth">GitHub</a></li>
          <li><a href={links.booking} target="_blank" rel="noreferrer" className="hover:text-primary transition-smooth">Book a call</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/40">
      <div className="container max-w-6xl py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Clutch Systems HQ · ClutchTech</div>
        <div>Automation. Innovation. Profit.</div>
      </div>
    </div>
  </footer>
);
