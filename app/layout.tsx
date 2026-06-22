import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Clutch Systems HQ | Investor Deck",
  description: "Investor deck website and QR-ready business cards for Clutch Systems HQ — Detroit-built AI systems for automation, revenue, and enterprise growth.",
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return <html lang="en"><body>{children}</body></html>;
}
