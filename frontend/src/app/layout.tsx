import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ultrasoft - Innovative Fintech Solutions for Africa",
  description: "Leading fintech company developing cutting-edge financial technology solutions for the African market. Discover UltraCollecte, AuBoulot, and more.",
  keywords: ["fintech", "Africa", "financial technology", "UltraCollecte", "AuBoulot", "payment solutions"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}