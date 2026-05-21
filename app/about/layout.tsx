import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn more about Medicare Link — a UK-based healthcare and home care service provider delivering compassionate care, staffing solutions, cleaning support, and personalized assistance to individuals and families across the UK.",

  keywords: [
    "About Medicare Link",
    "Medicare Link Team",
    "Healthcare Services UK",
    "Home Care Agency UK",
    "Caregivers UK",
    "Elderly Care Support",
    "Healthcare Staffing UK",
    "Cleaning Support Services",
    "Personal Care Services",
    "Compassionate Care UK",
  ],

  openGraph: {
    title: "About Medicare Link | Trusted Healthcare & Home Care Services",
    description:
      "Discover Medicare Link’s mission, values, and dedicated care team. We provide professional healthcare, home care, staffing, and cleaning support services across the UK.",
    url: "https://www.medicarelink.co.uk/about",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "About Medicare Link Healthcare Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Medicare Link | Healthcare & Home Care Services UK",
    description:
      "Meet the team behind Medicare Link — delivering compassionate healthcare, home care, and staffing solutions across the UK.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical: "https://www.medicarelink.co.uk/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}