import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, MapPin, Users, Plus, Download } from "lucide-react";

const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<"month" | "list">("month");

  const events = [
    {
      id: 1,
      title: "International Students Welcome Day",
      date: "2024-09-15",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus Hall",
      type: "orientation",
      description: "Welcome ceremony for new international students with campus tours, registration assistance, and cultural activities.",
      attendees: "200+ expected",
      rsvpRequired: true
    },
    {
      id: 2,
      title: "Career Fair 2024",
      date: "2024-09-22",
      time: "9:00 AM - 5:00 PM",
      location: "Exhibition Center",
      type: "career",
      description: "Meet with leading employers, explore career opportunities, and network with industry professionals.",
      attendees: "500+ expected",
      rsvpRequired: true
    },
    {
      id: 3,
      title: "Academic Excellence Awards",
      date: "2024-10-05",
      time: "6:00 PM - 9:00 PM",
      location: "Amazon College Auditorium",
      type: "ceremony",
      description: "Annual awards ceremony recognizing outstanding academic achievement and student excellence.",
      attendees: "300+ expected",
      rsvpRequired: false
    },
    {
      id: 4,
      title: "Research Symposium",
      date: "2024-10-12",
      time: "1:00 PM - 6:00 PM",
      location: "Conference Room A",
      type: "academic",
      description: "Student and faculty research presentations showcasing innovative projects and academic findings.",
      attendees: "150+ expected",
      rsvpRequired: true
    },
    {
      id: 5,
      title: "Cultural Festival",
      date: "2024-10-20",
      time: "12:00 PM - 8:00 PM",
      location: "Campus Grounds",
      type: "cultural",
      description: "Celebrate diversity with cultural performances, international food, and traditional activities.",
      attendees: "600+ expected",
      rsvpRequired: false
    },
    {
      id: 6,
      title: "Parent-Teacher Conference",
      date: "2024-11-02",
      time: "2:00 PM - 6:00 PM",
      location: "Various Classrooms",
      type: "academic",
      description: "Individual meetings between parents, students, and teachers to discuss academic progress.",
      attendees: "By appointment",
      rsvpRequired: true
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      orientation: "bg-blue-500/10 text-blue-700 border-blue-200",
      career: "bg-green-500/10 text-green-700 border-green-200",
      ceremony: "bg-purple-500/10 text-purple-700 border-purple-200",
      academic: "bg-orange-500/10 text-orange-700 border-orange-200",
      cultural: "bg-pink-500/10 text-pink-700 border-pink-200"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500/10 text-gray-700 border-gray-200";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return events
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 3);
  };

  const upcomingEvents = getUpcomingEvents();

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 gradient-text">
            Events & Calendar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with campus life through our exciting events and academic calendar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <Card className="bg-background border border-muted-foreground/10 shadow-elegant">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-primary">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Event Calendar
                </CardTitle>
                <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "month" | "list")}>
                  <TabsList className="grid w-32 grid-cols-2">
                    <TabsTrigger value="month" className="text-xs">Month</TabsTrigger>
                    <TabsTrigger value="list" className="text-xs">List</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              {viewMode === "month" ? (
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border border-muted-foreground/10"
                  modifiers={{
                    eventDay: events.map(event => new Date(event.date))
                  }}
                  modifiersClassNames={{
                    eventDay: "bg-primary/20 text-primary font-semibold"
                  }}
                />
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {events.map((event) => (
                    <div key={event.id} className="p-3 border border-muted-foreground/10 rounded-lg hover:border-primary/30 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">{event.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <Clock className="w-3 h-3 mr-1" />
                            {formatDate(event.date)} • {event.time}
                          </div>
                        </div>
                        <Badge variant="outline" className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Events Section */}
          <Card className="bg-background border border-muted-foreground/10 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Users className="w-5 h-5 mr-2" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 border border-muted-foreground/10 rounded-lg hover:border-primary/30 transition-all duration-300 hover:shadow-sm group">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <Badge variant="outline" className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <CalendarDays className="w-3 h-3 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {event.attendees}
                    </span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="hover-lift">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogHeader>
                          <DialogTitle className="gradient-text">{event.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className={getEventTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                            {event.rsvpRequired && (
                              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-700 border-yellow-200">
                                RSVP Required
                              </Badge>
                            )}
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <CalendarDays className="w-4 h-4 mr-2 text-primary" />
                              {formatDate(event.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-primary" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-primary" />
                              {event.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2 text-primary" />
                              {event.attendees}
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>

                          <div className="flex flex-col sm:flex-row gap-3">
                            {event.rsvpRequired && (
                              <Button className="flex-1 hover-lift">
                                <Plus className="w-4 h-4 mr-2" />
                                RSVP Now
                              </Button>
                            )}
                            <Button variant="outline" className="flex-1 hover-lift">
                              <Download className="w-4 h-4 mr-2" />
                              Add to Calendar
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full mt-4 hover-lift">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;