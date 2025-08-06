import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    programs: 0,
    awards: 0,
    countries: 0
  });

  const stats = [
    {
      icon: Users,
      label: "Students Graduated",
      value: 5000,
      suffix: "+",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      label: "Programs Offered",
      value: 25,
      suffix: "+",
      color: "text-success"
    },
    {
      icon: Award,
      label: "Awards Won",
      value: 15,
      suffix: "",
      color: "text-secondary"
    },
    {
      icon: Globe,
      label: "Countries Represented",
      value: 30,
      suffix: "+",
      color: "text-trust"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      stats.forEach((stat, index) => {
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }

          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'students' : index === 1 ? 'programs' : index === 2 ? 'awards' : 'countries']: Math.floor(current)
          }));
        }, stepTime);

        setTimeout(() => clearInterval(timer), duration + 100);
      });
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-primary to-trust relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Celebrating years of educational excellence and student success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const countKey = index === 0 ? 'students' : index === 1 ? 'programs' : index === 2 ? 'awards' : 'countries';
            
            return (
              <Card 
                key={stat.label}
                className="group hover:shadow-elegant-xl transition-all duration-500 hover:scale-105 border-0 bg-white/10 backdrop-blur-sm hover-lift animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="text-center py-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float">
                      <IconComponent className={`w-10 h-10 text-white`} />
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-text-glow">
                    {counts[countKey as keyof typeof counts]}{stat.suffix}
                  </h3>
                  
                  <p className="text-white/90 font-medium">
                    {stat.label}
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

export default StatsSection;