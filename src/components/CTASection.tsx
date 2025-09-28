import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Phone, MessageCircle } from "lucide-react";
import campusExterior from "@/assets/campus-exterior.jpg";

const CTASection = () => {
  const actions = [
    {
      icon: Download,
      title: "Download Brochure",
      description: "Get detailed information about all our programs",
      button: "Download Now",
      variant: "default" as const
    },
    {
      icon: Phone,
      title: "Book Consultation",
      description: "Speak with our education counselors",
      button: "Book Now",
      variant: "outline" as const
    },
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Get instant answers to your questions",
      button: "Chat Now",
      variant: "secondary" as const
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={campusExterior} 
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-trust/90" />
        <div className="absolute inset-0 pattern-grid opacity-10" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-bounce-in">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Join thousands of successful graduates who chose Amazon College for their educational journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="xl" variant="hero" className="group hover-lift hover-glow animate-pulse-glow" asChild>
              <a href="/apply">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary hover-lift"
              onClick={() => window.open('/amazon-college-brochure.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card 
                key={action.title}
                className="group hover:shadow-elegant-xl transition-all duration-500 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover-lift animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="text-center p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                    {action.title}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  
                  <Button 
                    variant={action.variant}
                    className="w-full group-hover:scale-105 transition-transform duration-300 hover-glow"
                    onClick={action.title === "Download Brochure" ? () => window.open('/amazon-college-brochure.pdf', '_blank') : undefined}
                  >
                    {action.button}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <p className="text-white/90 mb-2">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+94114386126" className="text-secondary font-bold text-lg hover:text-white transition-colors">
                📞 +94 114-386-126
              </a>
              <span className="hidden sm:inline text-white/50">|</span>
              <a href="mailto:info@amazoncollege.lk" className="text-secondary font-bold text-lg hover:text-white transition-colors">
                ✉️ info@amazoncollege.lk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;