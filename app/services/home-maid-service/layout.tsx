import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Maid Service | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides reliable home maid services across the UK, offering trained and trustworthy support for household cleaning, daily chores, and domestic assistance to ensure a clean and comfortable living environment.",

  keywords: [
    "Home Maid Service UK",
    "Domestic Maid Services UK",
    "House Maid Agency UK",
    "Professional Maid Services",
    "Home Cleaning Assistance UK",
    "Reliable Maid Services",
    "Housekeeping Support UK",
    "Live In Maid Services",
    "Domestic Help UK",
    "Medicare Link Maid Service",
  ],

  openGraph: {
    title: "Home Maid Service | Medicare Link UK",
    description:
      "Professional home maid services from Medicare Link — providing trusted, trained, and reliable domestic support across the UK.",
    url: "https://www.medicarelink.co.uk/services/home-maid-service",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Home Maid Service UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Maid Service | Medicare Link UK",
    description:
      "Trusted home maid services across the UK for cleaning, household support, and daily domestic assistance.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/home-maid-service",
  },
};

export default function HomeMaidServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}