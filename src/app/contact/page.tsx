import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | ASA Beverages (Aquevia Water) Ghaziabad UP",
  description:
    "Contact ASA Beverages manufacturing plant in Ghaziabad, Uttar Pradesh (201002). Direct Phone & WhatsApp: +91 9870170922. Inquire for bulk orders, corporate supply, and dealerships.",
  alternates: {
    canonical: "https://aquevia.in/contact",
  },
  openGraph: {
    title: "Contact ASA Beverages | Aquevia Packaged Water Plant",
    description:
      "Get in touch with ASA Beverages for bulk packaged drinking water orders and dealership inquiries in Ghaziabad and NCR.",
    url: "https://aquevia.in/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
