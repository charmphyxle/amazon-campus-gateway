import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Calendar, MapPin, Users, Trophy, Star, Award } from "lucide-react";

// Import campus images
import campusEntrance from "@/assets/campus-entrance.jpg";
import campusExterior from "@/assets/campus-exterior.jpg";
import campusWalkway from "@/assets/campus-walkway.jpg";
import studentLounge from "@/assets/student-lounge.jpg";
import library from "@/assets/library-study.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import businessClass from "@/assets/business-class.jpg";

const CampusLifeAchievements = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const campusVideos = [
    {
      id: 1,
      title: "Campus Tour - Amazon College Experience",
      description: "Take a virtual tour of our beautiful campus and state-of-the-art facilities",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: campusEntrance,
      category: "Campus Tour",
      duration: "5:30"
    },
    {
      id: 2,
      title: "Student Life & Activities",
      description: "Discover the vibrant student community and extracurricular activities",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: studentLounge,
      category: "Student Life",
      duration: "4:15"
    },
    {
      id: 3,
      title: "Achievement Ceremony 2024",
      description: "Highlights from our annual achievement awards ceremony",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: businessClass,
      category: "Achievements",
      duration: "6:45"
    }
  ];

  const campusImages = [
    {
      id: 1,
      src: campusEntrance,
      title: "Main Campus Entrance",
      description: "Welcome to Amazon College - Your gateway to success"
    },
    {
      id: 2,
      src: campusExterior,
      title: "Modern Campus Buildings",
      description: "State-of-the-art architecture and learning environments"
    },
    {
      id: 3,
      src: campusWalkway,
      title: "Campus Walkways",
      description: "Beautiful pathways connecting all campus facilities"
    },
    {
      id: 4,
      src: studentLounge,
      title: "Student Lounge Area",
      description: "Comfortable spaces for relaxation and social interaction"
    },
    {
      id: 5,
      src: library,
      title: "Modern Library",
      description: "Extensive resources and quiet study environments"
    },
    {
      id: 6,
      src: computerLab,
      title: "Computer Laboratory",
      description: "Latest technology for hands-on learning"
    },
    {
      id: 7,
      src: scienceLab,
      title: "Science Laboratory",
      description: "Well-equipped labs for scientific exploration"
    },
    {
      id: 8,
      src: businessClass,
      title: "Modern Classrooms",
      description: "Interactive learning spaces with modern amenities"
    }
  ];

  const achievements = [
    {
      title: "Excellence in Education Award 2024",
      description: "Recognized for outstanding contribution to higher education",
      icon: Trophy,
      year: "2024",
      category: "Education"
    },
    {
      title: "Best Student Placement Record",
      description: "95% graduate employment rate in target industries",
      icon: Star,
      year: "2024",
      category: "Placement"
    },
    {
      title: "International Accreditation",
      description: "Globally recognized programs and certifications",
      icon: Award,
      year: "2023",
      category: "Recognition"
    }
  ];

  const handleVideoPlay = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
    setIsVideoModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Campus Life & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our vibrant campus community and celebrate our achievements in academic excellence
          </p>
        </div>

        {/* Campus Videos Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Campus Videos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusVideos.map((video) => (
              <Card key={video.id} className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="rounded-full w-16 h-16 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50"
                      onClick={() => handleVideoPlay(video.youtubeId)}
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="shadow-md">
                      {video.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Campus Images Gallery */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Campus Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusImages.map((image) => (
              <Card key={image.id} className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                      <p className="text-xs opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="mb-4">
                      {achievement.category} • {achievement.year}
                    </Badge>
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-0 shadow-elegant-xl bg-gradient-to-r from-primary/10 via-background to-secondary/10">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Join Our Community?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Become part of our vibrant campus community and start your journey toward academic and professional success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-elegant group">
                  <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Schedule Campus Visit
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="sm:max-w-4xl p-0 bg-black">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-white text-xl">Campus Video</DialogTitle>
          </DialogHeader>
          <div className="px-6 pb-6">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              {selectedVideo && (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Campus Video"
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CampusLifeAchievements;