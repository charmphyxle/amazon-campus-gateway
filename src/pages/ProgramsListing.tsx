import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAllPrograms, getFeaturedPrograms } from '@/utils/programDataImporter';
import { PROGRAM_CATEGORIES, PROGRAM_LEVELS } from '@/data/programSchema';
import { Program } from '@/data/programSchema';
import { Search, Filter, Clock, DollarSign, Users, BookOpen, ChevronRight, Star } from 'lucide-react';

// Analytics tracking function
const trackProgramClick = (programId: string, programTitle: string, source: string) => {
  // In a real app, this would send to analytics service
  console.log('Program clicked:', { programId, programTitle, source, timestamp: new Date().toISOString() });
  
  // Example: Google Analytics event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'program_click', {
      program_id: programId,
      program_title: programTitle,
      source: source
    });
  }
};

interface FilterState {
  category: string;
  level: string;
  duration: string;
  feeRange: string;
  search: string;
}

const Programs: React.FC = () => {
  const navigate = useNavigate();
  const [programs] = useState<Program[]>(getAllPrograms());
  const [featuredPrograms] = useState<Program[]>(getFeaturedPrograms());
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>(programs);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    level: 'All',
    duration: 'All',
    feeRange: 'All',
    search: ''
  });

  const searchInputRef = useRef<HTMLInputElement>(null);
  const filterButtonsRef = useRef<HTMLDivElement>(null);

  // Filter programs based on current filters
  useEffect(() => {
    let filtered = programs;

    if (filters.category !== 'All') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.level !== 'All') {
      filtered = filtered.filter(p => p.level === filters.level);
    }

    if (filters.duration !== 'All') {
      filtered = filtered.filter(p => {
        const months = parseInt(p.duration);
        switch (filters.duration) {
          case 'Short (6-12 months)': return months >= 6 && months <= 12;
          case 'Medium (13-24 months)': return months >= 13 && months <= 24;
          case 'Long (25+ months)': return months >= 25;
          default: return true;
        }
      });
    }

    if (filters.feeRange !== 'All') {
      filtered = filtered.filter(p => {
        const fee = p.fees.total;
        switch (filters.feeRange) {
          case 'Under 200,000': return fee < 200000;
          case '200,000 - 500,000': return fee >= 200000 && fee <= 500000;
          case '500,000 - 1,000,000': return fee >= 500000 && fee <= 1000000;
          case 'Over 1,000,000': return fee > 1000000;
          default: return true;
        }
      });
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.shortSummary.toLowerCase().includes(searchLower) ||
        p.category?.toLowerCase().includes(searchLower)
      );
    }

    setFilteredPrograms(filtered);
  }, [filters, programs]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'All',
      level: 'All', 
      duration: 'All',
      feeRange: 'All',
      search: ''
    });
  };

  const handleProgramClick = (program: Program, source: string) => {
    trackProgramClick(program.id, program.title, source);
    setSelectedProgram(program);
  };

  const handleKeyboardNavigation = (event: React.KeyboardEvent, program: Program, source: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleProgramClick(program, source);
    }
  };

  const formatFee = (fee: number) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0
    }).format(fee);
  };

  const getDurationOptions = () => [
    'All',
    'Short (6-12 months)',
    'Medium (13-24 months)', 
    'Long (25+ months)'
  ];

  const getFeeRangeOptions = () => [
    'All',
    'Under 200,000',
    '200,000 - 500,000',
    '500,000 - 1,000,000',
    'Over 1,000,000'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Explore Our Academic Programs
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover world-class education programs designed to advance your career and achieve your academic goals. 
              From diplomas to PhD programs, we offer pathways for every ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="text-sm">
                <Star className="w-4 h-4 mr-1" />
                {programs.length} Programs Available
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Users className="w-4 h-4 mr-1" />
                UGC Recognized
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Carousel */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Featured Programs</h2>
            <p className="text-muted-foreground">Discover our most popular and highly-rated programs</p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {featuredPrograms.map((program) => (
                <CarouselItem key={program.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="h-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-primary"
                    tabIndex={0}
                    onClick={() => handleProgramClick(program, 'featured_carousel')}
                    onKeyDown={(e) => handleKeyboardNavigation(e, program, 'featured_carousel')}
                    role="button"
                    aria-label={`View details for ${program.title}`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="default">{program.level}</Badge>
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2 mb-4">
                        {program.shortSummary}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {formatFee(program.fees.total)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="relative mb-6 max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search programs..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-10"
              aria-label="Search programs"
            />
          </div>

          {/* Category Tabs */}
          <Tabs value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-6">
              <TabsTrigger value="All">All</TabsTrigger>
              {PROGRAM_CATEGORIES.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs lg:text-sm">
                  {category.replace(' ', '\n')}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Filter Chips */}
          <div ref={filterButtonsRef} className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Program filters">
            {/* Level Filter */}
            <div className="flex flex-wrap gap-1">
              <span className="text-sm font-medium text-muted-foreground mr-2">Level:</span>
              {['All', ...PROGRAM_LEVELS].map((level) => (
                <Button
                  key={level}
                  variant={filters.level === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange('level', level)}
                  aria-pressed={filters.level === level}
                >
                  {level}
                </Button>
              ))}
            </div>

            {/* Duration Filter */}
            <div className="flex flex-wrap gap-1">
              <span className="text-sm font-medium text-muted-foreground mr-2">Duration:</span>
              {getDurationOptions().map((duration) => (
                <Button
                  key={duration}
                  variant={filters.duration === duration ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange('duration', duration)}
                  aria-pressed={filters.duration === duration}
                >
                  {duration}
                </Button>
              ))}
            </div>

            {/* Fee Range Filter */}
            <div className="flex flex-wrap gap-1">
              <span className="text-sm font-medium text-muted-foreground mr-2">Fee Range (LKR):</span>
              {getFeeRangeOptions().map((range) => (
                <Button
                  key={range}
                  variant={filters.feeRange === range ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange('feeRange', range)}
                  aria-pressed={filters.feeRange === range}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredPrograms.length} of {programs.length} programs
            </p>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <Card 
                key={program.id}
                className="h-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-primary group"
                tabIndex={0}
                onClick={() => handleProgramClick(program, 'programs_grid')}
                onKeyDown={(e) => handleKeyboardNavigation(e, program, 'programs_grid')}
                role="button"
                aria-label={`View details for ${program.title}`}
              >
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img 
                    src={program.images[0] || '/placeholder.svg'} 
                    alt={`${program.title} program`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default">{program.level}</Badge>
                  </div>
                  {program.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {program.category}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <CardDescription className="line-clamp-2 mb-4">
                    {program.shortSummary}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        Duration: {program.duration}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Fee: {formatFee(program.fees.total)}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full group/btn">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No programs found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search terms to find programs that match your interests.
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* Program Detail Modal */}
      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProgram && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <DialogTitle className="text-2xl mb-2">{selectedProgram.title}</DialogTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">{selectedProgram.level}</Badge>
                      <Badge variant="outline">{selectedProgram.category}</Badge>
                      {selectedProgram.featured && (
                        <Badge variant="secondary">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <DialogDescription className="text-base">
                  {selectedProgram.shortSummary}
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-3">Program Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      Duration: {selectedProgram.duration}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
                      Total Fee: {formatFee(selectedProgram.fees.total)}
                    </div>
                    {selectedProgram.fees.installments && (
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
                        Installments: {selectedProgram.fees.installments.count} × {formatFee(selectedProgram.fees.installments.amount)}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Entry Requirements</h4>
                  <ul className="text-sm space-y-1">
                    {selectedProgram.entryRequirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Learning Outcomes</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  {selectedProgram.learningOutcomes.slice(0, 6).map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Career Pathways</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedProgram.careerPaths.map((career, index) => (
                    <Badge key={index} variant="outline" className="justify-start text-left">
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t">
                <Button 
                  className="flex-1"
                  onClick={() => {
                    trackProgramClick(selectedProgram.id, selectedProgram.title, 'apply_now_modal');
                    // Navigate to application form or contact page
                  }}
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    trackProgramClick(selectedProgram.id, selectedProgram.title, 'contact_modal');
                    // Navigate to contact page or open contact modal
                  }}
                >
                  Contact Admissions
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Programs;