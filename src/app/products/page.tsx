import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Aquevia Water Products | 1L, 500ml, 200ml, 2L & 20L Jars",
  description:
    "Explore the complete range of Aquevia Packaged Drinking Water by ASA Beverages: 1L Flagship bottles, 500ml travel packs, 200ml event bottles, 2L family packs & 20L dispenser jars.",
  alternates: {
    canonical: "https://aquevia.in/products",
  },
  openGraph: {
    title: "Aquevia Packaged Drinking Water Collection | ASA Beverages",
    description:
      "Precision food-grade PET water bottles & 20L jars purified via 9-stage RO+UV+Ozone in Ghaziabad, UP.",
    url: "https://aquevia.in/products",
    images: [
      {
        url: "https://aquevia.in/images/aquevia_range.jpg",
        width: 1200,
        height: 630,
        alt: "Aquevia Packaged Drinking Water Range (200ml, 500ml, 1L, 2L)",
      },
    ],
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
