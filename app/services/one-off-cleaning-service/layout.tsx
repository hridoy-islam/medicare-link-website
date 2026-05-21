import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "One Off Cleaning Service | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional one off cleaning services across the UK, offering deep, thorough, and flexible cleaning solutions for homes, offices, and special occasions tailored to your needs.",

  keywords: [
    "One Off Cleaning Service UK",
    "Deep Cleaning Services UK",
    "Professional Cleaning UK",
    "Single Cleaning Service UK",
    "Home Deep Cleaning UK",
    "Emergency Cleaning Services",
    "Flexible Cleaning Services UK",
    "Residential Cleaning UK",
    "Reliable Cleaning Company UK",
    "Medicare Link Cleaning Services",
  ],

  openGraph: {
    title: "One Off Cleaning Service | Medicare Link UK",
    description:
      "Flexible and professional one off cleaning services from Medicare Link — delivering deep, reliable, and high-quality cleaning across the UK.",
    url: "https://www.medicarelink.co.uk/services/one-off-cleaning-service",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "One Off Cleaning Service UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "One Off Cleaning Service | Medicare Link UK",
    description:
      "Professional one off deep cleaning services across the UK for homes and businesses.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/one-off-cleaning-service",
  },
};

export default function OneOffCleaningServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}