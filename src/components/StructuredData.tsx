import React from "react";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://aquevia.in/#organization",
    name: "ASA Beverages",
    alternateName: ["Aquevia", "Aquevia Water", "ASA Beverages Ghaziabad"],
    url: "https://aquevia.in",
    logo: "https://aquevia.in/images/asa_logo_official.png",
    image: "https://aquevia.in/images/aquevia_bottle_1l.jpg",
    description:
      "ASA Beverages is a premier manufacturer of Aquevia Packaged Drinking Water in Ghaziabad, Uttar Pradesh. Producing 1L flagship bottles, 500ml, 200ml, 2L packs and 20L jars with advanced 9-stage RO, UV, and Ozonization purification.",
    telephone: "+91-9870170922",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dist., Ghaziabad",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6692,
      longitude: 77.4538,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: ["https://wa.me/919870170922"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "FSSAI Food Safety License",
      credentialCategory: "FSSAI License No. 22726696000236",
    },
  };

  const product1LSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Aquevia 1L Packaged Drinking Water",
    image: "https://aquevia.in/images/aquevia_bottle_1l.jpg",
    description:
      "Aquevia 1L Flagship Packaged Drinking Water Bottle by ASA Beverages. Purified with advanced 9-stage RO, UV, and Ozonization, packaged in ribbed food-grade PET bottles with balanced pH 7.2-7.5.",
    brand: {
      "@type": "Brand",
      name: "Aquevia",
    },
    manufacturer: {
      "@type": "Organization",
      name: "ASA Beverages",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "15",
      highPrice: "20",
      offerCount: "1000",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "ASA Beverages",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
    },
  };

  const product20LSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Aquevia 20L Water Dispenser Jar",
    image: "https://aquevia.in/images/aquevia_jar_20l.jpg",
    description:
      "Heavy-duty 20 Litre Aquevia Water Dispenser Jar for corporate offices, homes, events, and institutions in Ghaziabad and NCR.",
    brand: {
      "@type": "Brand",
      name: "Aquevia",
    },
    manufacturer: {
      "@type": "Organization",
      name: "ASA Beverages",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "80",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "ASA Beverages",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Aquevia water RO and UV purified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Aquevia packaged drinking water by ASA Beverages undergoes rigorous multi-stage purification including High-Pressure Reverse Osmosis (RO), Ultraviolet (UV) C Disinfection, and Ozonization to eliminate all micro-impurities and pathogens.",
        },
      },
      {
        "@type": "Question",
        name: "What is the pH level of Aquevia drinking water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aquevia drinking water is maintained at an optimal balanced pH level of 7.2 to 7.5, providing ideal hydration and a crisp, refreshing mineral taste.",
        },
      },
      {
        "@type": "Question",
        name: "Which bottle sizes are available in Aquevia water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our flagship primary bottle size is 1L. We also manufacture 500ml travel bottles, 200ml pocket/event bottles, 2L family packs, and 20L heavy-duty dispenser jars for offices and homes.",
        },
      },
      {
        "@type": "Question",
        name: "How can I become an authorized ASA Beverages distributor in Uttar Pradesh / Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can apply directly through our website by clicking the 'Get Distribution' button or calling +91 9870170922. Our territory manager reviews applications and responds within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "What is the FSSAI License Number for ASA Beverages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ASA Beverages operates under official FSSAI License No. 22726696000236, meeting all statutory food and drinking water safety parameters.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product1LSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product20LSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
