import { QrCode } from "lucide-react";

interface QRPlaceholderProps {
  src?: string;
  label?: string;
  size?: number;
}

/**
 * QR placeholder block. To use a real QR:
 *   1. Generate at qr-code-generator (encode any URL).
 *   2. Drop PNG in /public/qr/<name>.png
 *   3. Pass src="/qr/<name>.png" (or set qr.* in src/content/deck.ts).
 */
export const QRPlaceholder = ({ src, label = "QR", size = 128 }: QRPlaceholderProps) => (
  <div
    className="relative rounded-lg bg-foreground/95 p-2 grid place-items-center shadow-elevated"
    style={{ width: size, height: size }}
  >
    {src ? (
      <img src={src} alt={label} className="w-full h-full object-contain" />
    ) : (
      <div className="w-full h-full rounded-md grid-pattern grid place-items-center bg-background/80">
        <div className="flex flex-col items-center gap-1 text-primary">
          <QrCode className="w-8 h-8" strokeWidth={1.5} />
          <span className="text-[10px] uppercase tracking-widest">{label}</span>
        </div>
      </div>
    )}
  </div>
);

