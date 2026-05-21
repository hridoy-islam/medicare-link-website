import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Event & Party Cleaning | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional event and party cleaning services across the UK, ensuring venues, homes, and event spaces are cleaned efficiently before and after events for a stress-free experience.",

  keywords: [
    "Event Cleaning UK",
    "Party Cleaning Services UK",
    "After Party Cleaning",
    "Pre Event Cleaning Services",
    "Venue Cleaning UK",
    "Professional Cleaning Services UK",
    "House Party Cleanup",
    "Event Cleanup Services",
    "Reliable Cleaning Company UK",
    "Medicare Link Event Cleaning",
  ],

  openGraph: {
    title: "Event & Party Cleaning | Medicare Link UK",
    description:
      "Professional event and party cleaning services from Medicare Link — ensuring spotless venues before and after events across the UK.",
    url: "https://www.medicarelink.co.uk/services/event-party-cleaning",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Event & Party Cleaning Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Event & Party Cleaning | Medicare Link UK",
    description:
      "Reliable pre and post-event cleaning services across the UK for homes, venues, and parties.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/event-party-cleaning",
  },
};

export default function EventPartyCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}