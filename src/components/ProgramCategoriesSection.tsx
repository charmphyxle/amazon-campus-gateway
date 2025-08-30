import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Award, Trophy, FileText, ArrowRight } from "lucide-react";

const ProgramCategoriesSection = () => {
  const categories = [
    {
      id: "tvec",
      title: "TVEC",
      subtitle: "Short Courses",
      description: "6-month practical certificates in childcare, elderly care, and vocational skills",
      icon: FileText,
      duration: "6 months",
      level: "Certificate",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      id: "diploma",
      title: "Diplomas",
      subtitle: "Professional Training",
      description: "12-month comprehensive programs in education, counselling, IT, and business",
      icon: BookOpen,
      duration: "12 months",
      level: "Diploma",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      id: "hnd",
      title: "HND",
      subtitle: "UK-Affiliated",
      description: "Higher National Diplomas with international recognition and transfer options",
      icon: Award,
      duration: "2-3 years",
      level: "Higher Diploma",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      id: "degree",
      title: "Degrees",
      subtitle: "Bachelor Programs",
      description: "Full degree programs and top-ups in business, IT, education, and psychology",
      icon: GraduationCap,
      duration: "3-4 years",
      level: "Bachelor's",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      id: "masters",
      title: "Masters & PhD",
      subtitle: "Postgraduate",
      description: "Advanced research and professional masters programs across multiple disciplines",
      icon: Trophy,
      duration: "1-4 years",
      level: "Postgraduate",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
            Explore Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From short certificates to advanced degrees - find the perfect program to launch your career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group hover:shadow-elegant-xl transition-all duration-500 border-0 hover-lift animate-bounce-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className={`${category.bgColor} p-6 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float shadow-elegant`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-muted-foreground">{category.level}</div>
                          <div className="text-xs text-muted-foreground/70">{category.duration}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      
                      <p className="text-sm font-medium text-primary mb-3">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <Button 
                      variant="outline"
                      className="w-full group-hover:scale-105 transition-transform duration-300 hover-glow group"
                      asChild
                    >
                      <a href={`/${category.id}-programs`}>
                        View Programs
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" variant="default" className="hover-lift hover-glow" asChild>
              <a href="/programs">
                View All Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramCategoriesSection;