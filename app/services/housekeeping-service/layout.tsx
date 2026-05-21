import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Housekeeping Service | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional housekeeping services across the UK, ensuring clean, organized, and well-maintained homes with reliable and trained support staff tailored to your daily living needs.",

  keywords: [
    "Housekeeping Service UK",
    "Professional Housekeeping UK",
    "Home Care Housekeeping",
    "Domestic Housekeeping Services",
    "Elderly Housekeeping Support",
    "Reliable Housekeepers UK",
    "Home Maintenance Services UK",
    "Cleaning and Housekeeping Support",
    "Care Home Housekeeping Services",
    "Medicare Link Housekeeping",
  ],

  openGraph: {
    title: "Housekeeping Service | Medicare Link UK",
    description:
      "Reliable housekeeping services from Medicare Link — delivering clean, organized, and comfortable living environments across the UK.",
    url: "https://www.medicarelink.co.uk/services/housekeeping-service",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Housekeeping Service UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Housekeeping Service | Medicare Link UK",
    description:
      "Professional housekeeping services across the UK for homes, care environments, and daily living support.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/housekeeping-service",
  },
};

export default function HousekeepingServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}