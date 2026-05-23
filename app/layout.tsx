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
  metadataBase: new URL("https://ecrh.co.uk/"),

  // Dynamic Title Configuration
  title: {
    default: "Elizabeth Court Rest Home | Residential Care Bexhill-on-Sea",
    template: "%s | Elizabeth Court Rest Home",
  },

  // Global Site Description (Optimized for CTR on Search Engines)
  description:
    "Elizabeth Court Rest Home (ECRH) provides compassionate, person-centred residential and dementia care in a historic 16th-century building in Bexhill Old Town, East Sussex. Discover our homely environment and expert care teams.",

  // High-intent global search keywords
  keywords: [
    "Elizabeth Court Rest Home",
    "ECRH",
    "Residential Care Bexhill-on-Sea",
    "Care Homes Bexhill Old Town",
    "Dementia Care East Sussex",
    "Elderly Residential Care UK",
    "Dementia-friendly Care Home",
    "Senior Assisted Living Bexhill",
    "Local Authority Preferred Care Provider",
  ],

  authors: [{ name: "Elizabeth Court Rest Home Team" }],
  creator: "Elizabeth Court Rest Home",
  publisher: "Elizabeth Court Rest Home",

  // Global Search Engine Crawler Rules
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

  // App Icon Configurations (Placed inside your /public directory)
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

  // Link to your PWA/Web App Manifest
  manifest: "/site.webmanifest",

  // Global OpenGraph (Social Sharing Link Preview Config)
  openGraph: {
    title: "Elizabeth Court Rest Home | Trusted Residential Care in East Sussex",
    description:
      "Compassionate, person-centred residential and dementia care provided within a homely, historic environment in Bexhill Old Town.",
    url: "https://ecrh.co.uk/",
    siteName: "Elizabeth Court Rest Home",
    images: [
      {
        url: "/home/12.jpg", 
        width: 1200,
        height: 630,
        alt: "Elizabeth Court Rest Home Exterior",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // Global Twitter/X Card Layout Config
  twitter: {
    card: "summary_large_image",
    title: "Elizabeth Court Rest Home | Residential & Dementia Care",
    description:
      "Providing expert care and a vibrant community in a dementia-friendly environment in Bexhill-on-Sea.",
    images: ["/home/12.jpg"],
  },

  // Prevents self-referential or duplicate content penalty flags
  alternates: {
    canonical: "https://ecrh.co.uk/",
  },

  category: "Healthcare & Residential Care",
  applicationName: "Elizabeth Court Rest Home",
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