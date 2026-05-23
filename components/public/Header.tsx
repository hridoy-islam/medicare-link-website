"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About & Services", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Apply", href: "/apply" },
  { label: "Useful Links", href: "/useful-links" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  
  // Element Refs for GSAP
  const headerRef = React.useRef<HTMLElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const logoRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const mobileItemsRef = React.useRef<HTMLDivElement>(null);

  // 1. Scroll-triggered Header Morph (Fixed Shake)
  React.useEffect(() => {
    const header = headerRef.current;
    const container = containerRef.current;
    const logo = logoRef.current;
    if (!header || !container || !logo) return;

    const ctx = gsap.context(() => {
      // Pinning the animation purely to the window scroll offset rather than the 'body' height
      gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top+=10 top", 
          end: "top+=11 top",
          // toggleActions removes 'scrub' lag which causes the shaking
          toggleActions: "play none none reverse", 
        },
      })
      .to(header, {
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        borderBottomColor: "rgba(226, 232, 240, 0.8)",
        duration: 0.25,
        ease: "power2.out"
      }, 0)
      .to(container, {
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        duration: 0.25,
        ease: "power2.out"
      }, 0)
      .to(logo, {
        scale: 0.92,
        duration: 0.25,
        ease: "power2.out"
      }, 0);
    });

    return () => ctx.revert();
  }, []);

  // 2. Mobile Menu Animation
  React.useEffect(() => {
    const menu = mobileMenuRef.current;
    const itemsContainer = mobileItemsRef.current;
    if (!menu || !itemsContainer) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.killTweensOf([menu, itemsContainer.children]);
      
      gsap.timeline()
        .to(menu, {
          height: "calc(100vh - 100%)",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        })
        .fromTo(
          itemsContainer.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, ease: "power2.out" },
          "-=0.25"
        );
    } else {
      document.body.style.overflow = "unset";
      gsap.killTweensOf([menu, itemsContainer.children]);
      
      gsap.timeline()
        .to(itemsContainer.children, {
          opacity: 0,
          y: -10,
          duration: 0.15,
          stagger: 0.02,
        })
        .to(menu, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
        }, "-=0.1");
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const line = e.currentTarget.querySelector(".nav-line");
    if (line) gsap.to(line, { width: "100%", left: "0%", duration: 0.25, ease: "power2.out" });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>, isActive: boolean) => {
    if (isActive) return;
    const line = e.currentTarget.querySelector(".nav-line");
    if (line) gsap.to(line, { width: "0%", left: "50%", duration: 0.25, ease: "power2.in" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full forward-render">
      <header
        ref={headerRef}
        className="w-full bg-white border-b border-slate-200 will-change-transform !shadow-sm"
      >
        <div
          ref={containerRef}
          className="container mx-auto py-5 flex items-center justify-between transition-[padding] duration-75"
        >
          {/* BRAND LOGO */}
          <div ref={logoRef} className="flex items-center origin-left will-change-transform">
            <Link href="/" className="relative block group">
              <div className="relative h-10 w-40 md:h-16 md:w-64 transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                  src="/logo.png"
                  alt="ELIZABETH COURT REST HOME Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={(e) => handleMouseLeave(e, isActive)}
                  className={cn(
                    "relative px-4 py-2 font-bold text-md tracking-[2px]  transition-colors duration-200",
                    isActive ? "text-primary" : "text-slate-600 hover:text-primary"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* GSAP Managed Micro-line Indicator */}
                  <span 
                    className="nav-line absolute bottom-0 h-[2px] bg-primary transition-all"
                    style={{
                      width: isActive ? "100%" : "0%",
                      left: isActive ? "0%" : "50%",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-none transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* FULL-WIDTH GSAP ANIMATED MOBILE OVERLAY PANEL */}
      <div
        ref={mobileMenuRef}
        className="absolute top-full left-0 w-full bg-white backdrop-blur-2xl border-b border-slate-200 shadow-2xl overflow-hidden opacity-0"
        style={{ height: 0 }}
      >
        <div ref={mobileItemsRef} className="container mx-auto  py-10 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="w-full">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-4 font-bold text-sm tracking-[2px]  transition-all duration-200 border-l-2",
                    isActive 
                      ? "bg-primary/10 text-primary border-primary" 
                      : "text-slate-700 border-transparent hover:text-primary hover:bg-slate-50/50"
                  )}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}