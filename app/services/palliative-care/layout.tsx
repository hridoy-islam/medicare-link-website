import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Palliative Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides compassionate palliative care services across the UK, offering specialist support focused on comfort, dignity, pain management, and emotional wellbeing for individuals with serious or life-limiting conditions.",

  keywords: [
    "Palliative Care UK",
    "End of Life Care UK",
    "Hospice Support Services",
    "Pain Management Care UK",
    "Comfort Care Services",
    "Terminal Illness Care UK",
    "Home Palliative Care",
    "Compassionate Care UK",
    "Support for Serious Illness",
    "Medicare Link Palliative Care",
  ],

  openGraph: {
    title: "Palliative Care Services | Medicare Link UK",
    description:
      "Compassionate palliative care from Medicare Link — focused on comfort, dignity, pain relief, and emotional support across the UK.",
    url: "https://www.medicarelink.co.uk/services/palliative-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Palliative Care Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Palliative Care | Medicare Link UK",
    description:
      "Specialist palliative care services across the UK focused on comfort, dignity, and compassionate support.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/palliative-care",
  },
};

export default function PalliativeCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}