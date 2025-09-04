import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const programs = [
    { name: "TVEC & Short Courses", description: "6-month practical certificates", href: "/tvec-programs" },
    { name: "Diploma Programs", description: "Professional diploma courses", href: "/diploma-programs" },
    { name: "HND Programs", description: "Higher National Diplomas", href: "/hnd-programs" },
    { name: "Degree Programs", description: "Bachelor's and top-up degrees", href: "/degree-programs" },
    { name: "Masters & PhD", description: "Postgraduate research programs", href: "/masters-phd-programs" }
  ];

  return (
    <nav className={`${isScrolled ? 'bg-background/95' : 'bg-background/90'} backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-elegant transition-all duration-300`}>
      <div className="container mx-auto px-3 sm:px-4 py-2">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 lg:space-x-3 group transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/04d74a51-2d96-43ee-b40d-8cf6fa3c32fe.png" 
                alt="Amazon College Logo"
                className="h-10 sm:h-12 lg:h-16 w-auto object-contain drop-shadow-md"
              />
              <div className="hidden sm:block text-sm md:text-lg lg:text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                Amazon College
                <span className="block text-xs md:text-sm font-normal text-muted-foreground">International Campus</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4 2xl:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/about" className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold">
                    Our Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[350px] 2xl:w-[400px] gap-3 p-4 bg-background/95 backdrop-blur-sm border border-border/50">
                      {programs.map((program) => (
                        <NavigationMenuLink key={program.name} asChild>
                          <Link
                            to={program.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          >
                            <div className="text-sm font-medium leading-none">{program.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {program.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                      <NavigationMenuLink asChild>
                        <Link
                          to="/programs"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer border-t border-border/50 mt-2 pt-3"
                        >
                          <div className="text-sm font-medium leading-none text-primary">View All Programs</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our complete program catalog
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/accreditations" className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                      Accreditations
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/gallery" className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                      Gallery
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/news-events" className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                      News & Events
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/testimonials" className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                      Testimonials
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/downloads" className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                      Downloads
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/contact" className="px-2 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
              <Link to="/" className="block px-3 py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/20">Home</Link>
              <Link to="/about" className="block px-3 py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/20">About Us</Link>
              
              {/* Mobile Programs Submenu */}
              <div className="border-b border-border/20">
                <div className="px-3 py-3 text-base font-medium text-muted-foreground">Our Programs</div>
                <div className="pl-6 space-y-1">
                  {programs.map((program) => (
                    <Link 
                      key={program.name}
                      to={program.href} 
                      className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      {program.name}
                    </Link>
                  ))}
                  <Link to="/programs" className="block px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    View All Programs
                  </Link>
                </div>
              </div>
              
              <Link to="/accreditations" className="block px-3 py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/20">Accreditations</Link>
              <Link to="/gallery" className="block px-3 py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/20">Gallery</Link>
              <Link to="/news-events" className="block px-3 py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/20">News & Events</Link>
              <Link to="/testimonials" className="block px-3 py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/20">Testimonials</Link>
              <Link to="/downloads" className="block px-3 py-3 text-base font-medium hover:text-primary transition-colors border-b border-border/20">Downloads</Link>
              <Link to="/contact" className="block px-3 py-3 text-base font-medium hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;