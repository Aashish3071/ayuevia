import type { Metadata } from "next";
import DistributorClient from "./DistributorClient";

export const metadata: Metadata = {
  title: "Packaged Drinking Water Dealership | Become a Distributor (UP & NCR)",
  description:
    "Apply for exclusive Aquevia packaged drinking water distributorship and super stockist rights in Uttar Pradesh & Delhi NCR. High margins, wholesale bulk supply & marketing support from ASA Beverages.",
  alternates: {
    canonical: "https://aquevia.in/distributor",
  },
  openGraph: {
    title: "Aquevia Water Dealership & Distributorship Opportunities | ASA Beverages",
    description:
      "Partner with ASA Beverages for exclusive packaged drinking water dealership in Ghaziabad, Noida, Greater Noida, Meerut, and Western UP.",
    url: "https://aquevia.in/distributor",
  },
};

export default function DistributorPage() {
  return <DistributorClient />;
}
