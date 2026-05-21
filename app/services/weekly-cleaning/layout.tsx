import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Weekly Cleaning | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides reliable weekly cleaning services across the UK, offering consistent, professional, and high-quality home cleaning support to maintain a clean, hygienic, and comfortable living environment.",

  keywords: [
    "Weekly Cleaning UK",
    "Regular Home Cleaning Services UK",
    "Domestic Cleaning Weekly",
    "Professional Cleaning Services UK",
    "Home Maintenance Cleaning UK",
    "Reliable Cleaning Company UK",
    "House Cleaning Schedule UK",
    "Residential Cleaning Services",
    "Recurring Cleaning Services UK",
    "Medicare Link Weekly Cleaning",
  ],

  openGraph: {
    title: "Weekly Cleaning Services | Medicare Link UK",
    description:
      "Professional weekly cleaning services from Medicare Link — ensuring consistent, reliable, and high-quality home cleaning across the UK.",
    url: "https://www.medicarelink.co.uk/services/weekly-cleaning",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Weekly Cleaning Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Weekly Cleaning | Medicare Link UK",
    description:
      "Trusted weekly cleaning services across the UK for homes and residential spaces with consistent care and quality.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/weekly-cleaning",
  },
};

export default function WeeklyCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}