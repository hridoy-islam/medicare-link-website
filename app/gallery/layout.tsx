import type { Metadata } from "next";

export const metadata: Metadata = {
  // Leverages the template "%s | Elizabeth Court Rest Home" from root layout
  title: "Our Gallery",

  description:
    "Explore our photo gallery to see inside Elizabeth Court Rest Home (ECRH) in Bexhill Old Town. View our dementia-friendly interactive spaces, single rooms, large garden lounge, and communal living facilities.",

  keywords: [
    "Elizabeth Court Rest Home Gallery",
    "Photos of ECRH Bexhill",
    "Care Home Premises East Sussex",
    "Dementia Friendly Building Design",
    "Bexhill Old Town Care Home Tour",
    "Residential Care Home Interiors",
    "Dementia Signage and Corridors",
    "Care Home Garden Facilities",
  ],

  openGraph: {
    title: "Our Gallery | Elizabeth Court Rest Home",
    description:
      "Take a look inside Elizabeth Court Rest Home in Bexhill Old Town. View photos of our homely environment, interactive front-door bedrooms, and beautiful communal gardens.",
    url: "https://ecrh.co.uk/gallery",
    siteName: "Elizabeth Court Rest Home",
    images: [
      {
        url: "/home/1.jpg", // Ideal placeholder image to represent the gallery view
        width: 1200,
        height: 630,
        alt: "Elizabeth Court Rest Home Premises and Gardens",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Gallery | Elizabeth Court Rest Home",
    description:
      "Take a virtual visual tour of our historic 16th-century dementia-friendly care home in Bexhill-on-Sea.",
    images: ["/home/1.jpg"],
  },

  alternates: {
    canonical: "https://ecrh.co.uk/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}