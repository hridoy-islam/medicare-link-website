import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Healthcare Service | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional healthcare services across the UK, delivering compassionate, reliable, and personalized care support for individuals, families, and communities in need of medical and daily living assistance.",

  keywords: [
    "Healthcare Services UK",
    "Home Healthcare Support",
    "Professional Care Services UK",
    "Medical Care Assistance",
    "In Home Healthcare UK",
    "Caregivers UK",
    "Patient Care Services",
    "Personal Healthcare Support",
    "Trusted Healthcare Agency UK",
    "Medicare Link Healthcare Services",
  ],

  openGraph: {
    title: "Healthcare Services | Medicare Link UK",
    description:
      "Reliable and compassionate healthcare services from Medicare Link — delivering professional care, support, and assistance across the UK.",
    url: "https://www.medicarelink.co.uk/services/healthcare-service",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthcare Service | Medicare Link UK",
    description:
      "Professional healthcare services across the UK with compassionate and trained caregivers.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/healthcare-service",
  },
};

export default function HealthcareServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}