import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cleaning Support | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides reliable cleaning support services across the UK, ensuring safe, hygienic, and comfortable living environments for homes, care settings, and individuals who need professional assistance.",

  keywords: [
    "Cleaning Support UK",
    "Home Cleaning Services UK",
    "Care Home Cleaning Support",
    "Professional Cleaning Services",
    "Domestic Cleaning Assistance UK",
    "Elderly Home Cleaning Help",
    "Healthcare Cleaning Services",
    "Reliable Cleaning Care UK",
    "Support Cleaning Services",
    "Medicare Link Cleaning Support",
  ],

  openGraph: {
    title: "Cleaning Support Services | Medicare Link UK",
    description:
      "Professional and reliable cleaning support services from Medicare Link — ensuring safe, hygienic, and well-maintained living environments across the UK.",
    url: "https://www.medicarelink.co.uk/services/cleaning-support",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Cleaning Support Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cleaning Support | Medicare Link UK",
    description:
      "Trusted cleaning support services across the UK for homes, care environments, and personal assistance needs.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/cleaning-support",
  },
};

export default function CleaningSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}