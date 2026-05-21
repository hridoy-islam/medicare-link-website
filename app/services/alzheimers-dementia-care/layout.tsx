import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Alzheimer’s & Dementia Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides specialist Alzheimer’s and dementia care services across the UK, offering compassionate, patient-focused support to ensure safety, dignity, and comfort for individuals living with memory-related conditions.",

  keywords: [
    "Alzheimer’s Care UK",
    "Dementia Care Services UK",
    "Memory Care Support",
    "Home Care Dementia UK",
    "Elderly Dementia Care",
    "Specialist Dementia Caregivers UK",
    "Cognitive Support Services",
    "24/7 Dementia Care UK",
    "Compassionate Memory Care",
    "Medicare Link Dementia Care",
  ],

  openGraph: {
    title:
      "Alzheimer’s & Dementia Care Services | Medicare Link UK",
    description:
      "Specialist Alzheimer’s and dementia care from Medicare Link — delivering safe, structured, and compassionate support for individuals across the UK.",
    url: "https://www.medicarelink.co.uk/services/alzheimers-dementia-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Alzheimer’s & Dementia Care Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alzheimer’s & Dementia Care | Medicare Link UK",
    description:
      "Compassionate dementia and Alzheimer’s care services across the UK with trained caregivers and personalized support plans.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/alzheimers-dementia-care",
  },
};

export default function AlzheimersDementiaCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}