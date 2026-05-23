import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Get in touch with the communications desk at Elizabeth Court Rest Home (ECRH) in Bexhill-on-Sea. Contact us for admissions, care consultations, administrative inquiries, or to arrange a home visit.",

  keywords: [
    "Contact Elizabeth Court Rest Home",
    "Elizabeth Court Bexhill Phone Number",
    "Care Home Admissions Bexhill",
    "Elizabeth Court Rest Home Address",
    "Bexhill Old Town Care Home Contact",
    "Dementia Care Enquiries East Sussex",
    "Schedule Care Home Visit Bexhill",
    "ECRH Administration Email",
  ],

  openGraph: {
    title: "Contact Us | Elizabeth Court Rest Home",
    description:
      "Reach out to our administrative hub in Bexhill Old Town for client placements, residential care consultations, and general care inquiries.",
    url: "https://ecrh.co.uk/contact",
    siteName: "Elizabeth Court Rest Home",
    images: [
      {
        url: "/home/1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Elizabeth Court Rest Home Communications Desk",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Elizabeth Court Rest Home",
    description:
      "Get in touch with our team for residential placement options, general enquiries, or location details in Bexhill-on-Sea.",
    images: ["/home/1.jpg"],
  },

  alternates: {
    canonical: "https://ecrh.co.uk/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}