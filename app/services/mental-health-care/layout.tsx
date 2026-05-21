import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mental Health Care | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides compassionate mental health care services across the UK, offering personalized emotional support, daily living assistance, and professional care to help individuals improve wellbeing, stability, and quality of life.",

  keywords: [
    "Mental Health Care UK",
    "Mental Health Support Services",
    "Home Mental Health Care",
    "Emotional Support UK",
    "Psychosocial Support Services",
    "Community Mental Health Care",
    "Care Support for Mental Health",
    "Wellbeing Support UK",
    "Compassionate Mental Health Care",
    "Medicare Link Mental Health Care",
  ],

  openGraph: {
    title: "Mental Health Care Services | Medicare Link UK",
    description:
      "Compassionate mental health care from Medicare Link — delivering emotional support, daily assistance, and personalized care across the UK.",
    url: "https://www.medicarelink.co.uk/services/mental-health-care",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Mental Health Care Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mental Health Care | Medicare Link UK",
    description:
      "Professional mental health care and emotional support services across the UK with compassionate caregivers.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/mental-health-care",
  },
};

export default function MentalHealthCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}