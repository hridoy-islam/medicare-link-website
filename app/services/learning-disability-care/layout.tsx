import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Learning Disability Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides compassionate learning disability care services across the UK, offering personalized support to help individuals build independence, confidence, and daily living skills in a safe and supportive environment.",

  keywords: [
    "Learning Disability Care UK",
    "Disability Support Services UK",
    "Special Needs Care UK",
    "Home Care Learning Disabilities",
    "Independent Living Support UK",
    "Personal Care Disability Support",
    "Care for Adults with Disabilities",
    "Supported Living Services UK",
    "Compassionate Disability Care",
    "Medicare Link Disability Care",
  ],

  openGraph: {
    title: "Learning Disability Care | Medicare Link UK",
    description:
      "Specialist learning disability care from Medicare Link — delivering tailored support, independence, and compassionate care across the UK.",
    url: "https://www.medicarelink.co.uk/services/learning-disability-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Learning Disability Care UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Learning Disability Care | Medicare Link UK",
    description:
      "Personalized learning disability care services across the UK focused on independence, dignity, and daily support.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/learning-disability-care",
  },
};

export default function LearningDisabilityCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}