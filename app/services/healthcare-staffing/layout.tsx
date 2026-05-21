import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Healthcare Staffing | Medicare Link | Healthcare & Home Care Services UK",

  description:
    "Medicare Link provides reliable healthcare staffing services across the UK, supplying trained, compassionate, and qualified caregivers and healthcare professionals to support hospitals, care homes, and private clients.",

  keywords: [
    "Healthcare Staffing UK",
    "Care Staff Agency UK",
    "Nursing Staff Recruitment UK",
    "Caregivers Staffing Services",
    "Healthcare Professionals UK",
    "Temporary Care Staff UK",
    "Home Care Staffing Agency",
    "Qualified Healthcare Workers UK",
    "Care Home Staffing Support",
    "Medicare Link Staffing Services",
  ],

  openGraph: {
    title: "Healthcare Staffing Services | Medicare Link UK",
    description:
      "Professional healthcare staffing solutions from Medicare Link — providing qualified caregivers and healthcare professionals across the UK.",
    url: "https://www.medicarelink.co.uk/services/healthcare-staffing",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Staffing Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthcare Staffing | Medicare Link UK",
    description:
      "Trusted healthcare staffing services across the UK for care homes, hospitals, and private healthcare needs.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical:
      "https://www.medicarelink.co.uk/services/healthcare-staffing",
  },
};

export default function HealthcareStaffingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}