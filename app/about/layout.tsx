import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Discover the history, ethos, and care teams behind Elizabeth Court Rest Home (ECRH) in Bexhill Old Town. Providing specialized dementia-friendly residential care and person-centred support in East Sussex.",

  keywords: [
    "About Elizabeth Court Rest Home",
    "ECRH Care Team",
    "Residential Care History Bexhill",
    "Dementia Specialism East Sussex",
    "Bexhill Old Town Care Home",
    "Person-Centred Care Ethos",
    "Registered Care Association Board Member",
    "East Sussex County Council Care",
  ],

  openGraph: {
    title: "About Us | Elizabeth Court Rest Home",
    description:
      "Meet the team, explore our 16th-century dementia-friendly premises, and discover our core ethos of person-centred residential care in Bexhill Old Town.",
    url: "https://ecrh.co.uk/about",
    siteName: "Elizabeth Court Rest Home",
    images: [
      {
        url: "/home/1.jpg",
        width: 1200,
        height: 630,
        alt: "About Elizabeth Court Rest Home - Historic Building in Bexhill",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Elizabeth Court Rest Home",
    description:
      "Discover our specialized, dementia-friendly home environment and dedicated care teams in Bexhill-on-Sea.",
    images: ["/home/1.jpg"],
  },

  alternates: {
    canonical: "https://ecrh.co.uk/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}