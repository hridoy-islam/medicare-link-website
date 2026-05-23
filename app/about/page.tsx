"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { Award, ArrowRight, Home, Users, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const title = "About Us";
  const subtitle = "Who we are, what we do and how we do it.";
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".reveal-section");
      
      sections.forEach((section: any) => {
        const textElements = section.querySelectorAll(".animate-text");
        const imageWrapper = section.querySelector(".image-wrapper");
        const innerImg = section.querySelector(".parallax-img");

        // Premium staggered text entrance animation
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );

        // Elegant scale and clip reveal for image containers
        if (imageWrapper) {
          gsap.fromTo(
            imageWrapper,
            { clipPath: "inset(100% 0% 0% 0%)", scale: 1.05, opacity: 0 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              opacity: 1,
              duration: 1.4,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Ultra-smooth parallax system
      const images = gsap.utils.toArray(".parallax-img");
      images.forEach((img: any) => {
        gsap.to(img, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <div ref={containerRef} className="bg-white text-black min-h-screen font-sans overflow-hidden antialiased selection:bg-black selection:text-white">
        {/* Modern Hero Header */}
        <Hero title={title} subtitle={subtitle} />

        {/* ─── SECTION 1: THE BUILDING (Text Left, Image Right) ─── */}
        <section className="reveal-section container mx-auto px-6 py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center border-b border-zinc-100">
          <div className="lg:col-span-7 space-y-6">
            <div className="animate-text flex items-center gap-3 text-primary font-bold uppercase tracking-[0.25em] text-[10px]">
              <Home className="w-3.5 h-3.5 text-primary" /> Core Care & Facilities
            </div>
            <h2 className="animate-text text-4xl md:text-5xl font-black tracking-tight text-black leading-none">
              The building
            </h2>
            <div className="animate-text text-black space-y-5 font-normal text-base md:text-lg leading-relaxed">
              <p>
                ECRH is a 16th Century building in the heart of Bexhill Old Town, offering residential care to those who need it with a strong core team of staff who are well trained, experienced, and supported to offer compassionate, person-centred care in a homely environment. ECRH are experienced in caring for older adults with and without dementia or other mental health difficulties, learning disabilities and/ or physical health conditions.
              </p>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">
                We offer 24 single rooms, 3 of which are ensuite, with social, communal living spaces such as our large lounge with a garden view, our café style dining room, a large and accessible garden with the inclusion of animals who an important part of our lives every day. The home environment has been developed to encourage a dementia-friendly space with corridors redesigned with street names and colourful wall, bedroom doors redesigned as ‘front doors’, and dementia friendly signage to assist with wayfinding and orientation. We have a keen focus on activities for all with a wide range of varied activities offered to individuals and groups to meet all levels of abilities and needs.
              </p>
            </div>
          </div>
          <div className="image-wrapper lg:col-span-5 relative h-[520px] lg:h-[620px] w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-50 border border-zinc-100/80">
            <div className="parallax-img absolute inset-0 w-full h-[124%] -top-[12%]">
              <Image
                src="/home/12.jpg" 
                alt="Elizabeth Court Rest Home Building Exterior"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                sizes="(max-w: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: WORKING TOGETHER (Image Left, Text Right) ─── */}
        <section className="reveal-section py-28 lg:py-36 bg-zinc-50 border-b border-zinc-100">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="image-wrapper lg:col-span-5 order-last lg:order-first relative h-[520px] lg:h-[620px] w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-50 border border-zinc-100/80">
              <div className="parallax-img absolute inset-0 w-full h-[124%] -top-[12%]">
                <Image
                  src="/home/4.jpg" 
                  alt="Working Together and Collaborative Integration"
                  fill
                  className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                  sizes="(max-w: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="animate-text flex items-center gap-3 text-primary font-bold uppercase tracking-[0.25em] text-[10px]">
                <Users className="w-3.5 h-3.5 text-primary" /> Integration & Compliance
              </div>
              <h2 className="animate-text text-4xl md:text-5xl font-black tracking-tight text-black leading-none">
                Working together
              </h2>
              <div className="animate-text text-black space-y-4 font-normal text-sm md:text-base leading-relaxed">
                <p>
                  The COVID pandemic has seen lots of changes in the way we work across the health and social care sector and ECRH have adapted and embraced the changes for the benefit of our residents and our staff moving forward.
                </p>
                <p>
                  ECRH have worked closely with our local authority, East Sussex County Council, for many years, being granted ‘preferred provider’ status. We work closely with local services such as the GP practice, district nursing teams, nominated pharmacy and a variety of other allied healthcare professionals and services to ensure our residents get timely access to the appropriate services when they need it.
                </p>
                <p>
                  We work hard to engage with our regulators, the Care quality Commission (CQC), to keep a regular, open channel of communication. This involves our statutory duties (compliance, regulation, notifications) as well as promoting a familiarity with our designated inspector by simply keeping in touch. We value working together.
                </p>
                <p>
                  ECRH is a member of the Registered Care Association for East Sussex, Brighton and Hove (RCA) and the manager has a place on the Board. The RCA work closely with authorities and other agencies to give the local social care sector a voice. The RCA supports its’ members with updates, resources and support and being a board member means ECRH is always at the forefront.
                </p>
                <p>
                  We include our residents, their families and friends, and our staff in the development of our service. We constantly seek and listen to feedback from all stakeholders to ensure we can appropriately critique ourselves, learn from mistakes, improve our service and make life better for all in an open and honest way.
                </p>
                <p>
                  The Registered Manager has undertaken a Masters Degree in Dementia Studies to further develop skills and knowledge of dementia in the interests of contributing to the future of care services and supporting staff with best practice, advocating innovation, creativity and confidence in caring for people living with dementia.
                </p>
                <p>
                  The Nominated Individual for the service has had a career in nursing and holds a nursing qualification, and actively works in the home offering her experience, knowledge and skills to the care teams to support the delivery of care.
                </p>
                <blockquote className="animate-text border-l-4  pl-6 my-8 text-black italic font-medium text-base md:text-lg bg-white p-6 rounded-r-xl shadow-sm border border-zinc-100/80">
                  "We value working together in the interests of improvement, not only in service delivery and quality but also in building meaningful, lasting and personal relationships."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: OUR ETHOS (Text Left, Image Right) ─── */}
        <section className="reveal-section container mx-auto px-6 py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center border-b border-zinc-100">
          <div className="lg:col-span-7 space-y-6">
            <div className="animate-text flex items-center gap-3 text-primary font-bold uppercase tracking-[0.25em] text-[10px]">
              <Heart className="w-3.5 h-3.5 text-primary" /> Philosophy of Care
            </div>
            <h2 className="animate-text text-4xl md:text-5xl font-black tracking-tight text-black leading-none">
              Our ethos
            </h2>
            <div className="animate-text text-black space-y-4 font-normal text-base leading-relaxed">
              <p>
                Person-centred care is at the heart of our ethos. We seek to learn about our residents’ life stories and personal histories to ensure we can develop a more meaningful and trusting relationship. We recognise each resident for their individuality and personal ‘quirks’ (we all have them!) and we strongly believe a person-centred approach is key to providing appropriate care and support, whether dementia is experienced or not. We are all individuals with our own story to tell and it’s important that we retain our sense of self and a sense of independence with our lives no matter who or where we are.
              </p>
              <h4 className="animate-text text-lg font-bold text-zinc-950 pt-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> We want to get to know you
              </h4>
              <p>
                We have always been supporters of activities and occupation for our residents and we offer extensive activity programs in-house which was prioritized with the impact of the pandemic seeing external providers stopped from entering care homes. This was an extremely sad and difficult time as we had grown close to our visiting activity professionals but as we move forward into the new normal, we hope to see some of our firm favourites return to provide even more social opportunities and activities.
              </p>
              <p>
                We believe that our staff are our greatest asset and we invest heavily in their learning to ensure that they have the skills to meet residents’ assessed needs. Staff work towards improving skills and knowledge, working with East Sussex College group to provide NVQ’s from level 2 up to level 5 where job progression opportunities offer it, and all care home staff completing comprehensive training across many domains to ensure widespread knowledge and skills among all departments. We have teams covering the care delivery, housekeeping, laundry, catering and management of the home and feedback from all is crucial to constantly improving our service.
              </p>
              <p className="text-zinc-500 text-xs font-light">
                Feedback from our residents, their families and friends are always listened to and it is our belief that their views are crucial to the running of service in the interests of those who use it. Testimonials can be seen across our website.
              </p>
            </div>
          </div>
          <div className="image-wrapper lg:col-span-5 relative h-[520px] lg:h-[620px] w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-50 border border-zinc-100/80">
            <div className="parallax-img absolute inset-0 w-full h-[124%] -top-[12%]">
              <Image
                src="/home/27.jpg" 
                alt="Person-centered Care and Activities"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                sizes="(max-w: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: THE MUM TEST (Image Left, Premium Callout Right) ─── */}
        <section className="reveal-section py-28 lg:py-36 bg-zinc-950 text-white relative">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <div className="image-wrapper lg:col-span-5 order-last lg:order-first relative h-[480px] lg:h-[580px] w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-black">
              <div className="parallax-img absolute inset-0 w-full h-[124%] -top-[12%]">
                <Image
                  src="/home/26.jpg" 
                  alt="Elizabeth Court Rest Home Family Trust and Care Quality"
                  fill
                  className="object-cover object-center opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  sizes="(max-w: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="animate-text inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black text-primary shadow-xl border border-black">
                <Award className="h-6 w-6" />
              </div>
              
              <div className="space-y-3">
                <div className="animate-text flex items-center gap-3 text-primary font-bold uppercase tracking-[0.25em] text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Quality Benchmark
                </div>
                <h2 className="animate-text text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
                  The Mum test – <span className="text-primary font-extrabold">Passed!</span>
                </h2>
              </div>

              <p className="animate-text text-zinc-300 font-light text-lg md:text-xl leading-relaxed">
                The “Mum test” has been passed multiple times with several members of the care home team seeing the home fit for their own loved ones over the years. This trust in our service has brought the core team members together and enabled an honest and open culture.
              </p>
              
              <div className="animate-text text-xs md:text-sm font-bold text-zinc-500  tracking-[0.2em] border-t border-black pt-8">
                We treat our workplace as <span className="text-white font-black">their home</span> and not their home as our workplace.
              </div>

              <div className="animate-text pt-4">
                <Link 
                  href="/contact" 
                >
                  <Button>Contact Us </Button>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5 text-zinc-950" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>
    </SmoothScroll>
  );
}