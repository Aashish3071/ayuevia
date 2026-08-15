import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | ASA Beverages - Aquevia Water Plant Ghaziabad",
  description:
    "Learn about ASA Beverages, the manufacturer of Aquevia Packaged Drinking Water based in Ghaziabad, UP. State-of-the-art 9-stage purification facility under FSSAI Lic. 22726696000236.",
  alternates: {
    canonical: "https://aquevia.in/about",
  },
  openGraph: {
    title: "About ASA Beverages | Aquevia Drinking Water Manufacturer",
    description:
      "Discover ASA Beverages' vision for pure, safe, and mineral-balanced drinking water in Ghaziabad, Uttar Pradesh.",
    url: "https://aquevia.in/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
