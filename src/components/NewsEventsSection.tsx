import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";

const NewsEventsSection = () => {
  const newsEvents = [
    {
      type: "Enrollment",
      title: "After A/L - Plan Your Future!",
      description: "Invest in education with our best courses including AMI Montessori Teaching, Child Psychology, Counselling & Psychology, IT Program, and English. Quality assured programs.",
      date: "2025-01-15",
      time: "9:00 AM",
      image: "/lovable-uploads/2.jpg",
      badge: "Enrollment"
    },
    {
      type: "Program",
      title: "Top Up Degree - 12 Months Only",
      description: "Complete your degree in just 12 months with our accelerated programs: BSc Psychology, Bachelors of Education, Business Administration, BSc IT/Computing, and BA in English.",
      date: "2025-01-10",
      time: "10:00 AM",
      image: "/lovable-uploads/12.jpg",
      badge: "Program"
    },
    {
      type: "Program",
      title: "HND (UK) Higher National Diploma",
      description: "Register now for HND programs in Early Childhood Education, Counselling & Psychology, Business Management, Teacher Training, and IT. Internationally recognized.",
      date: "2025-01-08",
      time: "2:00 PM",
      image: "/lovable-uploads/11.jpg",
      badge: "Program"
    },
    {
      type: "Career",
      title: "After O/L's Job Assured Courses",
      description: "IPA UK certificates with job assurance. Programs include Teacher Training, AMI Montessori Diploma, Counselling & Psychology, Business Management, Spoken English, Care Giver, and Computer Courses.",
      date: "2025-01-05",
      time: "11:00 AM",
      image: "/lovable-uploads/10.jpg",
      badge: "Career"
    },
    {
      type: "Program",
      title: "Diploma in Counselling & Psychology",
      description: "TVEC approved course with comprehensive training and certification. Register now for this professional development program.",
      date: "2025-01-03",
      time: "3:00 PM",
      image: "/lovable-uploads/8-2.jpg",
      badge: "Program"
    },
    {
      type: "Program",
      title: "BBA - Bachelor of Business Administration",
      description: "One year only program for young entrepreneurs, managers, merchandisers, and marketers. UGC approved with embassy acceptance and migration purpose validity.",
      date: "2025-01-01",
      time: "9:30 AM",
      image: "/lovable-uploads/7.jpg",
      badge: "Program"
    },
    {
      type: "Education",
      title: "Diploma in Montessori & Early Childhood Education",
      description: "TVEC approved course with AMI modules. Online & physical classes available. Suitable for teachers, pre-school teachers, school leavers, house wives, and daycare staff.",
      date: "2024-12-28",
      time: "10:30 AM",
      image: "/lovable-uploads/6.jpg",
      badge: "Education"
    },
    {
      type: "Education",
      title: "AMI Diploma in Early Childhood Education",
      description: "Professional qualification with main modules covering Modern Method of Montessori, Child Psychology, First Aid Training, Art & Craft, and EPL & Sensorial training.",
      date: "2024-12-25",
      time: "1:00 PM",
      image: "/lovable-uploads/5.jpg",
      badge: "Education"
    },
    {
      type: "Graduation",
      title: "Be A Graduate in Sri Lanka",
      description: "Work & Study programs for students with HND, SLIATE Diploma, NCOE qualifications. Final year entry available for Bachelor programs and Master's degrees.",
      date: "2024-12-22",
      time: "4:00 PM",
      image: "/lovable-uploads/4-2.jpg",
      badge: "Graduation"
    },
    {
      type: "Language",
      title: "Spoken English Course",
      description: "4-month duration course with online classes via Zoom. Improve your reading, writing, and speaking skills. International Professional Academy UK approved.",
      date: "2024-12-20",
      time: "6:00 PM",
      image: "/lovable-uploads/3.jpg",
      badge: "Language"
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Enrollment": return "cta";
      case "Program": return "trust";
      case "Career": return "success";
      case "Education": return "default";
      case "Graduation": return "cta";
      case "Language": return "trust";
      default: return "default";
    }
  };

  // Zoom modal state
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our latest developments, achievements, and upcoming opportunities
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {newsEvents.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden bg-muted/20 hover:shadow-elegant-lg transition-transform duration-300 hover:scale-[1.01]">
                    <button
                      type="button"
                      className="relative block w-full cursor-zoom-in"
                      onClick={() => { setActiveImage(item.image); setZoom(1); setOpen(true); }}
                      aria-label={`View poster: ${item.title}`}
                    >
                      <AspectRatio ratio={3/4} className="bg-background">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-contain"
                          draggable={false}
                        />
                      </AspectRatio>
                    </button>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-5xl bg-background p-0">
              <div className="absolute top-3 right-3 z-10 flex gap-2">
                <Button variant="secondary" size="icon" aria-label="Zoom in" onClick={() => setZoom(z => Math.min(3, z + 0.25))}>
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <Button variant="secondary" size="icon" aria-label="Zoom out" onClick={() => setZoom(z => Math.max(1, z - 0.25))}>
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <Button variant="secondary" size="icon" aria-label="Reset zoom" onClick={() => setZoom(1)}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
              <div className="w-full max-h-[85vh] overflow-auto bg-background">
                {activeImage && (
                  <img
                    src={activeImage}
                    alt="Poster enlarged"
                    className="block mx-auto max-w-none"
                    style={{ width: `${zoom * 100}%` }}
                    draggable={false}
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </section>
  );
};

export default NewsEventsSection;