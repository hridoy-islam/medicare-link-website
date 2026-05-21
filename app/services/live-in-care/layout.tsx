import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Live-in Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional live-in care services across the UK, offering 24/7 personalized home support to ensure safety, comfort, independence, and dignity for individuals who need continuous assistance.",

  keywords: [
    "Live-in Care UK",
    "24/7 Home Care UK",
    "Live In Caregivers UK",
    "Full Time Home Care Support",
    "Elderly Live-in Care",
    "In Home 24 Hour Care",
    "Personal Care at Home UK",
    "Compassionate Live-in Carers",
    "Supported Living at Home",
    "Medicare Link Live-in Care",
  ],

  openGraph: {
    title: "Live-in Care Services | Medicare Link UK",
    description:
      "Reliable live-in care from Medicare Link — providing 24/7 compassionate support, personal care, and independence at home across the UK.",
    url: "https://www.medicarelink.co.uk/services/live-in-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Live-in Care Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Live-in Care | Medicare Link UK",
    description:
      "24/7 professional live-in care services across the UK with trained and compassionate caregivers.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/live-in-care",
  },
};

export default function LiveInCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}