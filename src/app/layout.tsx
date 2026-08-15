import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0086FF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aquevia.in"),
  title: {
    default: "ASA Beverages | Aquevia Packaged Drinking Water Manufacturer",
    template: "%s | ASA Beverages (Aquevia)",
  },
  description:
    "ASA Beverages is a leading manufacturer of Aquevia Packaged Drinking Water in Ghaziabad, Uttar Pradesh. Offering 1L flagship bottles, 500ml, 200ml, 2L packs & 20L jars with 9-stage RO+UV+Ozone purification. FSSAI Lic. 22726696000236.",
  applicationName: "Aquevia by ASA Beverages",
  keywords: [
    // Brand & Product Core
    "Aquevia",
    "Aquevia Packaged Drinking Water",
    "ASA Beverages",
    "ASA Beverages Ghaziabad",
    "Aquevia Mineral Water",
    "Packaged Drinking Water Manufacturer",
    "1L Water Bottle Aquevia",
    "20L Water Dispenser Jar Ghaziabad",
    "200ml Water Bottles for Events",
    "500ml Travel Water Bottle",
    "2L Family Water Bottle",
    // B2B & Dealership
    "Packaged Drinking Water Dealership Uttar Pradesh",
    "Water Distributorship Delhi NCR",
    "Mineral Water Wholesale Supplier Ghaziabad",
    "Packaged Water Franchise Opportunity",
    "Commercial Water Jar Delivery NCR",
    // Quality & Statutory
    "FSSAI License 22726696000236",
    "9 Stage RO UV Ozonized Drinking Water",
    "Balanced pH 7.2 Drinking Water",
    "Food Grade PET Water Bottle",
    // Geo Locations
    "Packaged Drinking Water Ghaziabad 201002",
    "Water Bottle Supplier Noida",
    "Water Bottle Manufacturer Delhi NCR",
    "Mineral Water Plant Uttar Pradesh India",
  ],
  authors: [{ name: "ASA Beverages", url: "https://aquevia.in" }],
  creator: "ASA Beverages",
  publisher: "ASA Beverages",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aquevia.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aquevia.in",
    siteName: "ASA Beverages - Aquevia Water",
    title: "ASA Beverages | Premium Packaged Drinking Water (Aquevia)",
    description:
      "Pure By Nature. Safe By Choice. Premium Packaged Drinking Water in 1L, 500ml, 200ml, 2L and 20L jars manufactured by ASA Beverages in Ghaziabad, UP.",
    images: [
      {
        url: "https://aquevia.in/images/aquevia_bottle_1l.jpg",
        width: 1200,
        height: 630,
        alt: "Aquevia 1L Packaged Drinking Water Bottle with Official Label by ASA Beverages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASA Beverages | Aquevia Packaged Drinking Water",
    description:
      "Advanced 9-stage RO, UV & Ozonization purified packaged drinking water. Dealership opportunities open across UP & NCR.",
    images: ["https://aquevia.in/images/aquevia_bottle_1l.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Ghaziabad",
    "geo.position": "28.6692;77.4538",
    ICBM: "28.6692, 77.4538",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased selection:bg-brand-blue selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
