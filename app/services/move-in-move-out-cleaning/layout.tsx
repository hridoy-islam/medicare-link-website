import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Move In Move Out Cleaning | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional move in and move out cleaning services across the UK, ensuring homes are thoroughly cleaned, sanitized, and ready for new occupants or final inspections with reliable and detailed support.",

  keywords: [
    "Move In Cleaning UK",
    "Move Out Cleaning Services UK",
    "End of Tenancy Cleaning UK",
    "Deep Cleaning Services UK",
    "House Moving Cleaning Support",
    "Professional Cleaning UK",
    "Rental Property Cleaning",
    "Pre Move Cleaning UK",
    "Post Move Cleaning Services",
    "Medicare Link Cleaning Services",
  ],

  openGraph: {
    title: "Move In Move Out Cleaning | Medicare Link UK",
    description:
      "Professional move in and move out cleaning from Medicare Link — delivering deep, reliable, and inspection-ready cleaning services across the UK.",
    url: "https://www.medicarelink.co.uk/services/move-in-move-out-cleaning",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Move In Move Out Cleaning UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Move In Move Out Cleaning | Medicare Link UK",
    description:
      "Reliable move in and move out cleaning services across the UK for homes, tenants, and landlords.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/move-in-move-out-cleaning",
  },
};

export default function MoveInMoveOutCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}