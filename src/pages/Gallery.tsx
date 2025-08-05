import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = ["All", "Graduation", "Events", "Campus", "International", "Classes"];

  const galleryItems = [
    {
      id: 1,
      category: "Graduation",
      title: "Spring 2023 Graduation Ceremony",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      description: "Celebrating our graduates' achievements at the annual ceremony"
    },
    {
      id: 2,
      category: "Campus",
      title: "Modern Learning Facilities",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      description: "State-of-the-art classrooms equipped with latest technology"
    },
    {
      id: 3,
      category: "Events",
      title: "International Cultural Day",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      description: "Students celebrating diversity and cultural exchange"
    },
    {
      id: 4,
      category: "Classes",
      title: "Interactive Learning Session",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
      description: "Engaging classroom discussions and collaborative learning"
    },
    {
      id: 5,
      category: "International",
      title: "Global Partner University Visit",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      description: "Representatives from partner universities visiting our campus"
    },
    {
      id: 6,
      category: "Campus",
      title: "Student Common Area",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop",
      description: "Comfortable spaces for students to relax and socialize"
    },
    {
      id: 7,
      category: "Events",
      title: "Science & Innovation Fair",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      description: "Students showcasing their innovative projects and research"
    },
    {
      id: 8,
      category: "Graduation",
      title: "Academic Excellence Awards",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      description: "Recognizing outstanding academic achievements"
    },
    {
      id: 9,
      category: "Classes",
      title: "Computer Lab Session",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      description: "Hands-on learning in our modern computer laboratories"
    },
    {
      id: 10,
      category: "International",
      title: "Study Abroad Program",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Students participating in international exchange programs"
    },
    {
      id: 11,
      category: "Events",
      title: "Annual Sports Day",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop",
      description: "Promoting health and teamwork through sports activities"
    },
    {
      id: 12,
      category: "Campus",
      title: "Library & Study Areas",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      description: "Quiet study spaces with extensive learning resources"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const nextImage = () => {
    if (lightboxImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setLightboxImage(filteredItems[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage);
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setLightboxImage(filteredItems[prevIndex].id);
    }
  };

  const currentImage = filteredItems.find(item => item.id === lightboxImage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-br from-secondary to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <Camera className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-xl md:text-2xl opacity-90">Capturing Moments of Excellence</p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Campus Life & Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the vibrant life at Amazon College through our photo gallery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setLightboxImage(item.id)}
              >
                <div className="aspect-square relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="shadow-md bg-background/80 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxImage !== null} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black/95 border-0">
          {currentImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40"
                onClick={() => setLightboxImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Navigation */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Image */}
              <div className="flex flex-col items-center justify-center h-full p-8">
                <img
                  src={currentImage.image}
                  alt={currentImage.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="mt-6 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
                  <p className="text-lg opacity-80 max-w-2xl">{currentImage.description}</p>
                  <Badge variant="secondary" className="mt-3">
                    {currentImage.category}
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;