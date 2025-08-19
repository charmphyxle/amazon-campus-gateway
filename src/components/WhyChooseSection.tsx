import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, FileCheck, Globe, ArrowRight, Sparkles } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Teachers",
      description: "Learn from industry professionals and experienced educators with proven track records in their respective fields.",
      color: "text-primary",
      bgGradient: "from-primary/10 to-primary/5"
    },
    {
      icon: BookOpen,
      title: "In-Demand Courses",
      description: "Study programs aligned with current market needs and future industry requirements for maximum career impact.",
      color: "text-secondary",
      bgGradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: FileCheck,
      title: "Valid Certificates",
      description: "Earn internationally recognized certificates that boost your career prospects globally and locally.",
      color: "text-trust",
      bgGradient: "from-trust/10 to-trust/5"
    },
    {
      icon: Globe,
      title: "Global University Transfers",
      description: "Seamless pathways to top universities worldwide with credit transfer opportunities and academic partnerships.",
      color: "text-success",
      bgGradient: "from-success/10 to-success/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-trust/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-8">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent mb-6 leading-tight">
            Why Choose Amazon College?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience education that transforms lives and opens doors to unlimited opportunities in today's competitive world
          </p>
        </div>

        {/* Desktop and Tablet Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="relative p-8 text-center">
                  {/* Icon Container */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                        <IconComponent className={`w-10 h-10 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      {/* Floating ring */}
                      <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-primary/20 group-hover:border-primary/40 group-hover:scale-125 transition-all duration-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-primary mx-auto" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group relative overflow-hidden border-0 bg-gradient-to-r from-background/90 to-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardContent className="relative p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to start your journey with us?
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;