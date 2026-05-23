"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Info,
  Check,
  ChevronRight,
  ChevronLeft,
  Quote,
  Facebook,
  Calendar,
  Star,
  Users,
  Heart,
  Play,
} from "lucide-react";

// GSAP Motion Suite
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    author: "Anonymous",
    role: "Staff",
    testimonial:
      "Hard working, dedicated, approachable team who listen to concerns and follow these up.",
  },
  {
    id: 2,
    author: "Marcus K",
    role: "Relative of resident",
    testimonial:
      "We wish to express our thanks and appreciation to you and all the staff at Elizabeth Court for the care and kindness and responsibility that you have all shown towards our loved one and to us, her family. We have to express our admiration for the way that Elizabeth Court's staff and management have supported, cared for, protected and embraced their residents, keeping them safe and clear through the darkness of the pandemic. We wish to express appreciation for your professionalism and hard work in interpreting and applying the various rules and regulations at the same time as working hard to find ways for friends and families to remain in communication with their loved ones. This has not been easy and has required a lot of understanding. Thank you for your communications which have certainly helped in understanding what and why things have to happen. She has always been so well cared for in all the years she has been with you. The team at Elizabeth Court have always been friendly and welcoming.",
  },
  {
    id: 3,
    author: "Corrine C",
    role: "Relative of resident",
    testimonial:
      "Having sadly lost contact with my aunt prior to her passing, it was a great comfort and relief to speak to the care home manager. He knew my aunt very well and had obviously had a special relationship with her. He talked at length with me about her time here and the lengths he and his colleagues had gone to, to make my aunt's time here, the best it could possibly be. The way in which he and his colleagues care for and try to cater to their resident's individual needs became obvious and is admirable. Nothing has been too much trouble, he has been in constant touch with me and played a huge part in arrangements for my aunt's funeral service. He wrote a wonderful and personalised eulogy for her and he and his colleagues attended the service. It has been a great comfort to know that my aunt could not have been in a better place or more well-cared-for. Thank you to the manager and his colleagues for providing such empathetic and respectful care to those in need of it.",
  },
  {
    id: 4,
    author: "Visiting Activity Provider",
    role: "Visiting Activity Provider",
    testimonial:
      "You are a fantastic home providing a true home to the residents. A joy to visit and the staff are so supportive plus the dogs and cats add true value to the care given. I would recommend you to family and friends. The attitude towards a varied and full activity programme is excellent and the management are really knowledgeable and professional. Pleasure to visit on a Friday afternoon. 😊",
  },
  {
    id: 5,
    author: "Relative of resident / GP",
    role: "Relative of resident / GP",
    testimonial:
      "Absolutely excellent care home, as a GP myself I see plenty and this place was perfect for my Nan. She had her happiest last years here so grateful I found it in time. Thanks all xx",
  },
  {
    id: 6,
    author: "Anonymous feedback from survey, Relative",
    role: "Relative",
    testimonial:
      "Elizabeth Court provides excellent care services based on industry recognised frameworks and best practices. This, combined with a team of kind, caring and compassionate care givers has resulted in excellent care for the evolving needs of my mother. Elizabeth Court's ability to provide residential through to end of life care means makes it perfect fit for our needs. Huge thanks must go to the whole team for all that they do.",
  },
  {
    id: 7,
    author: "Anonymous feedback form survey",
    role: "HCP",
    testimonial:
      "Residents always seem content and well cared for, a friendly atmosphere with polite staff & management. As a visiting professional I have never had course for concern with Elizabeth Court. They follow our plan of care as best they can dependant on the resident.",
  },
  {
    id: 8,
    author: "Log My Care",
    role: "Log My Care",
    testimonial:
      "Reece and the whole team at Elizabeth Court have been wonderful to visit and have helped us to continue to improve the Log my Care system with their feedback.",
  },
  {
    id: 9,
    author: "Anonymous feedback from survey",
    role: "Staff member",
    testimonial:
      "Reece has been fantastic at keeping up with all of the current guidelines and keeping us staff (as well as residents and relatives) well informed about what is expected of us and what our next actions are moving forward every step of the way. The service has ensured that we have never been short on PPE and has gone above and beyond to make sure that the staff and residents have felt, and have remained, as safe as possible. Could not have handled this crisis any better.",
  },
  {
    id: 10,
    author: "Lorraine T",
    role: "Relative of resident",
    testimonial:
      "You are all amazing everyone of you xxx",
  },
  {
    id: 11,
    author: "Mandi M",
    role: "Visiting chiropodist",
    testimonial:
      "I regularly visit Elizabeth court rest home to provide routine foot care for those who live there. Every time I arrive I instantly get a warm reception and feel a calm happy environment. Staff work hard yet always appear kind and caring which has a knock on affect with residents appearing happy and content. Residents always look well cared for which is lovely to see and even the small things a resident asking to have her nails painted and staff planning their day to where they can fit this in. Definitely a home I would be happy to have one of my family live. Well done for your excellent work everybody x",
  },
  {
    id: 12,
    author: "Anonymous",
    role: "Relative",
    testimonial:
      "I don't think I'd change a thing. I love the ethos and environment of ECRH. Exactly what all care homes should aspire towards.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const testimonialCardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Gallery slider engine
  const totalImages = 15;
  const [currentIndex, setCurrentIndex] = useState(1);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  // Testimonial machine state
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  // Hero image hover states
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // ==================== HERO SECTION ANIMATIONS ====================
  useGSAP(
    () => {
      // Master Timeline for orchestrated animations
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // 1. Background elements
      tl.from(".hero-bg-gradient", {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power4.out",
      });

      tl.from(
        ".hero-grid-bg",
        {
          opacity: 0,
          duration: 1.2,
        },
        "-=1",
      );

      // 2. Badge entrance with bounce
      tl.from(
        ".hero-badge",
        {
          y: -30,
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      );

      // 3. Typography reveals
      tl.from(
        ".hero-title-word",
        {
          y: 80,
          opacity: 0,
          rotationX: -90,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.4",
      );

      // 4. Description fade up
      tl.from(
        ".hero-description",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.3",
      );

      // 5. CTA buttons with stagger
      tl.from(
        ".hero-cta",
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.4)",
        },
        "-=0.5",
      );

      // 6. Main hero image
      tl.from(
        ".hero-image-main",
        {
          scale: 1.3,
          opacity: 0,
          rotation: -3,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.8",
      );

      // 7. Secondary images staggered
      tl.from(
        ".hero-image-secondary",
        {
          scale: 0.7,
          opacity: 0,
          y: 60,
          duration: 0.9,
          stagger: 0.2,
          ease: "back.out(1.2)",
        },
        "-=0.6",
      );

      // 8. Floating stat cards
      tl.from(
        ".hero-stat-card",
        {
          x: 80,
          opacity: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5",
      );

      // 9. Decorative circles
      tl.from(
        ".hero-decorative-circle",
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.8",
      );

      // Continuous floating animations for images
      gsap.to(".hero-float-slow", {
        y: -12,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".hero-float-medium", {
        y: -8,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.3,
      });

      gsap.to(".hero-float-fast", {
        y: -6,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.6,
      });

      // Decorative element rotation
      gsap.to(".hero-rotate-slow", {
        rotation: 360,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      // Background pattern parallax
      gsap.to(".hero-pattern", {
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: heroRef },
  );

  // ==================== OTHER SECTIONS ANIMATIONS ====================
  useGSAP(
    () => {
      // Standalone ScrollTrigger Modules Reveal Loop
      gsap.utils.toArray(".scroll-section").forEach((section: any) => {
        gsap.from(section.querySelectorAll(".fade-up-element"), {
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          y: 45,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef },
  );

  const animateSlideChange = (newIndex: number) => {
    if (!imageWrapperRef.current) return;

    gsap.to(imageWrapperRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.to(imageWrapperRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: "power2.out",
        });
      },
    });
  };

  const nextSlide = () => {
    const nextIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
    animateSlideChange(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 1 ? totalImages : currentIndex - 1;
    animateSlideChange(prevIndex);
  };

  const jumpToSlide = (index: number) => {
    if (index === currentIndex) return;
    animateSlideChange(index);
  };

  // Gallery loop cycle
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Testimonial system cycle
  useEffect(() => {
    if (isTestimonialPaused) return;
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [testimonialIndex, isTestimonialPaused]);

  // Testimonial micro animation frame
  useEffect(() => {
    if (testimonialCardRef.current) {
      gsap.fromTo(
        testimonialCardRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      );
    }
  }, [testimonialIndex]);
const [fbScale, setFbScale] = useState<number>(1);
const fbContainerRef = useRef<HTMLDivElement>(null);

React.useEffect(() => {
  const update = () => {
    if (fbContainerRef.current) {
      const containerWidth = fbContainerRef.current.offsetWidth;
      const scale = Math.min(1, containerWidth / 500);
      setFbScale(scale);
    }
  };
  
  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);

  return (
    <SmoothScroll>
      <main
        ref={containerRef}
        className="flex flex-col min-h-screen bg-white text-black antialiased selection:bg-primary selection:text-white overflow-hidden max-sm:pt-8"
      >
        {/* ================= MODERN HERO SECTION WITH 4 IMAGES ================= */}
        <section
          ref={heroRef}
          className="relative bg-gradient-to-br from-primary/55 via-white to-primary/20  flex items-center bg-white overflow-hidden"
        >
                    <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.1]" />

          {/* Animated Background Pattern */}
          <div className="hero-pattern absolute inset-0 opacity-[0.03]">
            <div
              className="hero-grid-bg absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Decorative Gradient Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="hero-bg-gradient absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-full blur-3xl" />
            <div className="hero-bg-gradient absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-primary/5 to-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-transparent rounded-full blur-3xl opacity-50" />
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="hero-decorative-circle hero-float-slow absolute top-20 right-[15%] w-20 h-20 border-2 border-primary/10 rounded-full" />
            <div className="hero-decorative-circle hero-float-medium absolute bottom-32 left-[10%] w-28 h-28 border border-primary/5 rounded-full" />
            <div className="hero-decorative-circle hero-float-fast absolute top-1/3 left-[5%] w-10 h-10 bg-primary/5 rounded-full" />
            <div className="hero-rotate-slow absolute top-[15%] right-[8%] w-40 h-40 border border-dashed border-primary/10 rounded-full" />

            {/* Geometric Pattern */}
            <div className="absolute bottom-20 right-20 opacity-[0.02]">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 border border-slate-900 rounded-sm"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto  relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center  ">
              {/* Left Column: Content */}
              <div className="space-y-8">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  <div className="overflow-hidden">
                    <span className="hero-title-word block">Welcome to</span>
                  </div>
                  <div className="overflow-hidden pb-1">
                    <span className="hero-title-word block text-primary relative pb-1">
                      Elizabeth Court
                      <svg
                        className="absolute -bottom-2 left-0 w-full h-4 text-primary pb-1"
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 6 Q 50 12, 100 6 T 170 6"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="hero-title-word block">Rest Home</span>
                  </div>
                </h1>

                {/* Description */}
                <p className="hero-description text-lg text-black leading-relaxed max-w-lg">
                  Providing an exceptionally warm, secure, and luxury-filled
                  residential setting tailored around individual dignity. We
                  look after your loved ones like family.
                </p>

                {/* CTA Buttons */}
                <div className="hero-cta flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={() => router.push("about")}
                    size="lg"
                    className="group relative px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-none text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      About Us
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </div>

              {/* Right Column: Multi-Image Layout */}
              <div className="relative h-[600px] lg:h-[700px]">
                {/* Main Large Image */}
                <div
                  className="hero-image-main absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 group"
                  onMouseEnter={() => setHoveredImage(1)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src="/hero.jpg"
                    alt="Premium living space environment at Elizabeth Court"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Border decoration */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-xl pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-xl pointer-events-none" />
                </div>

                {/* Top Right Secondary Image */}
                <div
                  className="hero-image-secondary hero-float-slow absolute top-8 right-0 w-[45%] h-[35%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white group"
                  onMouseEnter={() => setHoveredImage(2)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src="/home/1.jpg"
                    alt="High-standard private rooms"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Bottom Left Secondary Image */}
                <div
                  className="hero-image-secondary hero-float-medium absolute bottom-12 left-0 w-[40%] h-[30%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white group"
                  onMouseEnter={() => setHoveredImage(3)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src="/home/12.jpg"
                    alt="Compassionate healthcare assistants"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Bottom Right Secondary Image */}
                <div
                  className="hero-image-secondary hero-float-fast absolute bottom-0 right-8 w-[35%] h-[25%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white group"
                  onMouseEnter={() => setHoveredImage(4)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src="/home/4.jpg"
                    alt="Engaging community activities"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Decorative Elements */}
                <div className="hero-decorative-circle absolute top-1/2 right-0 w-16 h-16 border-2 border-primary/20 rounded-full -z-10" />
                <div className="hero-decorative-circle absolute bottom-1/4 left-0 w-12 h-12 bg-primary/5 rounded-full -z-10" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
        </section>

        {/* ================= CQC TRUST PANEL / REGULATORY REPORT SECTION ================= */}
        <section className="scroll-section py-28 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Interactive CQC Metric Board */}
              <div className="lg:col-span-5 desert-panel fade-up-element order-2 lg:order-1">
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl relative group transition-all duration-300 hover:shadow-2xl">
                  <div className="absolute top-0 bottom-0 left-0 w-2 bg-primary rounded-l-3xl" />

                  <div className="bg-slate-50/70 rounded-2xl border border-slate-100 p-6 space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-200/60 pb-4">
                      <div className="font-bold text-[11px] tracking-widest uppercase text-slate-400">
                        Care Quality Commission Status
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div>
                      <h4 className="font-bold text-xl text-slate-900 tracking-tight">
                        Elizabeth Court Rest Home
                      </h4>
                      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                        National Location ID: 1-212206395
                      </p>
                    </div>

                    <div className="space-y-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Overall Rating
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-sm shadow-emerald-500/15">
                          <Check className="w-3 h-3 stroke-[4]" /> Good
                        </span>
                      </div>

                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[85%]" />
                      </div>
                    </div>

                    <div className="text-[11px] text-black font-medium pt-2 flex justify-between items-center">
                      <span>Last Inspected: 8 April 2020</span>
                      <span className="font-bold text-primary uppercase bg-primary/5 px-2.5 py-0.5 rounded-md">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-2 text-center">
                    <a
                      href="https://www.cqc.org.uk/location/1-212206395?referer=widget3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-bold uppercase tracking-widest transition-colors group/link"
                    >
                      See full official verification report
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Description Copy Block */}
              <div className="lg:col-span-7 space-y-6 fade-up-element order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Our elders are the most{" "}
                  <span className="text-primary relative inline-block">
                    precious members
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-primary"
                      viewBox="0 0 200 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10, 100 5 T 200 5"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>{" "}
                  of our community.
                </h2>
                <p className="text-black text-lg leading-relaxed font-medium">
                  We have structured our responsive portal layout so your vital
                  questions regarding residential placement rules are
                  systematically answered. Whether reviewing solutions for
                  yourself or navigating care options for a beloved member of
                  your family, our care leaders are permanently standing by to
                  guide you through the process.
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => router.push("contact")}
                    size="lg"
                    className="rounded-xl px-6 py-6 shadow-md shadow-primary/5"
                  >
                    Connect With Us Directly{" "}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ULTRA-MODERN VISUAL GALLERY SECTION ================= */}
        <section className="scroll-section py-28 bg-white">
          <div className="container mx-auto ">
            {/* Main 3-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
              {/* Column 1: Meaningful Context Narrative */}
              <div className="space-y-6 fade-up-element">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] block">
                  Inside Our Facility
                </span>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                  A glimpse into <br className="hidden xl:block" />
                  <span className="text-primary relative inline-block">
                    daily life
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-primary"
                      viewBox="0 0 200 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10, 100 5 T 200 5"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </h2>
                <p className="text-black font-medium text-base leading-relaxed">
                  At Elizabeth Court Rest Home, we maintain a sanctuary where
                  elegant layout comforts meet professional, compassionate
                  attention. Every environment is intentionally shaped to feel
                  like a true family home, fostering peace of mind for both
                  residents and their loved ones.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start fade-up-element">
                <div className="lg:col-span-8 relative aspect-[16/10] bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-50 group">
                  <div
                    ref={imageWrapperRef}
                    className="relative w-full h-full transform transition-all duration-300"
                  >
                    <Image
                      src={`/home/${currentIndex}.jpg`}
                      alt={`Life snapshot at Elizabeth Court Care Home - Photo ${currentIndex}`}
                      fill
                      priority
                      className="object-cover transition-transform duration-1000 group-hover:scale-103"
                    />
                    {/* Glassmorphic Layer Footer Info */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STANDALONE COMMUNITY UPDATES SECTION ================= */}
        <section className="relative py-24 md:py-32 bg-gray-100 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f1f5f9_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

          <div className="container mx-auto relative z-10">
            {/* Header */}
            <div className="text-center max-w-5xl mx-auto mb-20 fade-up-element">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                <span className="w-8 h-px bg-primary/30" />
                Social Pulse
                <span className="w-8 h-px bg-primary/30" />
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Live Community{" "}
                <span className="relative text-primary">
                  News & Updates
                  <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-primary"
                      viewBox="0 0 200 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10, 100 5 T 200 5"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                      />
                    </svg>
                </span>
              </h2>
              <p className="text-lg text-black leading-relaxed max-w-5xl mx-auto font-medium">
                Stay synchronously informed regarding weekly seasonal updates,
                community recreation setups, and collaborative gatherings hosted
                by our management team.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 fade-up-element">
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-6">
                {/* Visit Card */}
                <div className="group bg-white rounded-3xl p-8 md:p-10 border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-500 relative overflow-hidden">
                  {/* Background Decor */}
                  <div className="absolute -right-16 -top-16 w-72 h-72 bg-primary/[0.02] rounded-full blur-3xl" />
                  <div className="absolute right-20 bottom-0 w-1 h-32 bg-gradient-to-b from-primary/20 to-transparent" />

                  <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-50 border border-slate-200/50 rounded-full">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold text-black uppercase tracking-wider">
                            Visit Our Home
                          </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                          Experience Elizabeth Court{" "}
                          <span className="text-primary inline-block">
                            First Hand
                          </span>
                        </h3>

                        <p className="text-black leading-relaxed text-base md:text-lg max-w-xl">
                          We warmly invite you and your family to visit our
                          beautiful rest home. Walk through our comfortable
                          living spaces, meet our dedicated care team, and
                          experience the warm, family atmosphere that makes
                          Elizabeth Court truly special.
                        </p>
                      </div>

                      <Button onClick={() => router.push("contact")}>
                        Contact Us
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>

                    {/* Decorative Element */}
                    <div className="hidden md:block shrink-0">
                      <div className="relative">
                        <div className="w-44 h-44 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2.5rem] border border-slate-200/50 flex items-center justify-center shadow-inner">
                          <div className="text-center">
                            <Calendar className="w-14 h-14 text-primary mx-auto mb-3 opacity-80" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                              Book a Visit
                            </span>
                          </div>
                        </div>
                        {/* Floating dots */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary/10 rounded-full animate-pulse" />
                        <div className="absolute -bottom-4 -left-2 w-3 h-3 bg-primary/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Card */}
                  <a
                    href="tel:01424215555"
                    className="group bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <svg
                          className="w-5 h-5 text-black group-hover:text-white transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          Call Us
                        </h4>
                        <p className="text-sm text-slate-500 mb-2">
                          Speak with our friendly team
                        </p>
                        <span className="text-lg font-bold text-primary">
                          01424 215555
                        </span>
                      </div>
                    </div>
                  </a>

                  {/* Email Card */}
                  <a
                    href="mailto:info@elizabethcourt.co.uk"
                    className="group bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <svg
                          className="w-5 h-5 text-black group-hover:text-white transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          Email Us
                        </h4>
                        <p className="text-sm text-slate-500 mb-2">
                          We'll respond promptly
                        </p>
                        <span className="text-base font-bold text-primary">
                          info@elizabethcourt.co.uk
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column - Facebook Feed */}
              <div className="lg:col-span-4">
                <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm h-full flex flex-col">
                  {/* Feed Header */}
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center">
                          <Facebook className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-slate-900">
                            Community Feed
                          </h4>
                          <span className="text-xs text-slate-500">
                            @ECRHBexhill
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-full">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-emerald-700">
                          Live
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feed Content */}
                  <div className="flex-1 relative min-h-[500px] overflow-hidden">
  <iframe
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FECRHBexhill&tabs=timeline&width=430&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false"
    width="100%"
    height="600"
    className="w-full block"
    style={{ border: "none", minHeight: "500px" }}
    scrolling="no"
    allowFullScreen={true}
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    title="Elizabeth Court Facebook Feed"
  />
  {/* Gradient Overlay */}
  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
</div>

                  {/* Feed Footer */}
                  <div className="p-5 border-t border-slate-100">
                    <a
                      href="https://www.facebook.com/ECRHBexhill"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 w-full py-3 px-5 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 transition-all duration-200"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>View Full Page</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section
          className="scroll-section py-28 bg-white border-t border-slate-100"
          onMouseEnter={() => setIsTestimonialPaused(true)}
          onMouseLeave={() => setIsTestimonialPaused(false)}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 space-y-2 fade-up-element">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] block">
                Verified Reviews
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                What families{" "}
                <span className="text-primary relative inline-block">
                  say about us
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10, 100 5 T 200 5"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto relative min-h-[380px] md:min-h-[280px] flex items-center">
              {/* Dynamic Animated Core View Frame */}
              <div
                ref={testimonialCardRef}
                className="w-full bg-[#fafafa] border border-black/10 p-8 md:p-12 border-l-4 border-l-primary relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-8 w-16 h-16 text-black opacity-[0.02] rotate-12 pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between min-h-[180px]">
                  <p className="text-black/80 text-base md:text-lg leading-loose italic mb-8 font-medium">
                    "{testimonials[testimonialIndex].testimonial}"
                  </p>

                  <div className="flex justify-between items-end border-t border-black/5 pt-4">
                    <div>
                      <h4 className="font-black text-black text-base uppercase tracking-tight">
                        {testimonials[testimonialIndex].author}
                      </h4>
                      <span className="text-xs text-primary font-bold uppercase tracking-widest">
                        {testimonials[testimonialIndex].role}
                      </span>
                    </div>

                    {/* Tick Layout Progress Tracking Nodes */}
                    <div className="hidden md:flex gap-1.5">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setTestimonialIndex(i)}
                          className={`h-1.5 transition-all duration-300 rounded-none ${
                            testimonialIndex === i
                              ? "w-6 bg-primary"
                              : "w-2 bg-black/10 hover:bg-black/30"
                          }`}
                          aria-label={`Show review snapshot profile card ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= GOOGLE MAPS SECTION ================= */}
        <div className="scroll-section w-full bg-white relative fade-up-element">
          <div className="">
            <div className="w-full h-[460px] bg-slate-900 relative overflow-hidden shadow-xl  grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.3245!2d0.731!3d50.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU3JzAwLjAiTiAwwrA0Myc1MS42IkU!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Official Elizabeth Court Location Map Verification Frame"
                className="opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          <div className="bg-slate-950 text-white border-t-4 border-primary py-7">
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-center gap-4 text-center sm:text-left sm:justify-start">
              <Info className="w-5 h-5 text-primary shrink-0" />
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium tracking-wide">
                <strong className="text-white font-semibold">
                  Route Notice:
                </strong>{" "}
                Certain map application pins calculate directions with a slight
                coordinate shift. We are mapped directly on{" "}
                <strong className="text-primary font-bold">
                  Hastings Road
                </strong>{" "}
                on the southern edge of King Offa Way, looking across at
                Greenbank.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
