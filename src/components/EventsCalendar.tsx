import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  Users, 
  Plus, 
  Download, 
  ArrowRight 
} from "lucide-react";

const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

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
    },
    {
      id: 7,
      title: "Technology Workshop Series",
      date: "2024-11-15",
      time: "3:00 PM - 6:00 PM",
      location: "Computer Lab",
      type: "academic",
      description: "Hands-on workshops covering latest technology trends and digital literacy skills.",
      attendees: "100+ expected",
      rsvpRequired: true
    },
    {
      id: 8,
      title: "International Food Festival",
      date: "2024-11-28",
      time: "11:00 AM - 7:00 PM",
      location: "Campus Courtyard",
      type: "cultural",
      description: "Celebrate global cuisine with traditional dishes from our international student community.",
      attendees: "800+ expected",
      rsvpRequired: false
    },
    {
      id: 9,
      title: "Winter Graduation Ceremony",
      date: "2024-12-10",
      time: "2:00 PM - 5:00 PM",
      location: "Main Auditorium",
      type: "ceremony",
      description: "Celebrating the achievements of our graduating class with family, friends, and faculty.",
      attendees: "400+ expected",
      rsvpRequired: false
    },
    {
      id: 10,
      title: "Holiday Cultural Exchange",
      date: "2024-12-18",
      time: "4:00 PM - 8:00 PM",
      location: "Student Center",
      type: "cultural",
      description: "Share holiday traditions from around the world in our diverse community celebration.",
      attendees: "300+ expected",
      rsvpRequired: false
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
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const upcomingEvents = getUpcomingEvents();

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-6">
            Events & Calendar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected with campus life through our exciting events and comprehensive academic calendar
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Calendar Section */}
          <div className="xl:col-span-7">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border/50">
                <CardTitle className="flex items-center text-primary text-xl">
                  <CalendarDays className="w-6 h-6 mr-3" />
                  Event Calendar
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="w-full">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="w-full mx-auto rounded-lg border border-border/20 bg-background/50"
                    classNames={{
                      months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                      month: "space-y-4 w-full",
                      caption: "flex justify-center pt-1 relative items-center text-lg font-semibold",
                      caption_label: "text-lg font-semibold",
                      nav: "space-x-1 flex items-center",
                      nav_button: "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 border border-border/20 rounded-md hover:bg-primary/10",
                      nav_button_previous: "absolute left-1",
                      nav_button_next: "absolute right-1",
                      table: "w-full border-collapse space-y-1",
                      head_row: "flex w-full",
                      head_cell: "text-muted-foreground rounded-md w-full font-normal text-sm p-2",
                      row: "flex w-full mt-2",
                      cell: "h-12 w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                      day: "h-12 w-full p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md border-2 border-transparent transition-all duration-200",
                      day_range_end: "day-range-end",
                      day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground border-primary",
                      day_today: "bg-accent text-accent-foreground font-semibold",
                      day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                      day_disabled: "text-muted-foreground opacity-50",
                      day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                      day_hidden: "invisible",
                    }}
                    modifiers={{
                      eventDay: events.map(event => new Date(event.date))
                    }}
                    modifiersClassNames={{
                      eventDay: "bg-secondary/20 text-secondary font-bold border-secondary/50 relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:bg-secondary after:rounded-full"
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events List */}
          <div className="xl:col-span-5">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl h-full">
              <CardHeader className="bg-gradient-to-r from-secondary/5 to-primary/5 border-b border-border/50">
                <CardTitle className="flex items-center text-secondary text-xl">
                  <Users className="w-6 h-6 mr-3" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border border-border/30 rounded-xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 group bg-gradient-to-r from-background to-background/80">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base leading-tight">
                        {event.title}
                      </h4>
                      <Badge variant="outline" className={getEventTypeColor(event.type) + " ml-3 flex-shrink-0 text-xs"}>
                        {event.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {event.attendees}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="hover-lift group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            View Details
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                              {event.title}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                              <Badge variant="outline" className={getEventTypeColor(event.type)}>
                                {event.type}
                              </Badge>
                              {event.rsvpRequired && (
                                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-700 border-yellow-200">
                                  RSVP Required
                                </Badge>
                              )}
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                              <div className="flex items-center">
                                <CalendarDays className="w-5 h-5 mr-3 text-primary" />
                                <div>
                                  <span className="text-sm font-medium text-muted-foreground">Date</span>
                                  <p className="font-semibold">{formatDate(event.date)}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-3 text-primary" />
                                <div>
                                  <span className="text-sm font-medium text-muted-foreground">Time</span>
                                  <p className="font-semibold">{event.time}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-3 text-primary" />
                                <div>
                                  <span className="text-sm font-medium text-muted-foreground">Location</span>
                                  <p className="font-semibold">{event.location}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-5 h-5 mr-3 text-primary" />
                                <div>
                                  <span className="text-sm font-medium text-muted-foreground">Attendees</span>
                                  <p className="font-semibold">{event.attendees}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-lg mb-3">Event Details</h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {event.description}
                              </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                              {event.rsvpRequired && (
                                <Button className="flex-1 hover-lift bg-gradient-to-r from-primary to-primary/80">
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

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full mt-6 hover-lift bg-gradient-to-r hover:from-primary hover:to-primary/80 hover:text-white transition-all duration-300">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      View All Events
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        All Events Calendar
                      </DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="upcoming" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                        <TabsTrigger value="all">All Events</TabsTrigger>
                        <TabsTrigger value="past">Past Events</TabsTrigger>
                      </TabsList>
                      <TabsContent value="upcoming" className="space-y-4 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {upcomingEvents.map((event) => (
                            <div key={event.id} className="p-4 border border-border/30 rounded-xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-background to-background/80">
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-foreground text-base leading-tight">
                                  {event.title}
                                </h4>
                                <Badge variant="outline" className={getEventTypeColor(event.type) + " ml-3 flex-shrink-0 text-xs"}>
                                  {event.type}
                                </Badge>
                              </div>
                              
                              <div className="space-y-2 text-sm text-muted-foreground mb-3">
                                <div className="flex items-center">
                                  <CalendarDays className="w-4 h-4 mr-2 text-primary" />
                                  <span className="font-medium">{formatDate(event.date)}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2 text-primary" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                                  <span>{event.location}</span>
                                </div>
                              </div>

                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                                {event.description}
                              </p>

                              <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground flex items-center">
                                  <Users className="w-3 h-3 mr-1" />
                                  {event.attendees}
                                </span>
                                {event.rsvpRequired && (
                                  <Button size="sm" className="bg-primary text-white">
                                    RSVP Now
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="all" className="space-y-4 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {events.map((event) => (
                            <div key={event.id} className="p-4 border border-border/30 rounded-xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-background to-background/80">
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-foreground text-sm leading-tight">
                                  {event.title}
                                </h4>
                                <Badge variant="outline" className={getEventTypeColor(event.type) + " text-xs"}>
                                  {event.type}
                                </Badge>
                              </div>
                              
                              <div className="space-y-1 text-xs text-muted-foreground mb-2">
                                <div className="flex items-center">
                                  <CalendarDays className="w-3 h-3 mr-2 text-primary" />
                                  <span>{formatDate(event.date)}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-3 h-3 mr-2 text-primary" />
                                  <span>{event.time}</span>
                                </div>
                              </div>

                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {event.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="past" className="space-y-4 mt-6">
                        <div className="text-center text-muted-foreground py-8">
                          <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>Past events will be displayed here once available.</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
