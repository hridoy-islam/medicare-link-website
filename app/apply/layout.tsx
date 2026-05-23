import type { Metadata } from "next";

export const metadata: Metadata = {
  // Leverages the template "%s | Elizabeth Court Rest Home" from root layout
  title: "Join Our Team",

  description:
    "Explore career opportunities at Elizabeth Court Rest Home (ECRH) in Bexhill Old Town. Apply for social care vacancies, support worker roles, and nursing assistant positions in East Sussex.",

  keywords: [
    "Care Home Jobs Bexhill",
    "Apply Elizabeth Court Rest Home",
    "Social Care Vacancies East Sussex",
    "Support Worker Jobs Bexhill-on-Sea",
    "Care Assistant Training NVQ",
    "Healthcare Careers Bexhill Old Town",
    "Join ECRH Care Team",
    "Residential Care Employment",
  ],

  openGraph: {
    title: "Careers & Job Applications | Elizabeth Court Rest Home",
    description:
      "Advance your career in social care. Apply today to join our dedicated, highly trained care team at Elizabeth Court Rest Home in Bexhill Old Town.",
    url: "https://ecrh.co.uk/apply",
    siteName: "Elizabeth Court Rest Home",
    images: [
      {
        url: "/home/12.jpg", // Default structural asset for sharing previews
        width: 1200,
        height: 630,
        alt: "Careers at Elizabeth Court Rest Home",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers | Elizabeth Court Rest Home",
    description:
      "We invest heavily in our staff with professional NVQ pathways. Apply today to join our care team in Bexhill-on-Sea.",
    images: ["/home/12.jpg"],
  },

  alternates: {
    canonical: "https://ecrh.co.uk/apply",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}