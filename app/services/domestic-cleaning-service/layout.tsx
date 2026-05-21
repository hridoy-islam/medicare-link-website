import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Domestic Cleaning Service | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link offers professional domestic cleaning services across the UK, ensuring clean, safe, and comfortable homes with reliable and trained support staff tailored to individual needs.",

  keywords: [
    "Domestic Cleaning Service UK",
    "Home Cleaning UK",
    "Professional Domestic Cleaners",
    "House Cleaning Services UK",
    "Elderly Home Cleaning Support",
    "Reliable Cleaning Services",
    "Residential Cleaning UK",
    "Care Home Cleaning Support",
    "Trusted Cleaning Assistants",
    "Medicare Link Domestic Cleaning",
  ],

  openGraph: {
    title: "Domestic Cleaning Service | Medicare Link UK",
    description:
      "Professional domestic cleaning services from Medicare Link — ensuring safe, hygienic, and well-maintained homes across the UK with trusted support staff.",
    url: "https://www.medicarelink.co.uk/services/domestic-cleaning-service",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Domestic Cleaning Service UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Domestic Cleaning Service | Medicare Link UK",
    description:
      "Reliable domestic cleaning services across the UK for homes, families, and care environments.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/domestic-cleaning-service",
  },
};

export default function DomesticCleaningServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}