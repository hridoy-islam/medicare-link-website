"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: number;
  src: string;
  aspect: "portrait" | "landscape" | "square";
}

// Streamlined array strictly containing ID, Source, and Aspect Ratio parameters
const GALLERY_DATA: GalleryItem[] = [
  { id: 1, src: "/home/1.jpg", aspect: "portrait" },
  { id: 2, src: "/home/2.jpg", aspect: "square" },
  { id: 3, src: "/home/3.jpg", aspect: "landscape" },
  { id: 4, src: "/home/4.jpg", aspect: "portrait" },
  { id: 5, src: "/home/5.jpg", aspect: "square" },
  { id: 6, src: "/home/6.jpg", aspect: "landscape" },
  { id: 7, src: "/home/7.jpg", aspect: "portrait" },
  { id: 8, src: "/home/8.jpg", aspect: "square" },
  { id: 9, src: "/home/9.jpg", aspect: "landscape" },
  { id: 10, src: "/home/10.jpg", aspect: "portrait" },
  { id: 11, src: "/home/11.jpg", aspect: "square" },
  { id: 12, src: "/home/12.jpg", aspect: "landscape" },
  { id: 13, src: "/home/13.jpg", aspect: "portrait" },
  { id: 14, src: "/home/14.jpg", aspect: "square" },
  { id: 15, src: "/home/15.jpg", aspect: "landscape" },
  { id: 16, src: "/home/16.jpg", aspect: "portrait" },
  { id: 17, src: "/home/17.jpg", aspect: "portrait" },
  { id: 18, src: "/home/18.jpg", aspect: "square" },
  { id: 19, src: "/home/19.jpg", aspect: "portrait" },
  { id: 20, src: "/home/20.jpg", aspect: "square" },
  { id: 21, src: "/home/21.jpg", aspect: "landscape" },
  { id: 22, src: "/home/22.jpg", aspect: "portrait" },
  { id: 23, src: "/home/23.jpg", aspect: "square" },
  { id: 24, src: "/home/24.jpg", aspect: "landscape" },
  { id: 25, src: "/home/25.jpg", aspect: "portrait" },
  { id: 26, src: "/home/26.jpg", aspect: "square" },
  { id: 27, src: "/home/27.jpg", aspect: "landscape" },
  { id: 28, src: "/home/28.jpg", aspect: "portrait" },
  { id: 29, src: "/home/29.jpg", aspect: "square" },
  { id: 30, src: "/home/30.jpg", aspect: "landscape" },
];

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".parallax-img");
      images.forEach((img: any) => {
        gsap.to(img, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    if (direction === "prev") {
      setLightboxIndex((prev) => (prev! === 0 ? GALLERY_DATA.length - 1 : prev! - 1));
    } else {
      setLightboxIndex((prev) => (prev! === GALLERY_DATA.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <SmoothScroll>
      <div ref={containerRef} className="bg-white text-zinc-800 min-h-screen font-sans overflow-hidden">
        <Hero title="Our Gallery" subtitle="A visual window into our modern spaces and daily life." />

        {/* ─── DYNAMIC ASPECT MASONRY STREAM ─── */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full">
            {GALLERY_DATA.map((item, index) => {
              // Map aspect metadata configuration directly onto modern responsive layouts
              const aspectHeights = {
                portrait: "h-[460px] md:h-[560px]",
                landscape: "h-[260px] md:h-[320px]",
                square: "h-[320px] md:h-[400px]",
              };

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className={`break-inside-avoid relative w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-zinc-100 bg-zinc-50 group cursor-pointer ${aspectHeights[item.aspect]}`}
                >
                  <div className="parallax-img absolute inset-0 w-full h-[116%] -top-[8%] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <Image
                      src={item.src}
                      alt={`Gallery asset ${item.id}`}
                      fill
                      className="object-cover object-center transition-all duration-500"
                      sizes="(max-w: 640px) 100vw, (max-w: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/25 transition-colors duration-300" />
                  </div>

                  {/* Operational Hover Interaction Module */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="h-5 w-5 text-black" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── SYSTEM MODAL: INTERACTIVE LIGHTBOX ─── */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between items-center p-4 md:p-8 backdrop-blur-md">
            <div className="w-full flex justify-end items-center text-white z-10 border-b border-white/10 pb-4">
              {/* <p className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
                Image Frame {lightboxIndex + 1} / {GALLERY_DATA.length}
              </p> */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative w-full max-w-5xl h-[70vh] flex justify-center items-center my-auto">
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-2 md:left-4 z-20 p-3 bg-black/40 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={GALLERY_DATA[lightboxIndex].src}
                  alt={`Enlarged frame view ${GALLERY_DATA[lightboxIndex].id}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-2 md:right-4 z-20 p-3 bg-black/40 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="w-full h-4" />
          </div>
        )}
      </div>
    </SmoothScroll>
  );
}