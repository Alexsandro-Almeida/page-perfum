import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Maison Élance | Alta Perfumaria & Curadoria Olfativa",
  description: "Fragrâncias raras, alta concentração e curadoria privada para transformar sua presença em memória. Descubra sua assinatura olfativa.",
  keywords: ["perfumes de luxo", "alta perfumaria", "perfume nicho", "curadoria olfativa", "extrait de parfum"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
