"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { ExternalLink, ShieldCheck, FileText, Globe, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface LinkItem {
  id: number;
  title: string;
  url: string;
  category: "useful" | "covid";
  description: string;
  icon: any;
}

const LINKS_DATA: LinkItem[] = [
  // ─── GENERAL USEFUL LINKS ───
  {
    id: 1,
    title: "East Sussex County Council Website",
    url: "https://www.eastsussex.gov.uk/",
    category: "useful",
    description: "Official local authority gateway for regional public services, community updates, and local council announcements.",
    icon: Building2,
  },
  {
    id: 2,
    title: "Adult Social Care Advice and Support",
    url: "https://new.eastsussex.gov.uk/social-care/leaving-home/care-homes",
    category: "useful",
    description: "East Sussex portal providing advice on care assessments, funding options, and guidance on moving into residential homes.",
    icon: FileText,
  },
  {
    id: 3,
    title: "CQC Website",
    url: "https://www.cqc.org.uk/",
    category: "useful",
    description: "The official platform for the Care Quality Commission, the independent regulator of health and social care services in England.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "ECRH CQC Report",
    url: "https://www.cqc.org.uk/location/1-212206395",
    category: "useful",
    description: "Direct access to the official inspection profile, rating history, and compliance reports for Elizabeth Court Rest Home.",
    icon: FileText,
  },
  {
    id: 5,
    title: "East Sussex Brighton and Hove Registered Care Association (RCA)",
    url: "https://eastsussexrca.co.uk/",
    category: "useful",
    description: "The regional association supporting care providers with updates, modern training resources, and representing the local social care voice.",
    icon: Globe,
  },
  {
    id: 6,
    title: "Care Homes Search",
    url: "https://www.carehome.co.uk/",
    category: "useful",
    description: "A comprehensive UK directory platform outlining residential home configurations, care options, and public testimonials.",
    icon: Globe,
  },
  // ─── COVID GOVERNMENT GUIDANCE ───
  {
    id: 7,
    title: "How to Work Safely in Care Homes Guidance",
    url: "https://www.gov.uk/government/publications/covid-19-how-to-work-safely-in-care-homes",
    category: "covid",
    description: "Official UK government operational frameworks regarding infection control and safe care delivery principles.",
    icon: ShieldCheck,
  },
  {
    id: 8,
    title: "Care Home Visiting Guidance",
    url: "https://www.gov.uk/government/publications/visiting-care-homes-during-coronavirus/update-on-policies-for-visiting-arrangements-in-care-homes",
    category: "covid",
    description: "Statutory updates regarding safe family visiting arrangements, safety screening logs, and health standard compliance.",
    icon: FileText,
  },
  {
    id: 9,
    title: "Visits Out of the Care Home Guidance",
    url: "https://www.gov.uk/government/publications/arrangements-for-visiting-out-of-the-care-home/visits-out-of-care-homes",
    category: "covid",
    description: "Official risk assessment guidance and safety protocols for residents participating in external community activities.",
    icon: ExternalLink,
  },
  {
    id: 10,
    title: "Summary of Guidance for Visitors Into Care Homes",
    url: "https://www.gov.uk/government/publications/visiting-care-homes-during-coronavirus/summary-of-guidance-for-visitors--2",
    category: "covid",
    description: "A quick-reference summary explaining key requirements, entry prerequisites, and safety measures for home visitors.",
    icon: FileText,
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Links" },
  { id: "useful", label: "Portals & Associations" },
  { id: "covid", label: "Government Guidance" },
];

export default function UsefulLinksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredLinks = LINKS_DATA.filter(
    (link) => activeTab === "all" || link.category === activeTab
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth staggering card entry animation triggered on mount or filter change
      gsap.fromTo(
        ".link-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".links-grid",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <SmoothScroll>
      <div ref={containerRef} className="bg-white text-zinc-800 min-h-screen font-sans overflow-x-hidden">
        {/* Dynamic Shared Hero Header */}
        <Hero 
          title="Useful Links" 
          subtitle="Access trusted local resources, official healthcare regulatory bodies, and recent government health guidelines." 
          image="/home/7.jpg"
        />

        {/* ─── DYNAMIC NAVIGATION TABS ─── */}
        <section className="container mx-auto px-4 pt-12 pb-4">
          <div className="flex flex-wrap items-center justify-start gap-3 border-b border-zinc-100 pb-6">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md scale-[1.01]"
                    : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* ─── DYNAMIC INTERACTIVE LINKS GRID ─── */}
        <section className="container mx-auto px-4 pb-28 pt-6">
          <div className="links-grid grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {filteredLinks.map((item) => {
              const IconComponent = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card block group p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Floating Link Indicator (Highlights on hover) */}
                  <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300 text-zinc-400 group-hover:text-primary">
                    <ExternalLink className="h-4 w-4 transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-transform" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Dynamic Graphic Branding Icon Box */}
                    <div className="p-3 bg-white group-hover:bg-primary border border-zinc-100 rounded-xl shadow-xs text-zinc-700 group-hover:text-white transition-all duration-300 shrink-0 w-fit">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1.5 pr-4">
                      {/* Context Type Metadata Tag */}
                      <span className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                        item.category === "covid" 
                          ? "bg-red-50 text-red-600 border border-red-100" 
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}>
                        {item.category === "covid" ? "Gov Guidance" : "External Portal"}
                      </span>

                      {/* Document/Portal Title Heading - Fixed word break */}
                      <h3 className="text-base md:text-lg font-black tracking-tight text-zinc-900 group-hover:text-primary transition-colors duration-200 break-words hyphens-auto">
                        {item.title}
                      </h3>

                      {/* Clean Descriptive Context Block - Fixed text wrap */}
                      <p className="text-zinc-500 font-light text-xs md:text-sm leading-relaxed break-words">
                        {item.description}
                      </p>

                      {/* Clean Subtext URL String - Fixed for mobile */}
                      <p className="text-[11px] font-mono text-zinc-400 group-hover:text-primary/70 pt-2 break-all sm:break-words transition-colors duration-200">
                        {item.url}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </SmoothScroll>
  );
}