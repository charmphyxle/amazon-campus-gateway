import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, ExternalLink, Search, Rss, Mail, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NewsEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedView, setSelectedView] = useState("list");

  const news = [
    {
      id: 1,
      title: "New HND Programs Now Available",
      excerpt: "We're excited to announce new HND programs in Business Management and Information Technology.",
      date: "2024-03-15",
      category: "Announcement",
      image: "/src/assets/hero-campus.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Scholarship Program for Outstanding Students",
      excerpt: "Amazon College announces merit-based scholarships for academically excellent students.",
      date: "2024-03-10",
      category: "Scholarship",
      image: "/src/assets/hero-graduation.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Industry Partnership with Leading IT Companies",
      excerpt: "New partnerships provide direct job placement opportunities for our IT graduates.",
      date: "2024-03-05",
      category: "Partnership",
      image: "/src/assets/computer-lab.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Spring 2024 Intake Registration Open",
      excerpt: "Registration for Spring 2024 intake is now open across all programs. Early bird discounts available.",
      date: "2024-02-28",
      category: "Intake",
      image: "/src/assets/campus-entrance.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Excellence Award for Amazon College",
      excerpt: "Amazon College receives national recognition for excellence in vocational education.",
      date: "2024-02-20",
      category: "Achievement",
      image: "/src/assets/certificate-ceremony.jpg",
      featured: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "Open Day 2024",
      description: "Visit our campus, meet faculty, and learn about our programs",
      date: "2024-04-15",
      time: "9:00 AM - 4:00 PM",
      location: "Amazon College Campus",
      capacity: 200,
      registered: 85,
      category: "Open House"
    },
    {
      id: 2,
      title: "Career Fair",
      description: "Meet potential employers and explore career opportunities",
      date: "2024-04-20",
      time: "10:00 AM - 3:00 PM", 
      location: "Main Auditorium",
      capacity: 150,
      registered: 45,
      category: "Career"
    },
    {
      id: 3,
      title: "Psychology Workshop",
      description: "Introduction to counseling techniques for new students",
      date: "2024-04-25",
      time: "2:00 PM - 5:00 PM",
      location: "Psychology Lab",
      capacity: 50,
      registered: 32,
      category: "Workshop"
    },
    {
      id: 4,
      title: "Graduation Ceremony",
      description: "Celebrating the achievements of our 2024 graduates",
      date: "2024-05-15",
      time: "10:00 AM - 12:00 PM",
      location: "Main Auditorium",
      capacity: 300,
      registered: 250,
      category: "Ceremony"
    },
    {
      id: 5,
      title: "Industry Guest Lecture",
      description: "Leading professionals share insights on current industry trends",
      date: "2024-05-20",
      time: "3:00 PM - 5:00 PM",
      location: "Conference Hall",
      capacity: 100,
      registered: 65,
      category: "Lecture"
    }
  ];

  const categories = ["all", ...new Set(news.map(item => item.category.toLowerCase()))];
  const eventCategories = ["all", ...new Set(events.map(item => item.category.toLowerCase()))];

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           item.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.find(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
                News & Events
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Stay updated with the latest announcements, events, and opportunities at Amazon College
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                <div className="flex-1 w-full md:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search news and events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-40">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Rss className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {regularNews.map((item, index) => (
                <Card key={item.id} className="group hover:shadow-elegant-xl transition-all duration-300 hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{item.category}</Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <CardDescription>{item.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group-hover:scale-105 transition-transform">
                      Read More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section with Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Events</h2>
            
            <Tabs value={selectedView} onValueChange={setSelectedView} className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </TabsList>

              <TabsContent value="list" className="space-y-8">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {events.map((event, index) => (
                    <Card key={event.id} className="group hover:shadow-elegant-xl transition-all duration-300 hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{event.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="w-4 h-4 mr-1" />
                            {event.registered}/{event.capacity}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          <Link to={`/events/${event.id}`} className="hover:underline">
                            {event.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button 
                            variant="default" 
                            className="flex-1 group-hover:scale-105 transition-transform"
                            disabled={event.registered >= event.capacity}
                            asChild
                          >
                            <Link to={`/events/${event.id}`}>
                              {event.registered >= event.capacity ? 'Event Full' : 'View Details'}
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="calendar" className="space-y-8">
                <div className="bg-muted/20 rounded-lg p-8 text-center">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Calendar View</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive calendar component will be implemented here
                  </p>
                  <div className="grid gap-4 max-w-2xl mx-auto">
                    {events.map(event => (
                      <div key={event.id} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString()} - {event.time}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/events/${event.id}`}>View</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, events, and program updates directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button size="default" variant="secondary" className="hover-lift hover-glow">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <Rss className="w-4 h-4 mr-2" />
                RSS Feed
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsEvents;