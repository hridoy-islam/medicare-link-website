import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "End of Tenancy Cleaning | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional end of tenancy cleaning services across the UK, ensuring properties are thoroughly cleaned, hygienic, and ready for inspection, helping tenants and landlords achieve a smooth handover process.",

  keywords: [
    "End of Tenancy Cleaning UK",
    "Move Out Cleaning Services",
    "Rental Property Cleaning UK",
    "Deep Cleaning Services UK",
    "Professional Cleaning for Tenants",
    "Landlord Cleaning Services",
    "House Move Cleaning UK",
    "Exit Cleaning Services",
    "Reliable Cleaning Company UK",
    "Medicare Link Cleaning Services",
  ],

  openGraph: {
    title: "End of Tenancy Cleaning | Medicare Link UK",
    description:
      "Professional end of tenancy cleaning services from Medicare Link — delivering deep, reliable, and inspection-ready cleaning across the UK.",
    url: "https://www.medicarelink.co.uk/services/end-of-tenancy-cleaning",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "End of Tenancy Cleaning Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "End of Tenancy Cleaning | Medicare Link UK",
    description:
      "Reliable move-out and end of tenancy cleaning services across the UK for tenants and landlords.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/end-of-tenancy-cleaning",
  },
};

export default function EndOfTenancyCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}