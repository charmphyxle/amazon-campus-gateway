import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, FileCheck, Globe } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Teachers",
      description: "Learn from industry professionals and experienced educators with proven track records.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Demand Courses",
      description: "Study programs aligned with current market needs and future industry requirements.",
      color: "text-success"
    },
    {
      icon: FileCheck,
      title: "Valid Certificates",
      description: "Earn internationally recognized certificates that boost your career prospects globally.",
      color: "text-secondary"
    },
    {
      icon: Globe,
      title: "Global University Transfers",
      description: "Seamless pathways to top universities worldwide with credit transfer opportunities.",
      color: "text-trust"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Amazon College?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience education that transforms lives and opens doors to unlimited opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 text-center"
              >
                <CardContent className="pt-8 pb-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-10 h-10 ${feature.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;