import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, ArrowRight, Clock, DollarSign, BookOpen, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { programsData } from "@/data/programsData";
import { Program } from "@/data/programSchema";

const OurPrograms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedFeeRange, setSelectedFeeRange] = useState("all");

  const categories = Array.from(new Set(programsData.map(p => p.category).filter(Boolean)));
  const levels = Array.from(new Set(programsData.map(p => p.level)));
  
  const featuredPrograms = programsData.filter(program => program.featured);

  const filteredPrograms = useMemo(() => {
    return programsData.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           program.shortSummary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = selectedLevel === "all" || program.level === selectedLevel;
      const matchesCategory = selectedCategory === "all" || program.category === selectedCategory;
      const matchesDuration = selectedDuration === "all" || program.duration.includes(selectedDuration);
      const matchesFeeRange = selectedFeeRange === "all" || checkFeeRange(program.fees.total, selectedFeeRange);
      
      return matchesSearch && matchesLevel && matchesCategory && matchesDuration && matchesFeeRange;
    });
  }, [searchTerm, selectedLevel, selectedCategory, selectedDuration, selectedFeeRange]);

  const checkFeeRange = (fee: number, range: string) => {
    switch (range) {
      case "low": return fee < 200000;
      case "medium": return fee >= 200000 && fee < 500000;
      case "high": return fee >= 500000;
      default: return true;
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLevel("all");
    setSelectedCategory("all");
    setSelectedDuration("all");
    setSelectedFeeRange("all");
  };

  const ProgramCard = ({ program }: { program: Program }) => (
    <Card className="group hover:shadow-elegant-xl transition-all duration-300 hover-lift h-full">
      <div className="aspect-video overflow-hidden">
        <img 
          src={program.images[0] || "/src/assets/campus-exterior.jpg"} 
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="default">{program.level}</Badge>
          {program.featured && <Badge variant="secondary">Featured</Badge>}
        </div>
        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
          {program.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">{program.shortSummary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {program.duration}
          </div>
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="w-4 h-4 mr-1" />
            LKR {program.fees.total.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <Button variant="outline" size="sm" asChild>
            <a href={`/programs/${program.slug}`}>
              Learn More
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="/apply">Apply Now</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

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
                Our Programs
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Discover our comprehensive range of academic programs designed to advance your career
              </p>
            </div>
          </div>
        </section>

        {/* Featured Programs Banner */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredPrograms.slice(0, 3).map((program, index) => (
                <div key={program.id} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted/20 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Filter Programs</h3>
                </div>
                <Button variant="outline" onClick={clearFilters} size="sm">
                  Clear All Filters
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search programs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {levels.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="18">18 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                    <SelectItem value="36">36 months</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedFeeRange} onValueChange={setSelectedFeeRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Fee Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranges</SelectItem>
                    <SelectItem value="low">Under LKR 200k</SelectItem>
                    <SelectItem value="medium">LKR 200k - 500k</SelectItem>
                    <SelectItem value="high">Above LKR 500k</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Program Results */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  All Programs ({filteredPrograms.length})
                </h2>
              </div>
              
              {filteredPrograms.length === 0 ? (
                <div className="text-center py-16">
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No programs found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                  <Button variant="outline" onClick={clearFilters} className="mt-4">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPrograms.map((program, index) => (
                    <div key={program.id} className="animate-bounce-in" style={{ animationDelay: `${index * 0.05}s` }}>
                      <ProgramCard program={program} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Take the first step towards your future career. Our academic advisors are here to help you choose the right program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift hover-glow" asChild>
                <a href="/contact">Contact Course Advisor</a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <a href="/apply">Start Application</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurPrograms;