import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Respite Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional respite care services across the UK, offering temporary, high-quality care and support to give family caregivers a well-deserved break while ensuring continuous comfort, safety, and wellbeing for loved ones.",

  keywords: [
    "Respite Care UK",
    "Temporary Care Services UK",
    "Carer Break Support UK",
    "Short Term Care UK",
    "Elderly Respite Care",
    "Home Respite Care Services",
    "Caregiver Relief Services",
    "Emergency Care Support UK",
    "Compassionate Respite Care",
    "Medicare Link Respite Care",
  ],

  openGraph: {
    title: "Respite Care Services | Medicare Link UK",
    description:
      "Reliable respite care from Medicare Link — giving family carers a break while ensuring safe, compassionate, and professional care across the UK.",
    url: "https://www.medicarelink.co.uk/services/respite-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Respite Care Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Respite Care | Medicare Link UK",
    description:
      "Professional respite care services across the UK providing short-term support and relief for family caregivers.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/respite-care",
  },
};

export default function RespiteCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}