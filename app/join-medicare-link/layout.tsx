import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Join Medicare Link | Healthcare & Home Care Careers UK",

  description:
    "Join Medicare Link and become part of a compassionate healthcare and home care team across the UK. We are hiring dedicated caregivers, support workers, and healthcare professionals who are passionate about making a difference in people’s lives.",

  keywords: [
    "Join Medicare Link",
    "Healthcare Jobs UK",
    "Caregiver Jobs UK",
    "Home Care Careers UK",
    "Support Worker Jobs UK",
    "Healthcare Recruitment UK",
    "Care Home Jobs UK",
    "Live In Carer Jobs UK",
    "Nursing Assistant Jobs UK",
    "Work in Care UK",
    "Medicare Link Careers",
  ],

  openGraph: {
    title: "Join Medicare Link | Healthcare Careers UK",
    description:
      "Start your career with Medicare Link — hiring compassionate caregivers and healthcare professionals across the UK.",
    url: "https://www.medicarelink.co.uk/join-medicare-link",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Join Medicare Link Careers UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Join Medicare Link | Healthcare Careers UK",
    description:
      "Apply now and join Medicare Link’s healthcare team across the UK.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical: "https://www.medicarelink.co.uk/join-medicare-link",
  },
};

export default function JoinMedicareLinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}