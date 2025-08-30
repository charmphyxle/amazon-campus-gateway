import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NewsEvents = () => {
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
    }
  ];

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

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

        {/* Featured News */}
        {featuredNews && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured News</h2>
              <Card className="max-w-4xl mx-auto overflow-hidden shadow-elegant-xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredNews.image} 
                      alt={featuredNews.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default">{featuredNews.category}</Badge>
                        <span className="text-sm text-muted-foreground">{featuredNews.date}</span>
                      </div>
                      <CardTitle className="text-2xl">{featuredNews.title}</CardTitle>
                      <CardDescription className="text-base">{featuredNews.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="default" className="hover-lift">
                        Read More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

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

        {/* Upcoming Events */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Upcoming Events</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                    <CardTitle className="group-hover:text-primary transition-colors">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <Button 
                      variant="default" 
                      className="w-full group-hover:scale-105 transition-transform mt-4"
                      disabled={event.registered >= event.capacity}
                    >
                      {event.registered >= event.capacity ? 'Event Full' : 'Register Now'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, events, and program updates directly to your inbox.
            </p>
            <Button size="lg" variant="secondary" className="hover-lift hover-glow">
              Subscribe to Newsletter
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsEvents;