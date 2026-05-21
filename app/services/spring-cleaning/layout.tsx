import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Spring Cleaning | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional spring cleaning services across the UK, delivering deep, detailed, and refreshing cleaning solutions to restore homes to a clean, healthy, and organized condition.",

  keywords: [
    "Spring Cleaning UK",
    "Deep Cleaning Services UK",
    "Seasonal Cleaning Services",
    "Home Deep Cleaning UK",
    "Professional Cleaning UK",
    "Residential Cleaning Services",
    "House Cleaning UK",
    "Reliable Cleaning Company UK",
    "Thorough Home Cleaning UK",
    "Medicare Link Spring Cleaning",
  ],

  openGraph: {
    title: "Spring Cleaning Services | Medicare Link UK",
    description:
      "Professional spring cleaning services from Medicare Link — delivering deep, refreshing, and detailed cleaning across homes in the UK.",
    url: "https://www.medicarelink.co.uk/services/spring-cleaning",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Spring Cleaning Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spring Cleaning | Medicare Link UK",
    description:
      "Thorough and professional spring cleaning services across the UK for homes and residential spaces.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/spring-cleaning",
  },
};

export default function SpringCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}