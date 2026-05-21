import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",

  description:
    "Explore Medicare Link’s professional healthcare and home care services across the UK, including home care support, healthcare staffing, cleaning services, and personalized care solutions designed to meet every individual’s needs.",

  keywords: [
    "Medicare Link Services",
    "Healthcare Services UK",
    "Home Care Services",
    "Care Agency UK",
    "Healthcare Staffing Services",
    "Elderly Care Support",
    "Cleaning Support Services UK",
    "Personal Care Services",
    "Professional Caregivers UK",
    "Compassionate Care Services",
  ],

  openGraph: {
    title: "Our Services | Medicare Link Healthcare & Home Care UK",
    description:
      "Discover Medicare Link’s full range of healthcare, home care, staffing, and cleaning support services across the UK. Compassionate, professional, and reliable care tailored to your needs.",
    url: "https://www.medicarelink.co.uk/services",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.png",
        width: 1200,
        height: 630,
        alt: "Medicare Link Services Overview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | Medicare Link UK",
    description:
      "Explore healthcare, home care, staffing, and cleaning services provided by Medicare Link across the UK.",
    images: ["/medicare-link.png"],
  },

  alternates: {
    canonical: "https://www.medicarelink.co.uk/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}