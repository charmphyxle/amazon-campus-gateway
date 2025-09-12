import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, X, Camera, Play, Search, Filter, Calendar, Tag } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const categories = ["All", "Graduation", "Events", "Campus", "International"];

  const galleryItems = [
    {
      id: 1,
      category: "Graduation",
      title: "Spring 2024 Graduation Ceremony",
      type: "image",
      image: "/src/assets/hero-graduation.jpg",
      thumbnail: "/src/assets/hero-graduation.jpg",
      description: "Celebrating our graduates' achievements at the annual ceremony",
      date: "2024-05-15",
      event: "Graduation Ceremony",
      tags: ["graduation", "ceremony", "achievement"]
    },
    {
      id: 2,
      category: "Campus",
      title: "Modern Campus Entrance",
      type: "image",
      image: "/src/assets/campus-entrance.jpg",
      thumbnail: "/src/assets/campus-entrance.jpg",
      description: "Welcoming entrance to our modern educational facility",
      date: "2024-03-20",
      event: "Campus Tour",
      tags: ["campus", "entrance", "modern"]
    },
    {
      id: 3,
      category: "Events",
      title: "International Cultural Day",
      type: "video",
      image: "/src/assets/language-class.jpg",
      thumbnail: "/src/assets/language-class.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "Students celebrating diversity and cultural exchange",
      date: "2024-04-10",
      event: "Cultural Day",
      tags: ["cultural", "international", "diversity"]
    },
    {
      id: 4,
      category: "Campus",
      title: "Interactive Learning Session",
      type: "image",
      image: "/src/assets/hero-classroom.jpg",
      thumbnail: "/src/assets/hero-classroom.jpg",
      description: "Engaging classroom discussions and collaborative learning",
      date: "2024-03-15",
      event: "Class Session",
      tags: ["learning", "interactive", "classroom"]
    },
    {
      id: 5,
      category: "International",
      title: "Global Partner University Visit",
      type: "image",
      image: "/src/assets/teacher-training.jpg",
      thumbnail: "/src/assets/teacher-training.jpg",
      description: "Representatives from partner universities visiting our campus",
      date: "2024-04-05",
      event: "Partnership Meeting",
      tags: ["international", "partnership", "collaboration"]
    },
    {
      id: 6,
      category: "Campus",
      title: "Student Common Area",
      type: "image",
      image: "/src/assets/student-lounge.jpg",
      thumbnail: "/src/assets/student-lounge.jpg",
      description: "Comfortable spaces for students to relax and socialize",
      date: "2024-03-10",
      event: "Campus Life",
      tags: ["student-life", "lounge", "social"]
    },
    {
      id: 7,
      category: "Events",
      title: "Science & Innovation Fair",
      type: "video",
      image: "/src/assets/science-lab.jpg",
      thumbnail: "/src/assets/science-lab.jpg",
      videoUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
      description: "Students showcasing their innovative projects and research",
      date: "2024-04-20",
      event: "Innovation Fair",
      tags: ["science", "innovation", "projects"]
    },
    {
      id: 8,
      category: "Graduation",
      title: "Academic Excellence Awards",
      type: "image",
      image: "/src/assets/certificate-ceremony.jpg",
      thumbnail: "/src/assets/certificate-ceremony.jpg",
      description: "Recognizing outstanding academic achievements",
      date: "2024-05-10",
      event: "Awards Ceremony",
      tags: ["awards", "excellence", "achievement"]
    },
    {
      id: 9,
      category: "Campus",
      title: "Computer Lab Session",
      type: "image",
      image: "/src/assets/computer-lab.jpg",
      thumbnail: "/src/assets/computer-lab.jpg",
      description: "Hands-on learning in our modern computer laboratories",
      date: "2024-03-25",
      event: "Lab Session",
      tags: ["computer", "lab", "technology"]
    },
    {
      id: 10,
      category: "International",
      title: "Study Abroad Program",
      type: "video",
      image: "/src/assets/campus-walkway.jpg",
      thumbnail: "/src/assets/campus-walkway.jpg",
      videoUrl: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
      description: "Students participating in international exchange programs",
      date: "2024-04-15",
      event: "Study Abroad",
      tags: ["study-abroad", "exchange", "international"]
    },
    {
      id: 11,
      category: "Events",
      title: "Annual Sports Day",
      type: "image",
      image: "/src/assets/hero-campus.jpg",
      thumbnail: "/src/assets/hero-campus.jpg",
      description: "Promoting health and teamwork through sports activities",
      date: "2024-04-25",
      event: "Sports Day",
      tags: ["sports", "teamwork", "health"]
    },
    {
      id: 12,
      category: "Campus",
      title: "Library & Study Areas",
      type: "image",
      image: "/src/assets/library-study.jpg",
      thumbnail: "/src/assets/library-study.jpg",
      description: "Quiet study spaces with extensive learning resources",
      date: "2024-03-05",
      event: "Study Session",
      tags: ["library", "study", "resources"]
    },
    {
      id: 13,
      category: "Events",
      title: "Kids Program Workshop",
      type: "video",
      image: "/src/assets/kids-program.jpg",
      thumbnail: "/src/assets/kids-program.jpg",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      description: "Special educational programs for young learners",
      date: "2024-04-30",
      event: "Kids Workshop",
      tags: ["kids", "workshop", "education"]
    },
    {
      id: 14,
      category: "Campus",
      title: "Business Class Presentation",
      type: "image",
      image: "/src/assets/business-class.jpg",
      thumbnail: "/src/assets/business-class.jpg",
      description: "Students presenting their business projects",
      date: "2024-04-12",
      event: "Business Presentation",
      tags: ["business", "presentation", "projects"]
    },
    {
      id: 15,
      category: "Campus",
      title: "Campus Exterior View",
      type: "image",
      image: "/src/assets/campus-exterior.jpg",
      thumbnail: "/src/assets/campus-exterior.jpg",
      description: "Beautiful exterior view of our main campus building",
      date: "2024-03-01",
      event: "Campus Overview",
      tags: ["campus", "exterior", "building"]
    },
    {
      id: 16,
      category: "Graduation",
      title: "Annual Convocation 2023",
      type: "image",
      image: "/lovable-uploads/5b772aea-b36a-4929-ae8e-f7000219d2c8.png",
      thumbnail: "/lovable-uploads/5b772aea-b36a-4929-ae8e-f7000219d2c8.png",
      description: "Annual convocation ceremony at BMICH Main Hall with distinguished guests",
      date: "2023-12-18",
      event: "Annual Convocation",
      tags: ["convocation", "graduation", "ceremony", "2023"]
    },
    {
      id: 17,
      category: "Graduation",
      title: "Graduation Ceremony Stage",
      type: "image",
      image: "/lovable-uploads/114d4399-3aa6-4de3-8726-b05a041e8093.png",
      thumbnail: "/lovable-uploads/114d4399-3aa6-4de3-8726-b05a041e8093.png",
      description: "Academic staff and graduates on stage during graduation ceremony",
      date: "2023-12-18",
      event: "Graduation Ceremony",
      tags: ["graduation", "stage", "academic", "ceremony"]
    },
    {
      id: 18,
      category: "Events",
      title: "Student Life - Mid-Year Convocation 2025",
      type: "image",
      image: "/lovable-uploads/899349de-fec4-43de-9545-8daa88ad3922.png",
      thumbnail: "/lovable-uploads/899349de-fec4-43de-9545-8daa88ad3922.png",
      description: "Students celebrating and taking selfies at the mid-year convocation",
      date: "2025-08-23",
      event: "Mid-Year Convocation",
      tags: ["students", "celebration", "selfie", "convocation"]
    },
    {
      id: 19,
      category: "Graduation",
      title: "Convocation Hall Ceremony",
      type: "image",
      image: "/lovable-uploads/14cf28a1-bb41-417e-995e-5528de86cce7.png",
      thumbnail: "/lovable-uploads/14cf28a1-bb41-417e-995e-5528de86cce7.png",
      description: "Full view of convocation hall during graduation ceremony",
      date: "2024-05-20",
      event: "Convocation Ceremony",
      tags: ["convocation", "hall", "graduation", "ceremony"]
    },
    {
      id: 20,
      category: "Events",
      title: "Ribbon Cutting Ceremony",
      type: "image",
      image: "/lovable-uploads/07cdbedc-fb10-45eb-86b7-3d479c339a53.png",
      thumbnail: "/lovable-uploads/07cdbedc-fb10-45eb-86b7-3d479c339a53.png",
      description: "Official ribbon cutting ceremony with dignitaries and staff",
      date: "2024-06-15",
      event: "Opening Ceremony",
      tags: ["ribbon-cutting", "opening", "ceremony", "officials"]
    },
    {
      id: 21,
      category: "Events",
      title: "Official Opening Event",
      type: "image",
      image: "/lovable-uploads/956060cc-2ff1-44b7-9dbc-449fa733bee2.png",
      thumbnail: "/lovable-uploads/956060cc-2ff1-44b7-9dbc-449fa733bee2.png",
      description: "Distinguished guests at the official opening ceremony",
      date: "2024-06-15",
      event: "Opening Ceremony",
      tags: ["opening", "ceremony", "guests", "officials"]
    },
    {
      id: 22,
      category: "Events",
      title: "Inauguration Ceremony",
      type: "image",
      image: "/lovable-uploads/dfe7ac19-3a4e-435d-961a-42232bb305e7.png",
      thumbnail: "/lovable-uploads/dfe7ac19-3a4e-435d-961a-42232bb305e7.png",
      description: "Formal inauguration ceremony with university officials",
      date: "2024-06-15",
      event: "Inauguration",
      tags: ["inauguration", "ceremony", "formal", "officials"]
    },
    {
      id: 23,
      category: "Events",
      title: "Administrative Meeting",
      type: "image",
      image: "/lovable-uploads/84a242db-19f1-4468-821d-b3e7394ee725.png",
      thumbnail: "/lovable-uploads/84a242db-19f1-4468-821d-b3e7394ee725.png",
      description: "Administrative meeting with college officials and staff",
      date: "2024-07-10",
      event: "Administrative Meeting",
      tags: ["meeting", "administration", "officials", "college"]
    },
    {
      id: 24,
      category: "Events",
      title: "College Presentation",
      type: "image",
      image: "/lovable-uploads/4d82b9ec-e11f-4899-b5fe-888f4df36924.png",
      thumbnail: "/lovable-uploads/4d82b9ec-e11f-4899-b5fe-888f4df36924.png",
      description: "College presentation by administration to stakeholders",
      date: "2024-07-10",
      event: "College Presentation",
      tags: ["presentation", "college", "administration", "stakeholders"]
    },
    {
      id: 25,
      category: "Events",
      title: "Staff Meeting Discussion",
      type: "image",
      image: "/lovable-uploads/88194faa-3a0c-4932-ae09-e578ea3b9b34.png",
      thumbnail: "/lovable-uploads/88194faa-3a0c-4932-ae09-e578ea3b9b34.png",
      description: "Educational discussion during staff meeting session",
      date: "2024-07-10",
      event: "Staff Meeting",
      tags: ["staff", "meeting", "discussion", "education"]
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeFilter === "All" || item.category === activeFilter;
    const matchesSearch = searchTerm === "" || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.title.localeCompare(b.title);
    }
  });

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

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search photos, videos, events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className="transition-all duration-300"
                >
                  {category}
                  <Badge variant="secondary" className="ml-2">
                    {category === "All" 
                      ? galleryItems.length 
                      : galleryItems.filter(item => item.category === category).length
                    }
                  </Badge>
                </Button>
              ))}
            </div>
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

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in hover:scale-105 transition-all duration-300 break-inside-avoid mb-6"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setLightboxImage(item.id)}
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    style={{ height: 'auto' }}
                  />
                  
                  {/* Video Play Button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4 group-hover:bg-black/70 transition-colors">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="shadow-md bg-background/80 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Type Badge */}
                  {item.type === "video" && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="default" className="shadow-md bg-primary/80 backdrop-blur-sm">
                        <Play className="w-3 h-3 mr-1" />
                        Video
                      </Badge>
                    </div>
                  )}
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2 mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs opacity-75">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.date).toLocaleDateString()}
                        <span>•</span>
                        <Tag className="w-3 h-3" />
                        {item.event}
                      </div>
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

              {/* Media Content */}
              <div className="flex flex-col items-center justify-center h-full p-8">
                {currentImage.type === "video" ? (
                  <div className="w-full max-w-4xl">
                    <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg">Video Player</p>
                        <p className="text-sm opacity-75">Video URL: {currentImage.videoUrl}</p>
                        <Button 
                          variant="secondary" 
                          className="mt-4"
                          onClick={() => window.open(currentImage.videoUrl, '_blank')}
                        >
                          Open Video
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={currentImage.image}
                    alt={currentImage.title}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                )}
                
                {/* Media Info */}
                <div className="mt-6 text-center text-white max-w-4xl">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <Badge variant="secondary">{currentImage.category}</Badge>
                    {currentImage.type === "video" && (
                      <Badge variant="default">
                        <Play className="w-3 h-3 mr-1" />
                        Video
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
                  <p className="text-lg opacity-80 mb-4">{currentImage.description}</p>
                  <div className="flex justify-center items-center gap-6 text-sm opacity-75">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(currentImage.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {currentImage.event}
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 mt-4">
                    {currentImage.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-white/10 border-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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