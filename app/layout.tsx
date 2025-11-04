import type { Metadata } from "next";
import { Fraunces, Outfit, Caveat } from "next/font/google";
import "./globals.css";

// Fraunces - Display font for headings and emotional moments
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Outfit - Body font for warmth and readability
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Caveat - Accent font for quotes (use sparingly)
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Résonance Citoyenne | Innovation démocratique et participation citoyenne",
  description: "Association de recherche citoyenne expérimentant de nouvelles formes de décision collective. Participez à l'expérience du vote quadratique et de la démocratie directe.",
  keywords: ["démocratie directe", "vote quadratique", "participation citoyenne", "innovation démocratique", "France"],
  authors: [{ name: "Résonance Citoyenne" }],
  openGraph: {
    title: "Résonance Citoyenne",
    description: "Explorons ensemble de nouvelles façons de décider",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${outfit.variable} ${caveat.variable}`}>
      <body className="font-body bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
