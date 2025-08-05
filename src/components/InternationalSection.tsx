import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Plane, GraduationCap, Users, FileText, MessageCircle } from "lucide-react";

const InternationalSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Visa Assistance",
      description: "Complete support with visa applications and documentation"
    },
    {
      icon: Plane,
      title: "Pre-Arrival Support",
      description: "Guidance on travel, accommodation, and arrival preparations"
    },
    {
      icon: Users,
      title: "Orientation Programs",
      description: "Comprehensive orientation to help you settle in smoothly"
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Programs to help you adapt to the local culture and community"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-trust/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            International Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated support for international students to ensure a smooth transition and successful academic journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Your Gateway to Global Education
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Amazon College International Campus, we understand the unique challenges faced by international students. 
              Our comprehensive support services are designed to make your educational journey seamless, from application 
              to graduation and beyond.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg">
                <GraduationCap className="w-5 h-5 mr-2" />
                Explore Pathways
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact International Desk
              </Button>
            </div>
          </div>

          <div>
            <Card className="shadow-elegant-lg border-0 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
                  alt="International students"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      Join Our Global Community
                    </h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-1">50+</div>
                        <div className="text-sm text-muted-foreground">Countries</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-success mb-1">95%</div>
                        <div className="text-sm text-muted-foreground">Visa Success</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary mb-1">24/7</div>
                        <div className="text-sm text-muted-foreground">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;