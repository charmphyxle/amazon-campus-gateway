import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Heart, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import welcomeVisionBg from "@/assets/welcome-vision-bg.jpg";

const WelcomeVisionSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={welcomeVisionBg}
          alt="Students at Amazon College"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
              Welcome to Amazon College
            </h2>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed">
              For over two decades, Amazon College has been at the forefront of higher education, 
              providing world-class academic programs and fostering innovation. As a leading 
              educational institution, we are committed to shaping the next generation of global 
              leaders through excellence in teaching, research, and community engagement.
            </p>
            <p className="text-base md:text-lg opacity-90">
              Our rich history spans multiple continents, with graduates who have gone on to 
              make significant contributions in business, technology, healthcare, and public service.
            </p>
            <Link to="/about-us">
              <Button variant="cta" size="lg" className="group hover-lift">
                Learn About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Vision Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="opacity-90">
                    To be the premier international institution that transforms lives through 
                    innovative education and research, creating leaders who drive positive change 
                    in our global community.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="opacity-90">
                    To provide accessible, high-quality education that empowers students from 
                    diverse backgrounds to achieve their academic and professional goals while 
                    contributing to society.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
                  <p className="opacity-90">
                    Excellence in education, innovation in research, and dedication to student 
                    success. We are committed to creating an inclusive environment where every 
                    student can thrive and reach their full potential.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-secondary/10 rounded-full animate-float" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default WelcomeVisionSection;