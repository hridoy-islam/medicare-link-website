import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Get in touch with Medicare Link — a UK-based healthcare and home care service provider. Contact us for home care support, healthcare staffing, cleaning services, and personalized care solutions tailored to your needs.",

  keywords: [
    "Contact Medicare Link",
    "Healthcare Contact UK",
    "Home Care Support Contact",
    "Care Agency UK Contact",
    "Healthcare Staffing Contact",
    "Elderly Care Help UK",
    "Home Care Services Inquiry",
    "Cleaning Support Contact UK",
    "Caregivers Support UK",
    "Medicare Link Contact Details",
  ],

  openGraph: {
    title: "Contact Medicare Link | Healthcare & Home Care Support UK",
    description:
      "Reach out to Medicare Link for professional healthcare, home care, staffing, and cleaning support services across the UK. We’re here to help you 24/7 with compassionate care solutions.",
    url: "https://www.medicarelink.co.uk/contact",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Contact Medicare Link Healthcare Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Medicare Link | Healthcare & Home Care Services UK",
    description:
      "Contact Medicare Link for trusted healthcare, home care, staffing, and cleaning support services across the UK.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical: "https://www.medicarelink.co.uk/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}