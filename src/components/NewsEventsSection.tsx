import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {newsEvents.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge 
                          variant={getBadgeVariant(item.badge) as any}
                          className="shadow-md"
                        >
                          {item.badge}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.time}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors text-lg">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0 flex-1 flex flex-col">
                      <CardDescription className="mb-4 line-clamp-3 flex-1">
                        {item.description}
                      </CardDescription>
                      
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-auto"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          </Carousel>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All News & Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;