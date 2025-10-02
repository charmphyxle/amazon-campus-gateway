import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Mail, BookOpen, Award, Search, GraduationCap } from "lucide-react";

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Head of Psychology Department",
      department: "Psychology",
      qualifications: ["PhD in Clinical Psychology", "MSc in Counselling", "BSc in Psychology"],
      specialties: ["Clinical Psychology", "Cognitive Behavioral Therapy", "Research Methods"],
      experience: "15+ years",
      courses: ["HND Psychology", "Master's in Psychology", "TVEC Counselling"],
      email: "sarah.johnson@amazoncollege.lk",
      bio: "Dr. Johnson is a renowned clinical psychologist with extensive experience in therapeutic practice and academic research. She has published numerous papers on cognitive behavioral therapy and leads our psychology programs.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Director of IT Programs",
      department: "Information Technology",
      qualifications: ["PhD in Computer Science", "MSc in Software Engineering", "BSc in Computer Science"],
      specialties: ["Software Development", "Database Systems", "Cybersecurity", "AI & Machine Learning"],
      experience: "20+ years",
      courses: ["Diploma in IT", "HND Computing", "BSc IT"],
      email: "michael.chen@amazoncollege.lk",
      bio: "Professor Chen brings two decades of industry and academic experience. He has worked with leading tech companies and specializes in modern software development practices and emerging technologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      title: "Senior Lecturer in Education",
      department: "Education",
      qualifications: ["PhD in Educational Psychology", "MEd in Curriculum Development", "BEd in Primary Education"],
      specialties: ["Early Childhood Education", "Montessori Method", "Curriculum Design"],
      experience: "12+ years",
      courses: ["Diploma in Montessori", "Teacher Training", "BEd Programs"],
      email: "priya.patel@amazoncollege.lk",
      bio: "Dr. Patel is an expert in early childhood education and Montessori methodology. She has trained hundreds of teachers and developed innovative curricula for young learners.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c70bda78?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Mr. James Wilson",
      title: "Head of Business Studies",
      department: "Business Management",
      qualifications: ["MBA in Strategic Management", "MSc in Finance", "BCom in Business Administration"],
      specialties: ["Strategic Management", "Financial Analysis", "Entrepreneurship", "Leadership"],
      experience: "18+ years",
      courses: ["HND Business", "Diploma in Entrepreneurship", "MBA Programs"],
      email: "james.wilson@amazoncollege.lk",
      bio: "Mr. Wilson combines academic excellence with practical business experience. He has consulted for numerous companies and brings real-world insights to our business programs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Ms. Emma Thompson",
      title: "Senior English Language Instructor",
      department: "English Language",
      qualifications: ["MA in Applied Linguistics", "TESOL Certification", "BA in English Literature"],
      specialties: ["IELTS Preparation", "Academic Writing", "Business English", "Language Assessment"],
      experience: "10+ years",
      courses: ["English Proficiency", "IELTS Preparation", "Business English"],
      email: "emma.thompson@amazoncollege.lk",
      bio: "Ms. Thompson is a certified TESOL instructor with a passion for helping students achieve their language goals. She has prepared hundreds of students for international examinations.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Dr. Rajesh Kumar",
      title: "Digital Marketing Specialist",
      department: "Digital Marketing",
      qualifications: ["PhD in Marketing", "MSc in Digital Communications", "BCom in Marketing"],
      specialties: ["Digital Strategy", "Social Media Marketing", "SEO/SEM", "Analytics"],
      experience: "8+ years",
      courses: ["Digital Media Marketing", "Social Media Strategy", "Online Marketing"],
      email: "rajesh.kumar@amazoncollege.lk",
      bio: "Dr. Kumar is at the forefront of digital marketing education. He helps businesses transform their online presence and teaches the latest digital marketing strategies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Ms. Lisa Anderson",
      title: "Child Development Specialist",
      department: "Early Childhood",
      qualifications: ["MSc in Child Psychology", "Diploma in Montessori Education", "BSc in Human Development"],
      specialties: ["Child Development", "Montessori Method", "Special Needs Education", "Parent Training"],
      experience: "14+ years",
      courses: ["Certificate in Childcare", "Montessori Training", "Child Development"],
      email: "lisa.anderson@amazoncollege.lk",
      bio: "Ms. Anderson specializes in child development and has extensive experience working with children of all abilities. She brings practical insights from years of hands-on experience.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Prof. David Roberts",
      title: "Research Director",
      department: "Research",
      qualifications: ["PhD in Educational Research", "MSc in Statistics", "BA in Mathematics"],
      specialties: ["Research Methodology", "Statistical Analysis", "Academic Writing", "Data Science"],
      experience: "22+ years",
      courses: ["Research Methods", "Statistical Analysis", "PhD Supervision"],
      email: "david.roberts@amazoncollege.lk",
      bio: "Professor Roberts leads our research initiatives and supervises doctoral students. His expertise in research methodology and statistics supports all our academic programs.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const departments = [
    "All Departments",
    "Psychology", 
    "Information Technology",
    "Education",
    "Business Management",
    "English Language",
    "Digital Marketing",
    "Early Childhood",
    "Research"
  ];

  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === "all" || 
                             selectedDepartment === "All Departments" ||
                             faculty.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="text-white max-w-4xl mx-auto">
            <Users className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Learn from industry experts and experienced educators
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Expert Faculty</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">80%</div>
                <div className="text-muted-foreground">PhD Qualified</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-trust mb-2">15+</div>
                <div className="text-muted-foreground">Years Average Experience</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">8</div>
                <div className="text-muted-foreground">Departments</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search faculty by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept === "All Departments" ? "all" : dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty) => (
              <Card 
                key={faculty.id}
                className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 bg-white/90 text-foreground"
                  >
                    {faculty.department}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {faculty.name}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {faculty.title}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    <span>{faculty.experience} experience</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {faculty.specialties.slice(0, 3).map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {faculty.specialties.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{faculty.specialties.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Courses Taught</h4>
                      <div className="text-sm text-muted-foreground">
                        {faculty.courses.slice(0, 2).join(", ")}
                        {faculty.courses.length > 2 && "..."}
                      </div>
                    </div>

                    <div className="pt-2 space-y-2">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <BookOpen className="w-4 h-4 mr-2" />
                        View Courses
                      </Button>
                      <Button variant="ghost" className="w-full text-xs">
                        <Mail className="w-3 h-3 mr-2" />
                        {faculty.email}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Faculty Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all departments.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Our Faculty Excels</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our educators bring the perfect blend of academic excellence and industry experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Industry Experience",
                description: "Real-world expertise from leading professionals",
                icon: Award,
                color: "text-primary"
              },
              {
                title: "Academic Excellence",
                description: "Advanced degrees from prestigious institutions",
                icon: GraduationCap,
                color: "text-success"
              },
              {
                title: "Research Focus",
                description: "Active researchers contributing to their fields",
                icon: BookOpen,
                color: "text-trust"
              },
              {
                title: "Student Mentorship",
                description: "Dedicated to student success and development",
                icon: Users,
                color: "text-secondary"
              }
            ].map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="text-center hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0"
                >
                  <CardHeader>
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${highlight.color}`} />
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{highlight.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Learn from the Best</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our programs and benefit from the expertise of our world-class faculty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-elegant">
              Explore Programs
            </Button>
            <Button variant="outline" size="lg">
              Meet Our Faculty
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;