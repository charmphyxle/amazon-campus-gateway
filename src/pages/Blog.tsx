import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Search, Filter } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "New Intake for Psychology Programs Starting February 2024",
      excerpt: "We're excited to announce our new intake for Diploma in Psychology & Counselling and related programs.",
      category: "Admissions",
      author: "Admissions Team",
      date: "2024-01-15",
      readTime: "3 min read",
      image: "/src/assets/certificate-ceremony.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Tips for Success in Online Learning",
      excerpt: "Learn effective strategies to excel in our hybrid learning environment with these practical tips.",
      category: "Tips",
      author: "Academic Team",
      date: "2024-01-10",
      readTime: "5 min read",
      image: "/src/assets/computer-lab.jpg"
    },
    {
      id: 3,
      title: "Alumni Success Story: From Diploma to Dream Job",
      excerpt: "Meet Sarah, who graduated from our IT Diploma program and now works as a Software Developer at a leading tech company.",
      category: "Success Stories",
      author: "Alumni Relations",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "/src/assets/hero-graduation.jpg"
    },
    {
      id: 4,
      title: "Upcoming Workshop: Digital Marketing Trends 2024",
      excerpt: "Join our free workshop on the latest digital marketing trends and strategies for the new year.",
      category: "Events",
      author: "Events Team",
      date: "2024-01-02",
      readTime: "2 min read",
      image: "/src/assets/business-class.jpg"
    },
    {
      id: 5,
      title: "Understanding UGC Recognition for Your Career",
      excerpt: "Learn about the importance of UGC recognition and how it benefits your professional development.",
      category: "Tips",
      author: "Academic Affairs",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "/src/assets/teacher-training.jpg"
    }
  ];

  const categories = ["all", "Events", "Tips", "Success Stories", "Admissions"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">News & Events</h1>
            <p className="text-xl md:text-2xl opacity-90">Stay Updated with Amazon College</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All Categories" : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.find(post => post.featured) && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Article</h2>
            {(() => {
              const featuredPost = blogPosts.find(post => post.featured);
              return (
                <Card className="overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">Featured Article Image</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{featuredPost?.category}</Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{featuredPost?.title}</h3>
                      <p className="text-muted-foreground mb-6">{featuredPost?.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost?.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost?.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost?.readTime}
                        </div>
                      </div>
                      <Button>Read Full Article</Button>
                    </div>
                  </div>
                </Card>
              );
            })()}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-elegant-lg transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Marketing Workshop",
                date: "February 15, 2024",
                time: "2:00 PM - 5:00 PM",
                location: "Main Campus"
              },
              {
                title: "Psychology Program Info Session",
                date: "February 20, 2024",
                time: "10:00 AM - 12:00 PM",
                location: "Online"
              },
              {
                title: "Alumni Networking Event",
                date: "March 5, 2024",
                time: "6:00 PM - 8:00 PM",
                location: "Main Campus"
              }
            ].map((event, index) => (
              <Card key={index} className="hover:shadow-elegant-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;