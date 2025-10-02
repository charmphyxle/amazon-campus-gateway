import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import VideoTestimonialModal from "@/components/VideoTestimonialModal";
import { Star, Quote, Play, Award, Briefcase, GraduationCap, Users, Video, ExternalLink } from "lucide-react";

const Testimonials = () => {
  const [filterProgram, setFilterProgram] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Fernando",
      program: "Diploma in Information Technology",
      currentRole: "Software Developer at Tech Solutions Ltd",
      year: "2023",
      rating: 5,
      quote: "The practical approach to learning at Amazon College prepared me perfectly for the real world. The instructors were knowledgeable and the curriculum was up-to-date with industry standards.",
      beforeAfter: {
        before: "Unemployed recent school leaver",
        after: "Software Developer earning Rs. 75,000/month"
      },
      image: "/src/assets/hero-graduation.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Rohan Perera",
      program: "HND Business Management",
      currentRole: "Assistant Manager at Global Trading Co",
      year: "2022",
      rating: 5,
      quote: "The business management program gave me both theoretical knowledge and practical skills. The internship opportunities helped me secure my current position.",
      beforeAfter: {
        before: "Shop assistant with basic qualifications",
        after: "Assistant Manager with career growth prospects"
      }
    },
    {
      id: 3,
      name: "Priya Jayasinghe",
      program: "Diploma in Psychology & Counselling",
      currentRole: "Mental Health Support Worker",
      year: "2023",
      rating: 5,
      quote: "This program changed my perspective on mental health and gave me the tools to help others. The faculty's support throughout the course was exceptional.",
      beforeAfter: {
        before: "Housewife looking for career change",
        after: "Certified counselor helping families in need"
      }
    },
    {
      id: 4,
      name: "Kamal Silva",
      program: "Master of Business Administration",
      currentRole: "Regional Manager at National Bank",
      year: "2022",
      rating: 5,
      quote: "The MBA program enhanced my leadership skills and strategic thinking. The flexible schedule allowed me to continue working while studying.",
      beforeAfter: {
        before: "Branch Manager seeking advancement",
        after: "Regional Manager overseeing 15 branches"
      }
    },
    {
      id: 5,
      name: "Nilmini Rodrigo",
      program: "Diploma in Early Childhood Education",
      currentRole: "Preschool Teacher at Little Stars",
      year: "2023",
      rating: 5,
      quote: "The hands-on training and child psychology modules were invaluable. I now feel confident working with children of all ages and backgrounds.",
      beforeAfter: {
        before: "Mother wanting to work with children",
        after: "Qualified preschool teacher with own classroom"
      }
    },
    {
      id: 6,
      name: "Chamara Bandara",
      program: "Diploma in Digital Marketing",
      currentRole: "Digital Marketing Specialist",
      year: "2023",
      rating: 5,
      quote: "The course covered everything from SEO to social media marketing. The practical projects helped me build a portfolio that impressed employers.",
      beforeAfter: {
        before: "Traditional marketing background",
        after: "Digital marketing expert managing online campaigns"
      }
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      title: "From Student to Software Developer",
      studentName: "Ravindu Perera",
      program: "Diploma in Information Technology",
      year: "2023",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/src/assets/computer-lab.jpg",
      description: "Ravindu shares his journey from a complete beginner to landing his dream job as a software developer at a leading tech company."
    },
    {
      id: 2,
      title: "International Success Story",
      studentName: "Amara Hassan",
      program: "Advanced English Language Course",
      year: "2022",
      videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
      thumbnail: "/src/assets/language-class.jpg",
      description: "Amara talks about how the English program helped her secure a scholarship for her Master's degree in the UK."
    },
    {
      id: 3,
      title: "Career Change at 35",
      studentName: "Priya Jayasinghe",
      program: "Diploma in Psychology & Counselling",
      year: "2023",
      videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
      thumbnail: "/src/assets/teacher-training.jpg",
      description: "Priya's inspiring story of how she changed careers at 35 and became a certified mental health counselor."
    },
    {
      id: 4,
      title: "From Housewife to Entrepreneur",
      studentName: "Nilmini Rodrigo",
      program: "Diploma in Early Childhood Education",
      year: "2023",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
      thumbnail: "/src/assets/kids-program.jpg",
      description: "Nilmini shares how she started her own preschool after completing her early childhood education diploma."
    }
  ];

  const successStats = [
    { number: "95%", label: "Job Placement Rate", icon: Briefcase },
    { number: "2,500+", label: "Successful Graduates", icon: GraduationCap },
    { number: "4.8/5", label: "Average Rating", icon: Star },
    { number: "150+", label: "Employer Partners", icon: Award }
  ];

  const programs = ["all", "Information Technology", "Business Management", "Psychology & Counselling", "Early Childhood Education", "Digital Marketing"];

  const filteredTestimonials = testimonials.filter(testimonial => 
    filterProgram === "all" || testimonial.program.includes(filterProgram)
  );

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-success to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <Quote className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl md:text-2xl opacity-90">Real Students, Real Success</p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground">
              See how our graduates are making a difference in their careers and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-elegant-lg transition-all duration-300 group">
                  <CardContent className="pt-8 pb-6">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Student Testimonials</h2>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Filter by program:</span>
              <Select value={filterProgram} onValueChange={setFilterProgram}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  {programs.slice(1).map((program) => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Discover how our graduates transformed their careers and lives
            </p>
          </div>
          
          <TestimonialCarousel testimonials={filteredTestimonials.slice(0, 5)} />
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Watch our graduates share their success stories in their own words
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((video) => (
              <Card 
                key={video.id} 
                className="overflow-hidden hover:shadow-elegant-lg transition-all duration-300 group cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <div className="h-48 relative bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      Video
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {video.studentName}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {video.program}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network & Success Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Alumni Network</h2>
            <p className="text-lg text-muted-foreground">
              Connect with over 2,500 successful graduates worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-elegant-lg transition-all duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">2,500+</h3>
              <p className="text-muted-foreground">Alumni Worldwide</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-elegant-lg transition-all duration-300">
              <Briefcase className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">95%</h3>
              <p className="text-muted-foreground">Employment Rate</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-elegant-lg transition-all duration-300">
              <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Countries Represented</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-elegant-lg transition-all duration-300">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">4.9/5</h3>
              <p className="text-muted-foreground">Graduate Satisfaction</p>
            </Card>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.filter(t => !t.featured).map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-elegant-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{testimonial.program}</Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-primary mb-2" />
                  <CardDescription className="italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.currentRole}</p>
                    <p className="text-xs text-muted-foreground">Class of {testimonial.year}</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-3">
                    <h5 className="font-semibold text-foreground mb-2 text-sm">Success Journey</h5>
                    <div className="space-y-1 text-xs">
                      <div>
                        <span className="text-muted-foreground">From:</span> {testimonial.beforeAfter.before}
                      </div>
                      <div>
                        <span className="text-muted-foreground">To:</span> {testimonial.beforeAfter.after}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Read More Stories */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Read More Alumni Stories</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover hundreds of success stories from our graduates around the world
            </p>
            
            <Card className="p-8 bg-gradient-to-br from-background to-muted/50 shadow-elegant">
              <div className="mb-6">
                <Quote className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Explore Success Stories</h3>
                <p className="text-muted-foreground">
                  Get inspired by reading detailed success stories, career journeys, and achievements of our alumni
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View All Alumni Stories
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Join Alumni Network
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>500+ Success Stories</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span>Global Alumni Network</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Star className="w-4 h-4" />
                  <span>Verified Achievements</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoTestimonialModal
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Testimonials;