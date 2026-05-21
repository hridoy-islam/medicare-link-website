"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/utils/utils";
import { siteConfig } from "@/utils/site-data";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cleaningServices = [
    {
      label: "One Off Cleaning Service",
      href: "/services/one-off-cleaning-service",
    },
    {
      label: "Weekly Cleaning",
      href: "/services/weekly-cleaning",
    },
    {
      label: "Spring Cleaning",
      href: "/services/spring-cleaning",
    },
    {
      label: "Office Cleaning Service",
      href: "/services/office-cleaning-service",
    },
    {
      label: "Move In Move Out Cleaning",
      href: "/services/move-in-move-out-cleaning",
    },
    {
      label: "House Keeping Service",
      href: "/services/housekeeping-service",
    },
    {
      label: "Home Maid Service",
      href: "/services/home-maid-service",
    },
    {
      label: "Event Party Cleaning",
      href: "/services/event-party-cleaning",
    },
    {
      label: "End of Tenancy Cleaning",
      href: "/services/end-of-tenancy-cleaning",
    },
    {
      label: "Domestic Cleaning Service",
      href: "/services/domestic-cleaning-service",
    },
    {
      label: "Cleaning Support",
      href: "/services/cleaning-support",
    },
  ];

  const careServices = [
    {
      label: "Healthcare Service",
      href: "/services/healthcare-service",
    },
    {
      label: "Healthcare Staffing Service",
      href: "/services/healthcare-staffing-service",
    },
    {
      label: "Healthcare Staffing",
      href: "/services/healthcare-staffing",
    },
    {
      label: "Respite Care",
      href: "/services/respite-care",
    },
    {
      label: "Residential Care",
      href: "/services/residential-care",
    },
    {
      label: "Palliative & End of Life Care",
      href: "/services/palliative-care",
    },
    {
      label: "Mental Health Care",
      href: "/services/mental-health-care",
    },
    {
      label: "Live In Care",
      href: "/services/live-in-care",
    },
    {
      label: "Disability Support",
      href: "/services/learning-disability-care",
    },
    {
      label: "Elderly Care",
      href: "/services/elderly-care",
    },
    {
      label: "Domiciliary Care",
      href: "/services/domiciliary-care",
    },
    {
      label: "Companionship and Support",
      href: "/services/companionship-and-support",
    },
    {
      label: "Alzheimer's & Dementia Care",
      href: "/services/alzheimers-dementia-care",
    },
    {
      label: "Acquired Brain Injury",
      href: "/services/acquired-brain-injury",
    },
  ];

  const handleServiceClick = () => {
    setServicesOpen(false);
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <header
        className={cn(
          "w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 transition-all duration-300",
          scrolled ? "py-2 shadow-xs" : "py-4",
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center justify-end">
            <Link href="/" className="relative block">
              <div
                className={cn(
                  "relative transition-all duration-300",
                  scrolled
                    ? "h-10 w-40 md:h-12 md:w-44"
                    : "h-12 w-44 md:h-14 md:w-52",
                )}
              >
                <Image
                  src="/medicare-link.webp"
                  alt="Medicare Link Logo"
                  fill
                  priority
                  className="object-contain object-right scale-150"
                />
              </div>
            </Link>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="font-semibold text-md   tracking-[1.5px]  text-slate-800 hover:text-primary transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-semibold text-md   tracking-[1.5px]  text-slate-800 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/join-medicare-link"
              className="font-semibold  tracking-[1.5px] text-md text-slate-800 hover:text-primary transition-colors"
            >
              Join Medicare Link
            </Link>

            {/* SERVICES DROPDOWN - SEPARATED INTO CLEANING & CARE */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 font-semibold  tracking-[1.5px] text-md text-slate-800 hover:text-primary transition-colors"
              >
                Services
                <ChevronDown size={16} />
              </Link>

              {servicesOpen && (
                <div className="absolute right-2 top-full pt-3">
                  <div className="w-[48rem] rounded-xl border border-slate-100 bg-white shadow-xl grid grid-cols-2 gap-6 p-6">
                    {/* Cleaning Services Column */}
                    <div>
                      <h3 className="text-md font-bold  tracking-[2px] text-primary mb-4 px-1">
                        Cleaning Services
                      </h3>
                      <div className="flex flex-col gap-0.5">
                        {cleaningServices.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={handleServiceClick}
                            className="block px-3 py-2 text-md font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors rounded-md"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Care Services Column */}
                    <div>
                      <h3 className="text-md font-bold  tracking-[2px] text-primary mb-4 px-1">
                        Care Services
                      </h3>
                      <div className="flex flex-col gap-0.5">
                        {careServices.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={handleServiceClick}
                            className="block px-3 py-2 text-md font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors rounded-md"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="font-semibold  tracking-[1.5px] text-md text-slate-800 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
       {isOpen && (
          <div className="lg:hidden mt-4 border-t border-slate-100 bg-white  min-h-[calc(100vh-50px)] max-h-[calc(100vh-90px)] overflow-y-auto overscroll-contain">
            <div className="flex flex-col px-6 py-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="py-3 font-semibold text-slate-800 border-b border-slate-100"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="py-3 font-semibold text-slate-800 border-b border-slate-100"
              >
                About Us
              </Link>

              {/* MOBILE SERVICES */}
              <div className="border-b border-slate-100">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-3 font-semibold text-slate-800"
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={cn(
                      "transition-transform duration-300",
                      mobileServicesOpen && "rotate-180",
                    )}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pb-3 pl-4 flex flex-col gap-3">
                    <Link
                      href="/services"
                      onClick={() => {
                        setIsOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="text-sm text-slate-600 hover:text-primary transition-colors font-medium"
                    >
                      All Services
                    </Link>

                    {/* Mobile Cleaning Services */}
                    <div className="mt-2">
                      <h3 className="text-xs font-bold  tracking-[2px] text-primary mb-2">
                        Cleaning Services
                      </h3>
                      {cleaningServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block py-1.5 text-sm text-slate-600 hover:text-primary transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Care Services */}
                    <div className="mt-2">
                      <h3 className="text-xs font-bold  tracking-[2px] text-primary mb-2">
                        Care Services
                      </h3>
                      {careServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block py-1.5 text-sm text-slate-600 hover:text-primary transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="py-3 font-semibold text-slate-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}