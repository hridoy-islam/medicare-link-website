import type { Metadata } from "next";

export const metadata: Metadata = {
  // Leverages the template "%s | Elizabeth Court Rest Home" from root layout
  title: "Useful Links",

  description:
    "Access important regulatory resources, local health guidelines, and social care support links provided by Elizabeth Court Rest Home (ECRH) in Bexhill Old Town.",

  keywords: [
    "Care Resources Bexhill",
    "Elizabeth Court Rest Home Links",
    "CQC Compliance Resources East Sussex",
    "East Sussex County Council Social Care",
    "Registered Care Association Resources",
    "Dementia Support Links UK",
    "Elderly Care Guidance Bexhill-on-Sea",
    "Healthcare Professional Portals",
  ],

  openGraph: {
    title: "Useful Links & Resources | Elizabeth Court Rest Home",
    description:
      "A curated directory of trusted social care authorities, regulatory bodies, and local health services partners for our residents and their families.",
    url: "https://ecrh.co.uk/useful-links",
    siteName: "Elizabeth Court Rest Home",
    images: [
      {
        url: "/home/12.jpg",
        width: 1200,
        height: 630,
        alt: "Useful Resources - Elizabeth Court Rest Home",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Useful Links & Resources | Elizabeth Court Rest Home",
    description:
      "Find official links to local authorities, dementia support netorks, and healthcare partners working alongside ECRH.",
    images: ["/home/12.jpg"],
  },

  alternates: {
    canonical: "https://ecrh.co.uk/useful-links",
  },
};

export default function UsefulLinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}