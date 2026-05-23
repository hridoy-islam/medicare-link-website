"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About & Services", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Apply", href: "/apply" },
    { label: "Useful Links", href: "/useful-links" },
    { label: "Contact Us", href: "/contact" },
  ];


  const contactInfo = {
    name: "Elizabeth Court Rest Home",
    description: "Elizabeth Court Rest Home provides compassionate residential care in a warm, welcoming environment. Our dedicated team ensures personalized care tailored to each resident's needs.",
    address: "4 Hastings Road, Bexhill-on-Sea, East Sussex, TN40 2HH",
    phone: "01424-219105",
    email: "info@elizabethcourtresthome.co.uk",
  };

  return (
    <footer className="relative bg-primary text-white pt-20 pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block relative h-28 w-72">
              <Image
                src="/logo.png"
                alt="Elizabeth Court Rest Home - Residential Care Services"
                fill
                className="object-contain object-left  transition-all duration-500"
                priority
              />
            </Link>
            <p className="text-white/80 text-[15px] leading-relaxed font-medium pr-4">
              {contactInfo.description}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-white/30">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
                  >
                    <ChevronRight size={14} className="text-white/50 group-hover:translate-x-1 group-hover:text-white transition-all" />
                    <span className="text-[15px] font-medium">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-white/30">
              Get In Touch
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 group">
                <div className="mt-1 w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:shadow-lg">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1 uppercase tracking-wider text-[11px] opacity-75">Location</p>
                  <span className="text-[14px] font-medium text-white/90 leading-relaxed">
                    {contactInfo.address}
                  </span>
                </div>
              </li>
              
              <li className="flex gap-4 group">
                <div className="mt-1 w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:shadow-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1 uppercase tracking-wider text-[11px] opacity-75">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-[14px] font-medium text-white/90 hover:text-white underline-offset-4 hover:underline transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              
              <li className="flex gap-4 group">
                <div className="mt-1 w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:shadow-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1 uppercase tracking-wider text-[11px] opacity-75">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-[14px] font-medium text-white/90 hover:text-white underline-offset-4 hover:underline transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left">
            <p className="text-sm text-white/70">
              &copy; Copyright 2004-{currentYear} - Elizabeth Court Rest Home Ltd
            </p>
            <p className="text-sm text-white/70">
              Elizabeth Court Rest Home Ltd. Company No 5550795.
            </p>
            <p className="text-sm text-white/70">
              Registered Office GMP Accountants, 24 Landgate, Rye, East Sussex TN31 7LJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}