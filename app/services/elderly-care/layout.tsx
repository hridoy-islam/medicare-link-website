import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Elderly Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides compassionate elderly care services across the UK, offering personalized home support, daily assistance, and professional caregivers dedicated to ensuring safety, dignity, and comfort for older adults.",

  keywords: [
    "Elderly Care UK",
    "Senior Care Services UK",
    "Home Care for Elderly",
    "Caregivers for Seniors UK",
    "In Home Elderly Care",
    "Personal Care Elderly UK",
    "Compassionate Elderly Support",
    "24/7 Elderly Care UK",
    "Trusted Senior Care Agency",
    "Medicare Link Elderly Care",
  ],

  openGraph: {
    title: "Elderly Care Services | Medicare Link UK",
    description:
      "Professional and compassionate elderly care from Medicare Link — supporting independence, dignity, and wellbeing for seniors across the UK.",
    url: "https://www.medicarelink.co.uk/services/elderly-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Elderly Care Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Elderly Care | Medicare Link UK",
    description:
      "Trusted elderly care services across the UK with compassionate caregivers and personalized home support.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/elderly-care",
  },
};

export default function ElderlyCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}