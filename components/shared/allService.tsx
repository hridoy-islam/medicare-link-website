import { Home, DoorClosed, PartyPopper, Sparkles, Sofa, Move, Calendar, Flower2, Briefcase, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import router from "next/router";
import Image from "next/image";
import { Button } from "../ui/button";

export default function AllService(){

    const router = useRouter();
 const cleaningServices = [
  {
    id: "domestic-cleaning",
    icon: Home,
    title: "DOMESTIC CLEANING SERVICE",
    description: "Regular domestic cleaning to keep your home spotless and organized.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    color: "from-blue-500 to-blue-600",
    link: "/services/domestic-cleaning-service",
  },
  {
    id: "end-of-tenancy",
    icon: DoorClosed,
    title: "END OF TENANCY CLEANING",
    description: "Thorough cleaning to meet landlord and agency standards for deposit return.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    color: "from-purple-500 to-purple-600",
    link: "/services/end-of-tenancy-cleaning",
  },
  {
    id: "event-party",
    icon: PartyPopper,
    title: "EVENT/PARTY CLEANING",
    description: "Pre and post-event cleaning so you can focus on enjoying your occasion.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    color: "from-pink-500 to-pink-600",
    link: "/services/event-party-cleaning",
  },
  {
    id: "home-maid",
    icon: Sparkles,
    title: "HOME MAID SERVICE",
    description: "Professional home making services for a perfectly maintained household.",
    image: "https://images.unsplash.com/photo-1758273705723-26ef454252ce?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-teal-500 to-teal-600",
    link: "/services/home-maid-service",
  },
  {
    id: "housekeeping",
    icon: Sofa,
    title: "HOUSEKEEPING SERVICE",
    description: "Daily or weekly housekeeping to keep your home running smoothly.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&h=300&fit=crop",
    color: "from-green-500 to-green-600",
    link: "/services/housekeeping-service",
  },
  {
    id: "moving-cleaning",
    icon: Move,
    title: "MOVING IN/MOVE OUT CLEANING",
    description: "Deep cleaning for properties when moving in or out.",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=300&fit=crop",
    color: "from-orange-500 to-orange-600",
    link: "/services/move-in-move-out-cleaning",
  },
  {
    id: "one-off-cleaning",
    icon: Calendar,
    title: "ONE OFF CLEANING SERVICE",
    description: "Single deep clean for special occasions or seasonal refresh.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
    color: "from-red-500 to-red-600",
    link: "/services/one-off-cleaning-service",
  },
  {
    id: "spring-cleaning",
    icon: Flower2,
    title: "SPRING CLEANING SERVICE",
    description: "Comprehensive seasonal deep clean to refresh your entire home.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
    color: "from-emerald-500 to-emerald-600",
    link: "/services/spring-cleaning",
  },
  {
    id: "office-cleaning",
    icon: Briefcase,
    title: "OFFICE CLEANING SERVICE",
    description: "Professional cleaning for commercial and office spaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    color: "from-indigo-500 to-indigo-600",
    link: "/services/office-cleaning-service",
  },
  {
    id: "weekly-cleaning",
    icon: Clock,
    title: "WEEKLY CLEANING SERVICE",
    description: "Regular weekly cleaning to maintain a consistently clean home.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
    color: "from-cyan-500 to-cyan-600",
    link: "/services/weekly-cleaning",
  },
];


 const handleLearnMore = (serviceId: string, serviceLink: string) => {

      router.push(`${serviceLink}`);
    
  };

    return (
        <div className="bg-slate-50 py-20 lg:py-28 rounded-3xl my-12">
          <div className="container mx-auto ">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ALL SERVICES
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive care solutions tailored to your unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleaningServices.map((service, index) => (
                <div
  key={service.id}
  className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
>
  {/* Image Section */}
  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
  </div>

  {/* Title & Icon Section */}
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
  
  {/* Content Section */}
  <div className="p-6 flex flex-col flex-grow">
    <p className="text-slate-600 leading-relaxed text-base mb-6">
      {service.description}
    </p>
    <div className="mt-auto">
      <Button 
        onClick={(e) => {
          e.stopPropagation();
          handleLearnMore(service.id, service.link);
        }} 
        className="items-center gap-2 font-semibold transition-all duration-300"
      >
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
    )
}