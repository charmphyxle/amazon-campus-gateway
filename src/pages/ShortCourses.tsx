import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, Calendar as CalendarIcon, Award, Users, CheckCircle, Star } from "lucide-react";

const ShortCourses = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const shortCourses = [
    {
      id: 1,
      title: "TVEC Diploma in Counselling & Psychology",
      code: "TVEC-CP-001",
      duration: "12 months",
      fee: 90000,
      registrationFee: 5000,
      installment: 7500,
      startDates: ["2024-01-15", "2024-04-15", "2024-07-15", "2024-10-15"],
      schedule: "Weekends",
      level: "TVEC Certified",
      description: "Comprehensive program covering psychological principles, counselling techniques, and practical application.",
      modules: [
        "Introduction to Psychology",
        "Counselling Theories",
        "Communication Skills", 
        "Mental Health Awareness",
        "Ethics in Counselling",
        "Practical Sessions"
      ],
      outcomes: [
        "Understand basic psychological principles",
        "Apply counselling techniques effectively",
        "Provide mental health support",
        "Maintain professional ethics"
      ],
      careers: [
        "Counselling Assistant",
        "Mental Health Support Worker",
        "Community Outreach Coordinator",
        "Rehabilitation Assistant"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Diploma in Montessori & Early Childhood",
      code: "MEC-001",
      duration: "12 months",
      fee: 120000,
      registrationFee: 5000,
      installment: 10000,
      startDates: ["2024-02-01", "2024-05-01", "2024-08-01", "2024-11-01"],
      schedule: "Weekdays",
      level: "Professional Diploma",
      description: "Specialized training in Montessori methodology and early childhood development.",
      modules: [
        "Montessori Philosophy",
        "Child Development",
        "Classroom Management",
        "Curriculum Planning",
        "Parent Communication",
        "Teaching Practicum"
      ],
      outcomes: [
        "Implement Montessori teaching methods",
        "Design age-appropriate curricula",
        "Manage early childhood classrooms",
        "Support child development effectively"
      ],
      careers: [
        "Montessori Teacher",
        "Preschool Director",
        "Early Childhood Educator",
        "Child Development Specialist"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Certificate in Childcare / Caregiver",
      code: "CC-001",
      duration: "6 months",
      fee: 60000,
      registrationFee: 5000,
      installment: 10000,
      startDates: ["2024-01-08", "2024-03-04", "2024-05-06", "2024-07-01", "2024-09-02", "2024-11-04"],
      schedule: "Flexible",
      level: "Certificate",
      description: "Essential skills for professional childcare and elderly care services.",
      modules: [
        "Basic Healthcare",
        "Nutrition & Meal Planning",
        "Safety & Emergency Care",
        "Child/Elder Psychology",
        "Communication Skills",
        "Legal & Ethical Guidelines"
      ],
      outcomes: [
        "Provide quality care services",
        "Handle emergency situations",
        "Maintain proper hygiene standards",
        "Communicate effectively with families"
      ],
      careers: [
        "Childcare Worker",
        "Elderly Caregiver",
        "Home Care Assistant",
        "Daycare Assistant"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Digital Media Marketing Certificate",
      code: "DMM-001",
      duration: "6 months",
      fee: 75000,
      registrationFee: 5000,
      installment: 12500,
      startDates: ["2024-01-22", "2024-04-22", "2024-07-22", "2024-10-22"],
      schedule: "Evening Classes",
      level: "Professional Certificate",
      description: "Master digital marketing strategies for the modern business landscape.",
      modules: [
        "Digital Marketing Fundamentals",
        "Social Media Marketing",
        "Content Creation",
        "SEO & SEM",
        "Analytics & Reporting",
        "Campaign Management"
      ],
      outcomes: [
        "Create effective digital campaigns",
        "Manage social media platforms",
        "Analyze marketing performance",
        "Develop content strategies"
      ],
      careers: [
        "Digital Marketing Assistant",
        "Social Media Coordinator",
        "Content Creator",
        "SEO Specialist"
      ],
      featured: true
    },
    {
      id: 5,
      title: "English Language Proficiency",
      code: "ELP-001",
      duration: "3 months",
      fee: 45000,
      registrationFee: 3000,
      installment: 15000,
      startDates: ["2024-01-02", "2024-02-05", "2024-03-04", "2024-04-01", "2024-05-06", "2024-06-03"],
      schedule: "Intensive",
      level: "Basic to Advanced",
      description: "Comprehensive English language training for academic and professional success.",
      modules: [
        "Grammar Fundamentals",
        "Speaking & Pronunciation",
        "Reading Comprehension",
        "Writing Skills",
        "Business English",
        "IELTS Preparation"
      ],
      outcomes: [
        "Communicate fluently in English",
        "Write professional documents",
        "Understand academic texts",
        "Pass international exams"
      ],
      careers: [
        "Administrative Assistant",
        "Customer Service Representative",
        "Translation Assistant",
        "Teaching Assistant"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Computer Literacy & IT Basics",
      code: "CIT-001",
      duration: "4 months",
      fee: 55000,
      registrationFee: 5000,
      installment: 13750,
      startDates: ["2024-01-15", "2024-03-15", "2024-05-15", "2024-07-15", "2024-09-15", "2024-11-15"],
      schedule: "Weekend",
      level: "Beginner",
      description: "Essential computer skills for the digital workplace.",
      modules: [
        "Computer Fundamentals",
        "Microsoft Office Suite",
        "Internet & Email",
        "Digital Security",
        "Basic Troubleshooting",
        "Online Tools"
      ],
      outcomes: [
        "Use computers confidently",
        "Create professional documents",
        "Navigate the internet safely",
        "Perform basic maintenance"
      ],
      careers: [
        "Data Entry Operator",
        "Office Assistant",
        "Customer Support",
        "Administrative Clerk"
      ],
      featured: false
    }
  ];

  const upcomingIntakes = [
    { date: "2024-01-15", course: "TVEC Counselling", spots: 15 },
    { date: "2024-01-22", course: "Digital Marketing", spots: 8 },
    { date: "2024-02-01", course: "Montessori Training", spots: 12 },
    { date: "2024-02-05", course: "English Proficiency", spots: 20 }
  ];

  const getNextStartDate = (startDates: string[]) => {
    const today = new Date();
    const futureDate = startDates.find(date => new Date(date) > today);
    return futureDate || startDates[0];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-success to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="text-white max-w-4xl mx-auto">
            <Award className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">TVEC & Short Courses</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Professional certifications and skills development programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Reserve Your Seat
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-muted-foreground">Course Options</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">3-12</div>
                <div className="text-muted-foreground">Months Duration</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-trust mb-2">500+</div>
                <div className="text-muted-foreground">Graduates</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">85%</div>
                <div className="text-muted-foreground">Job Placement</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Intakes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Course List */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-foreground mb-4">Available Courses</h2>
                <p className="text-xl text-muted-foreground">
                  Choose from our range of professional certification programs
                </p>
              </div>

              <div className="space-y-6">
                {shortCourses.map((course) => (
                  <Card 
                    key={course.id}
                    className="hover:shadow-elegant-lg transition-all duration-300 border-0 overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 gap-0">
                        {/* Course Info */}
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                                {course.featured && (
                                  <Badge variant="secondary" className="text-success">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">Course Code: {course.code}</p>
                              <Badge variant="outline">{course.level}</Badge>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4">{course.description}</p>

                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span>Duration: {course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="w-4 h-4 text-success" />
                              <span>Schedule: {course.schedule}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-trust" />
                              <span>Next Intake: {formatDate(getNextStartDate(course.startDates))}</span>
                            </div>
                          </div>
                        </div>

                        {/* Pricing & CTA */}
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 flex flex-col justify-between">
                          <div>
                            <div className="text-center mb-4">
                              <div className="text-2xl font-bold text-primary">
                                Rs. {course.fee.toLocaleString()}
                              </div>
                              <div className="text-sm text-muted-foreground">Total Course Fee</div>
                            </div>

                            <div className="space-y-2 text-sm mb-4">
                              <div className="flex justify-between">
                                <span>Registration:</span>
                                <span>Rs. {course.registrationFee.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Monthly:</span>
                                <span className="font-semibold text-success">Rs. {course.installment.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Button className="w-full">
                              Reserve Seat
                            </Button>
                            <Button variant="outline" className="w-full">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Intakes */}
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle>Next Intakes</CardTitle>
                  <CardDescription>Upcoming batch start dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingIntakes.map((intake, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <div>
                          <div className="font-medium text-sm">{intake.course}</div>
                          <div className="text-xs text-muted-foreground">{formatDate(intake.date)}</div>
                        </div>
                        <Badge variant={intake.spots < 10 ? "destructive" : "secondary"} className={intake.spots >= 10 ? "text-success" : ""}>
                          {intake.spots} spots
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Calendar */}
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle>Course Calendar</CardTitle>
                  <CardDescription>Select a date to see available courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="w-full"
                  />
                </CardContent>
              </Card>

              {/* TVEC Certification Info */}
              <Card className="shadow-elegant border-0 bg-gradient-to-br from-success/10 to-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-success" />
                    TVEC Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      <span>Government recognized certification</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      <span>Industry accepted qualification</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      <span>Pathway to higher education</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      <span>Job placement assistance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact for More Info */}
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle>Need More Information?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <p className="font-medium">Admissions Office</p>
                      <p className="text-muted-foreground">+94 114-386-126</p>
                      <p className="text-muted-foreground">info@amazoncollege.lk</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Short Courses */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Short Courses?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast-track your career with industry-relevant skills and certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quick Results",
                description: "Get certified in 3-12 months",
                icon: Clock,
                color: "text-primary"
              },
              {
                title: "Flexible Schedule",
                description: "Weekend and evening options",
                icon: CalendarIcon,
                color: "text-success"
              },
              {
                title: "Job-Ready Skills",
                description: "Industry-relevant curriculum",
                icon: Users,
                color: "text-trust"
              },
              {
                title: "Affordable Fees",
                description: "Easy installment plans",
                icon: Award,
                color: "text-secondary"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0">
                  <CardHeader>
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${benefit.color}`} />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShortCourses;