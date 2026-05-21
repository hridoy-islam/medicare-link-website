import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Residential Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides compassionate residential care services across the UK, offering safe, supportive, and professional long-term care in a comfortable environment that promotes dignity, wellbeing, and independence.",

  keywords: [
    "Residential Care UK",
    "Care Homes Support UK",
    "Long Term Care Services UK",
    "Elderly Residential Care",
    "Supported Living UK",
    "Care Home Services",
    "24 Hour Residential Care UK",
    "Personal Care Residential UK",
    "Compassionate Care Homes Support",
    "Medicare Link Residential Care",
  ],

  openGraph: {
    title: "Residential Care Services | Medicare Link UK",
    description:
      "Trusted residential care from Medicare Link — providing safe, compassionate, and professional long-term care across the UK.",
    url: "https://www.medicarelink.co.uk/services/residential-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Residential Care Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Residential Care | Medicare Link UK",
    description:
      "Professional residential care services across the UK with compassionate long-term support and wellbeing-focused care.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/residential-care",
  },
};

export default function ResidentialCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}