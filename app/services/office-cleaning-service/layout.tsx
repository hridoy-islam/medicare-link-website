import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Office Cleaning Service | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional office cleaning services across the UK, ensuring clean, hygienic, and well-maintained workplaces that promote productivity, safety, and a healthy environment for staff and visitors.",

  keywords: [
    "Office Cleaning Service UK",
    "Commercial Cleaning UK",
    "Business Cleaning Services",
    "Workplace Cleaning UK",
    "Professional Office Cleaners",
    "Corporate Cleaning Services",
    "Daily Office Cleaning UK",
    "Industrial Cleaning Support",
    "Reliable Cleaning Company UK",
    "Medicare Link Office Cleaning",
  ],

  openGraph: {
    title: "Office Cleaning Service | Medicare Link UK",
    description:
      "Professional office cleaning services from Medicare Link — delivering hygienic, reliable, and high-quality workplace cleaning across the UK.",
    url: "https://www.medicarelink.co.uk/services/office-cleaning-service",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Office Cleaning Service UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Cleaning Service | Medicare Link UK",
    description:
      "Trusted office and commercial cleaning services across the UK for clean, safe, and productive workplaces.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/office-cleaning-service",
  },
};

export default function OfficeCleaningServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}