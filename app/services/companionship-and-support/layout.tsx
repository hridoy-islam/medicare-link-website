import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Companionship & Support | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides compassionate companionship and support services across the UK, helping individuals reduce loneliness, improve wellbeing, and maintain independence through friendly, reliable, and personalized care.",

  keywords: [
    "Companionship Services UK",
    "Home Care Companionship",
    "Elderly Companionship Support",
    "Social Care Support UK",
    "Loneliness Support Services",
    "Personal Support Care UK",
    "Friendly Caregivers UK",
    "Home Support Services",
    "Wellbeing Care Support",
    "Medicare Link Companionship",
  ],

  openGraph: {
    title: "Companionship & Support Services | Medicare Link UK",
    description:
      "Warm and reliable companionship & support services from Medicare Link — promoting wellbeing, independence, and emotional support across the UK.",
    url: "https://www.medicarelink.co.uk/services/companionship-and-support",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Companionship & Support Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Companionship & Support | Medicare Link UK",
    description:
      "Trusted companionship and emotional support services across the UK, delivered with care and compassion.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/companionship-and-support",
  },
};

export default function CompanionshipAndSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}