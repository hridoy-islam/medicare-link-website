import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acquired Brain Injury | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides specialized Acquired Brain Injury (ABI) care services across the UK, offering compassionate, structured, and personalized support to help individuals regain independence, confidence, and quality of life.",

  keywords: [
    "Acquired Brain Injury Care UK",
    "ABI Support Services",
    "Brain Injury Rehabilitation UK",
    "Home Care Brain Injury Support",
    "Specialist Care Services UK",
    "Disability Care UK",
    "Neurological Care Support",
    "Rehabilitation Support UK",
    "Care for Brain Injury Patients",
    "Medicare Link ABI Services",
  ],

  openGraph: {
    title: "Acquired Brain Injury Support Services | Medicare Link UK",
    description:
      "Specialist Acquired Brain Injury care from Medicare Link — delivering structured rehabilitation, daily living support, and compassionate care across the UK.",
    url: "https://www.medicarelink.co.uk/services/acquired-brain-injury",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Acquired Brain Injury Support Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Acquired Brain Injury Support | Medicare Link UK",
    description:
      "Compassionate ABI care services across the UK — rehabilitation, daily support, and personalized care plans.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/acquired-brain-injury",
  },
};

export default function AcquiredBrainInjuryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}