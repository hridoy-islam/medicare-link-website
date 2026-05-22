import { Brush, Stethoscope, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function OurService() {
    const router = useRouter()
    const services = [
    {
      icon: Brush,
      title: "CLEANING SUPPORT",
      description: "We offer a full range of professional cleaning, using top-quality cleaning materials and products, for advice and support.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      imageAlt: "Professional cleaning service",
      link: "/services/cleaning-support"
    },
    {
      icon: Stethoscope,
      title: "HEALTHCARE SERVICE",
      description: "Our comprehensive approach includes services such as health checks, wellness programs, and tailored healthcare plans.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      imageAlt: "Compassionate healthcare service",
      link: "/services/healthcare-service"
    },
    {
      icon: Briefcase,
      title: "HEALTHCARE STAFFING",
      description: "We continue to provide our care staff with the best possible working conditions.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop",
      imageAlt: "Professional healthcare staffing",
      link: "/services/healthcare-staffing"
    }
  ];

  return (
    <div>
      <div className="container mx-auto py-20 lg:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive care and cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="bg-primary/10 px-6 py-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:bg-primary/90 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Button onClick={() => router.push(service.link)} className="items-center gap-2 font-semibold transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}