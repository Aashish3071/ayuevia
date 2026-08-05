import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASA Beverages | Premium Packaged Drinking Water (Aquevia)",
  description:
    "ASA Beverages provides premium packaged drinking water manufactured with advanced 9-stage purification technology (RO, UV, Ozone). Safe, refreshing, hygienic drinking water for homes, businesses and distributors.",
  keywords: [
    "Packaged Drinking Water",
    "Mineral Water",
    "RO Water",
    "Purified Water",
    "Drinking Water",
    "Water Supplier",
    "Water Distributor",
    "ASA Beverages",
    "Aquevia",
    "Ghaziabad Water Manufacturer",
  ],
  authors: [{ name: "ASA Beverages" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-brand-blue selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
