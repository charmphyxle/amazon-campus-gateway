import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download, Search, BookOpen, Calendar, GraduationCap, Users, FileText, Clock, ExternalLink } from "lucide-react";

const StudentResources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const downloadableResources = [
    {
      category: "Syllabi & Curricula",
      items: [
        { name: "Diploma in IT - Complete Syllabus", type: "PDF", size: "2.5 MB", downloads: 1205 },
        { name: "HND Business Management - Curriculum", type: "PDF", size: "1.8 MB", downloads: 892 },
        { name: "TVEC Counselling Psychology - Modules", type: "PDF", size: "1.2 MB", downloads: 634 },
        { name: "Bachelor of Psychology - Course Guide", type: "PDF", size: "3.1 MB", downloads: 445 },
        { name: "Digital Marketing Certificate - Outline", type: "PDF", size: "900 KB", downloads: 567 },
        { name: "Montessori Training - Program Details", type: "PDF", size: "1.5 MB", downloads: 378 }
      ]
    },
    {
      category: "Application Forms",
      items: [
        { name: "General Application Form", type: "PDF", size: "850 KB", downloads: 2340 },
        { name: "International Student Application", type: "PDF", size: "1.1 MB", downloads: 456 },
        { name: "Transfer Credit Application", type: "PDF", size: "750 KB", downloads: 289 },
        { name: "Scholarship Application Form", type: "PDF", size: "950 KB", downloads: 678 },
        { name: "Deferral Request Form", type: "PDF", size: "650 KB", downloads: 123 },
        { name: "Course Change Request", type: "PDF", size: "700 KB", downloads: 156 }
      ]
    },
    {
      category: "Academic Calendars",
      items: [
        { name: "Academic Year 2024 Calendar", type: "PDF", size: "1.2 MB", downloads: 1890 },
        { name: "Examination Schedule - Semester 1", type: "PDF", size: "800 KB", downloads: 1567 },
        { name: "Holiday Schedule 2024", type: "PDF", size: "500 KB", downloads: 934 },
        { name: "Registration Deadlines", type: "PDF", size: "600 KB", downloads: 1203 },
        { name: "Graduation Ceremony Dates", type: "PDF", size: "450 KB", downloads: 567 }
      ]
    },
    {
      category: "Student Handbooks",
      items: [
        { name: "Student Handbook 2024", type: "PDF", size: "4.2 MB", downloads: 2145 },
        { name: "International Student Guide", type: "PDF", size: "2.8 MB", downloads: 678 },
        { name: "Campus Safety Guidelines", type: "PDF", size: "1.5 MB", downloads: 890 },
        { name: "Academic Policies & Procedures", type: "PDF", size: "2.1 MB", downloads: 1234 },
        { name: "Library Usage Guide", type: "PDF", size: "1.3 MB", downloads: 567 }
      ]
    }
  ];

  const timetables = [
    {
      program: "Diploma in Information Technology",
      semester: "Semester 1 - 2024",
      schedule: "Monday to Friday, 9:00 AM - 4:00 PM",
      room: "IT Lab 1 & 2",
      instructor: "Prof. Michael Chen",
      updated: "2024-01-15"
    },
    {
      program: "HND Business Management",
      semester: "Year 1 - 2024",
      schedule: "Tuesday & Thursday, 6:00 PM - 9:00 PM",
      room: "Business Hall A",
      instructor: "Mr. James Wilson",
      updated: "2024-01-12"
    },
    {
      program: "TVEC Counselling & Psychology",
      semester: "Intake 2024-A",
      schedule: "Weekends, 9:00 AM - 5:00 PM",
      room: "Psychology Lab",
      instructor: "Dr. Sarah Johnson",
      updated: "2024-01-18"
    },
    {
      program: "Digital Marketing Certificate",
      semester: "Batch 2024-1",
      schedule: "Monday & Wednesday, 7:00 PM - 9:00 PM",
      room: "Media Lab",
      instructor: "Dr. Rajesh Kumar",
      updated: "2024-01-20"
    }
  ];

  const examInfo = [
    {
      title: "Mid-Semester Examinations",
      date: "March 15-22, 2024",
      duration: "2 hours per subject",
      format: "Written & Practical",
      venue: "Main Examination Hall",
      status: "upcoming"
    },
    {
      title: "Final Examinations",
      date: "June 10-20, 2024",
      duration: "3 hours per subject",
      format: "Comprehensive Assessment",
      venue: "Multiple Venues",
      status: "scheduled"
    },
    {
      title: "Practical Assessments",
      date: "Ongoing",
      duration: "Various",
      format: "Lab-based Evaluation",
      venue: "Respective Labs",
      status: "ongoing"
    },
    {
      title: "Supplementary Exams",
      date: "July 5-10, 2024",
      duration: "2-3 hours per subject",
      format: "Written/Practical",
      venue: "Exam Hall B",
      status: "planned"
    }
  ];

  const placementPartners = [
    {
      company: "TechnoServe Solutions",
      industry: "Information Technology",
      positions: ["Software Developer", "System Administrator", "Technical Support"],
      students: 25
    },
    {
      company: "Lanka Business Corp",
      industry: "Business & Finance",
      positions: ["Management Trainee", "Marketing Executive", "HR Assistant"],
      students: 18
    },
    {
      company: "Bright Minds Academy",
      industry: "Education",
      positions: ["Teacher", "Academic Coordinator", "Curriculum Developer"],
      students: 32
    },
    {
      company: "Digital Growth Agency",
      industry: "Digital Marketing",
      positions: ["Social Media Manager", "Content Creator", "SEO Specialist"],
      students: 15
    },
    {
      company: "Care First Hospital",
      industry: "Healthcare",
      positions: ["Psychology Assistant", "Counselor", "Patient Care Coordinator"],
      students: 12
    },
    {
      company: "Little Stars Preschool",
      industry: "Early Childhood",
      positions: ["Montessori Teacher", "Childcare Assistant", "Program Coordinator"],
      students: 20
    }
  ];

  const quickLinks = [
    { title: "Student Portal Login", url: "#", icon: Users, description: "Access your academic records and course materials" },
    { title: "Online Library", url: "#", icon: BookOpen, description: "Digital books, journals, and research databases" },
    { title: "Academic Calendar", url: "#", icon: Calendar, description: "Important dates and academic schedule" },
    { title: "Course Registration", url: "#", icon: GraduationCap, description: "Register for courses and manage your schedule" },
    { title: "Fee Payment Portal", url: "#", icon: FileText, description: "Pay fees online and view payment history" },
    { title: "Career Services", url: "#", icon: Users, description: "Job placement assistance and career guidance" }
  ];

  const filteredResources = downloadableResources.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="text-white max-w-4xl mx-auto">
            <BookOpen className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Resources</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Everything you need for academic success in one place
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Access</h2>
            <p className="text-lg text-muted-foreground">
              Fast links to essential student services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 cursor-pointer"
                >
                  <CardHeader className="text-center">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-trust transition-colors" />
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {link.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">{link.description}</CardDescription>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Access
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="downloads" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
              <TabsTrigger value="timetables">Timetables</TabsTrigger>
              <TabsTrigger value="exams">Exams</TabsTrigger>
              <TabsTrigger value="placements">Placements</TabsTrigger>
            </TabsList>
            
            {/* Downloads Tab */}
            <TabsContent value="downloads">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search for documents, forms, syllabi..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {filteredResources.reduce((acc, cat) => acc + cat.items.length, 0)} documents found
                  </Badge>
                </div>

                {filteredResources.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="shadow-elegant border-0">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {category.category}
                      </CardTitle>
                      <CardDescription>
                        {category.items.length} documents available
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {category.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex}
                            className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <Download className="w-5 h-5 text-primary" />
                              <div>
                                <h4 className="font-medium text-foreground">{item.name}</h4>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span>{item.type}</span>
                                  <span>{item.size}</span>
                                  <span>{item.downloads} downloads</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Download className="w-3 h-3 mr-2" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Timetables Tab */}
            <TabsContent value="timetables">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Current Timetables</h3>
                  <p className="text-muted-foreground">
                    View class schedules for all active programs
                  </p>
                </div>

                <div className="grid gap-6">
                  {timetables.map((timetable, index) => (
                    <Card key={index} className="hover:shadow-elegant-lg transition-all duration-300 border-0">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">{timetable.program}</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Semester:</span>
                                <span className="font-medium">{timetable.semester}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Schedule:</span>
                                <span className="font-medium">{timetable.schedule}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Room:</span>
                                <span className="font-medium">{timetable.room}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between">
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Instructor:</span>
                                <span className="font-medium">{timetable.instructor}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Last Updated:</span>
                                <span className="font-medium">{timetable.updated}</span>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button variant="outline" size="sm" className="flex-1">
                                <Download className="w-3 h-3 mr-2" />
                                Download
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1">
                                <Calendar className="w-3 h-3 mr-2" />
                                Add to Calendar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Exams Tab */}
            <TabsContent value="exams">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Examination Information</h3>
                  <p className="text-muted-foreground">
                    Stay updated with exam schedules and important information
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {examInfo.map((exam, index) => (
                    <Card 
                      key={index}
                      className="hover:shadow-elegant-lg transition-all duration-300 border-0"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{exam.title}</CardTitle>
                          <Badge 
                            variant={
                              exam.status === 'upcoming' ? 'default' :
                              exam.status === 'ongoing' ? 'secondary' :
                              'outline'
                            }
                            className={exam.status === 'ongoing' ? 'text-success' : ''}
                          >
                            {exam.status}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exam.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <span className="font-medium">{exam.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Format:</span>
                            <span className="font-medium">{exam.format}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Venue:</span>
                            <span className="font-medium">{exam.venue}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-4">
                          <FileText className="w-3 h-3 mr-2" />
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Placements Tab */}
            <TabsContent value="placements">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Placement Partners & Opportunities</h3>
                  <p className="text-muted-foreground">
                    Explore internship and job opportunities with our industry partners
                  </p>
                </div>

                <div className="grid gap-6">
                  {placementPartners.map((partner, index) => (
                    <Card 
                      key={index}
                      className="hover:shadow-elegant-lg transition-all duration-300 border-0"
                    >
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">{partner.company}</h4>
                            <Badge variant="outline" className="mb-2">
                              {partner.industry}
                            </Badge>
                            <p className="text-sm text-muted-foreground">
                              {partner.students} students placed
                            </p>
                          </div>
                          <div className="md:col-span-2">
                            <h5 className="font-medium text-foreground mb-2">Available Positions:</h5>
                            <div className="flex flex-wrap gap-2">
                              {partner.positions.map((position, posIndex) => (
                                <Badge key={posIndex} variant="secondary">
                                  {position}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button variant="outline" size="sm">
                                View Opportunities
                              </Button>
                              <Button variant="outline" size="sm">
                                Company Profile
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentResources;