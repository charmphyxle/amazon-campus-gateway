import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Camera, Users, GraduationCap, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import libraryStudy from "@/assets/library-study.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import businessClass from "@/assets/business-class.jpg";
import languageClass from "@/assets/language-class.jpg";
import kidsProgram from "@/assets/kids-program.jpg";
import teacherTraining from "@/assets/teacher-training.jpg";
import certificateCeremony from "@/assets/certificate-ceremony.jpg";
import campusExterior from "@/assets/campus-exterior.jpg";

const GalleryPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const galleryItems = [
    {
      image: libraryStudy,
      title: "Modern Library",
      category: "Campus",
      icon: Building
    },
    {
      image: computerLab,
      title: "Computer Lab",
      category: "Facilities",
      icon: Camera
    },
    {
      image: businessClass,
      title: "Business Classes",
      category: "Education",
      icon: Users
    },
    {
      image: languageClass,
      title: "Language Learning",
      category: "Programs",
      icon: Users
    },
    {
      image: kidsProgram,
      title: "Kids Academy",
      category: "Programs",
      icon: Users
    },
    {
      image: teacherTraining,
      title: "Teacher Training",
      category: "Professional",
      icon: Users
    },
    {
      image: certificateCeremony,
      title: "Graduation Day",
      category: "Events",
      icon: GraduationCap
    },
    {
      image: campusExterior,
      title: "Campus Exterior",
      category: "Campus",
      icon: Building
    }
  ];

  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Campus <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Take a visual journey through our state-of-the-art facilities and vibrant campus life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Content */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <div className="flex items-center mb-2">
                      <IconComponent className="w-5 h-5 mr-2 text-secondary" />
                      <span className="text-sm font-medium text-secondary">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate('/gallery')}
            size="lg"
            className="group shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
          >
            View More Gallery
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;