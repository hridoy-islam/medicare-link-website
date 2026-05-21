import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Domiciliary Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional domiciliary care services across the UK, delivering personalized in-home support that helps individuals maintain independence, dignity, and comfort in their own homes.",

  keywords: [
    "Domiciliary Care UK",
    "Home Care Services UK",
    "In Home Care Support",
    "Elderly Home Care UK",
    "Personal Care at Home",
    "Caregivers UK",
    "Live In Support Services",
    "Independent Living Support",
    "Professional Home Care Agency",
    "Medicare Link Domiciliary Care",
  ],

  openGraph: {
    title: "Domiciliary Care Services | Medicare Link UK",
    description:
      "Reliable domiciliary care services from Medicare Link — offering compassionate in-home support, personal care, and daily assistance across the UK.",
    url: "https://www.medicarelink.co.uk/services/domiciliary-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Domiciliary Care Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Domiciliary Care | Medicare Link UK",
    description:
      "Compassionate domiciliary care services across the UK, supporting independence and quality of life at home.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/domiciliary-care",
  },
};

export default function DomiciliaryCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}