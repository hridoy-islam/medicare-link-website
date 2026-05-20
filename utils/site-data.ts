import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const siteConfig = {
  name: "Medicare Link ",
  description: "Medicare Link provides compassionate healthcare, home care, cleaning support, and healthcare staffing services across the UK. Our fully qualified caregivers deliver personalized, professional, and empathetic care tailored to every client’s needs.",
  address: "65 Cranbrook Road,Ilford, London, IG1 4PG, United Kingdom",
  phone: "02030111145",
  email: "info@medicarelink.co.uk",
  
  navItems: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" }, // Changed to match your folder /about-us
    { label: "Services", href: "/services" },
    { label: "Career", href: "/career" },   
    { label: "Contact Us", href: "/contact" },   
  ],
  
  links: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  
  socials: [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" }
  ],
  
  footerNav: [
    {
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact Us", href: "/contact" },
        { label: "Career", href: "/career" },
      ],
    },
    {
      title: "Top Services",
      items: [
        { label: "Web Designing", href: "/services" },
        { label: "Web Development", href: "/services" },
        { label: "Branding", href: "/services" },
        { label: "Digital Marketing", href: "/services" },
      ],
    },
  ],
};