import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";
import { Providers } from "@/app/providers";
import { Header } from "@/components/public/Header"; 
import { Footer } from "@/components/public/Footer";

// Font Configuration
const fontHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://www.medicarelink.co.uk"),

  title: {
    default: "Medicare Link | Healthcare & Home Care Services UK",
    template: "%s | Medicare Link | Healthcare & Home Care Services UK",
  },

  description:
    "Medicare Link provides compassionate healthcare, home care, cleaning support, and healthcare staffing services across the UK. Our fully qualified caregivers deliver personalized, professional, and empathetic care tailored to every client’s needs.",

  keywords: [
    "Medicare Link",
    "Healthcare Services UK",
    "Home Care Services",
    "Healthcare Staffing",
    "Cleaning Support Services",
    "Caregivers UK",
    "Personalized Care",
    "Healthcare Support",
    "Professional Care Services",
    "Elderly Care UK",
  ],

  authors: [{ name: "Medicare Link Team" }],
  creator: "Medicare Link",
  publisher: "Medicare Link",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Medicare Link | Trusted Healthcare & Home Care Services",
    description:
      "Professional healthcare, home care, cleaning support, and staffing solutions delivered with compassion and care throughout the UK.",
    url: "https://www.medicarelink.co.uk",
    siteName: "Medicare Link",
    images: [
      {
        url: "/medicare-link.webp",
        width: 1200,
        height: 630,
        alt: "Medicare Link Healthcare Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Medicare Link | Healthcare & Home Care Services",
    description:
      "Compassionate healthcare, home care, staffing, and cleaning support services tailored to your needs.",
    images: ["/medicare-link.webp"],
  },

  alternates: {
    canonical: "https://www.medicarelink.co.uk",
  },

  category: "healthcare",
  applicationName: "Medicare Link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased flex flex-col",
          fontHeading.variable,
          fontSans.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}