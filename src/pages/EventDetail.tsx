import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Users, Share2, Download, ArrowLeft, Plus } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EventDetail = () => {
  const { id } = useParams();

  // Mock event data - in real app, this would be fetched based on ID
  const event = {
    id: 1,
    title: "Open Day 2024",
    description: "Join us for our annual Open Day where prospective students and their families can explore our campus, meet our faculty, and learn about our comprehensive range of programs. This is an excellent opportunity to experience the Amazon College environment firsthand.",
    fullDescription: `
      Our Open Day is designed to give you a complete overview of what Amazon College has to offer. You'll have the chance to:
      
      • Tour our state-of-the-art facilities including laboratories, workshops, and learning spaces
      • Meet with faculty members and current students from various programs
      • Attend information sessions about admission requirements and application processes
      • Learn about our industry partnerships and career placement opportunities
      • Discover scholarship and financial aid options
      • Experience our supportive learning environment
      
      The event is free to attend and refreshments will be provided. We encourage you to bring any questions you may have about our programs, facilities, or student life.
    `,
    date: "2024-04-15",
    time: "9:00 AM - 4:00 PM",
    location: "Amazon College Campus",
    address: "123 Education Street, Academic District, City",
    capacity: 200,
    registered: 85,
    category: "Open House",
    image: "/src/assets/campus-entrance.jpg",
    organizer: "Amazon College Admissions Team",
    contact: "admissions@amazoncollege.edu",
    phone: "+1 (555) 123-4567",
    requirements: "No prior registration required, but RSVP is recommended",
    agenda: [
      { time: "9:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "9:30 AM", activity: "Campus Tour - Group A" },
      { time: "10:30 AM", activity: "Program Information Sessions" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Campus Tour - Group B" },
      { time: "2:00 PM", activity: "Meet the Faculty" },
      { time: "3:00 PM", activity: "Student Life Presentation" },
      { time: "3:30 PM", activity: "Q&A Session" },
      { time: "4:00 PM", activity: "Closing" }
    ]
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  const handleAddToCalendar = () => {
    const startDate = new Date(`${event.date} ${event.time.split(' - ')[0]}`);
    const endDate = new Date(`${event.date} ${event.time.split(' - ')[1]}`);
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(calendarUrl, '_blank');
  };

  const spotsRemaining = event.capacity - event.registered;
  const isEventFull = spotsRemaining <= 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button variant="ghost" asChild className="mb-4">
                  <Link to="/news-events" className="inline-flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to News & Events
                  </Link>
                </Button>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4">{event.category}</Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {event.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button onClick={handleShare} variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Event
                    </Button>
                    <Button onClick={handleAddToCalendar} variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-80 object-cover rounded-lg shadow-elegant-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Details</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <div className="whitespace-pre-line text-muted-foreground">
                      {event.fullDescription}
                    </div>
                  </CardContent>
                </Card>

                {/* Event Agenda */}
                <Card>
                  <CardHeader>
                    <CardTitle>Event Agenda</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-muted/20">
                          <div className="text-sm font-medium text-primary min-w-20">
                            {item.time}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Event Info Card */}
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Event Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-3 text-muted-foreground" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-3 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-start text-sm">
                        <MapPin className="w-4 h-4 mr-3 text-muted-foreground mt-0.5" />
                        <div>
                          <div>{event.location}</div>
                          <div className="text-muted-foreground text-xs">{event.address}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-3 text-muted-foreground" />
                        <span>
                          {spotsRemaining > 0 
                            ? `${spotsRemaining} spots remaining` 
                            : "Event full"}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Organizer:</span>
                        <div className="text-muted-foreground">{event.organizer}</div>
                      </div>
                      <div>
                        <span className="font-medium">Contact:</span>
                        <div className="text-muted-foreground">{event.contact}</div>
                      </div>
                      <div>
                        <span className="font-medium">Phone:</span>
                        <div className="text-muted-foreground">{event.phone}</div>
                      </div>
                    </div>

                    <Separator />

                    <Button 
                      className="w-full" 
                      disabled={isEventFull}
                      size="lg"
                    >
                      {isEventFull ? "Event Full" : "RSVP Now"}
                    </Button>
                  </CardContent>
                </Card>

                {/* RSVP Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick RSVP</CardTitle>
                    <CardDescription>
                      Reserve your spot for this event
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Any questions or special requirements?"
                        rows={3}
                      />
                    </div>
                    
                    <Button className="w-full" disabled={isEventFull}>
                      {isEventFull ? "Event Full" : "Submit RSVP"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Events */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Other Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Mock related events */}
              {[
                {
                  title: "Career Fair",
                  date: "2024-04-20",
                  category: "Career",
                  registered: 45,
                  capacity: 150
                },
                {
                  title: "Psychology Workshop", 
                  date: "2024-04-25",
                  category: "Workshop",
                  registered: 32,
                  capacity: 50
                },
                {
                  title: "Graduation Ceremony",
                  date: "2024-05-15", 
                  category: "Ceremony",
                  registered: 250,
                  capacity: 300
                }
              ].map((relatedEvent, index) => (
                <Card key={index} className="hover:shadow-elegant-lg transition-shadow">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">{relatedEvent.category}</Badge>
                    <CardTitle className="text-lg">{relatedEvent.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{new Date(relatedEvent.date).toLocaleDateString()}</span>
                      <span>{relatedEvent.registered}/{relatedEvent.capacity}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;