import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const NewsEventsSection = () => {
  const newsEvents = [
    {
      type: "Event",
      title: "Spring 2024 Intake Now Open",
      description: "Applications are now being accepted for our Spring 2024 programs. Early bird discounts available.",
      date: "2024-02-15",
      time: "9:00 AM",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
      badge: "Enrollment"
    },
    {
      type: "News",
      title: "New Partnership with Global University",
      description: "Amazon College announces new transfer pathways to prestigious international universities.",
      date: "2024-01-20",
      time: "10:00 AM",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      badge: "Partnership"
    },
    {
      type: "Achievement",
      title: "95% Graduate Employment Rate",
      description: "Our graduates continue to excel with industry-leading employment rates and career advancement.",
      date: "2024-01-10",
      time: "2:00 PM",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop",
      badge: "Success"
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Enrollment": return "cta";
      case "Partnership": return "trust";
      case "Success": return "success";
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsEvents.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
            >
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
                <CardTitle className="group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="mb-4 line-clamp-3">
                  {item.description}
                </CardDescription>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
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