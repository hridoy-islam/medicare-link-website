import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Healthcare Staffing Service | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides professional healthcare staffing services across the UK, offering fully trained and vetted caregivers, nurses, and support workers to hospitals, care homes, and private healthcare settings.",

  keywords: [
    "Healthcare Staffing Service UK",
    "Care Staff Agency UK",
    "Nursing Staffing UK",
    "Caregivers Recruitment UK",
    "Temporary Healthcare Staff UK",
    "Qualified Healthcare Workers",
    "Care Home Staffing Solutions",
    "Hospital Staffing Agency UK",
    "Home Care Staff Supply",
    "Medicare Link Staffing Service",
  ],

  openGraph: {
    title: "Healthcare Staffing Service | Medicare Link UK",
    description:
      "Reliable healthcare staffing services from Medicare Link — providing qualified caregivers, nurses, and support workers across the UK.",
    url: "https://www.medicarelink.co.uk/services/healthcare-staffing-service",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Staffing Service UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthcare Staffing Service | Medicare Link UK",
    description:
      "Trusted staffing solutions for healthcare providers across the UK — nurses, caregivers, and support workers.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/healthcare-staffing-service",
  },
};

export default function HealthcareStaffingServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}