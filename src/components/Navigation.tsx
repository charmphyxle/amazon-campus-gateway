import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    { name: "TVEC & Short Courses", description: "6-month practical certificates", href: "/tvec-programs" },
    { name: "Diploma Programs", description: "Professional diploma courses", href: "/diploma-programs" },
    { name: "HND Programs", description: "Higher National Diplomas", href: "/hnd-programs" },
    { name: "Degree Programs", description: "Bachelor's and top-up degrees", href: "/degree-programs" },
    { name: "Masters & PhD", description: "Postgraduate research programs", href: "/masters-phd-programs" }
  ];

  return (
    <nav className={`${isScrolled ? 'bg-background/30' : 'bg-background/90'} backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-elegant transition-all duration-300`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/04d74a51-2d96-43ee-b40d-8cf6fa3c32fe.png" 
                alt="Amazon College Logo"
                className="h-16 w-auto object-contain drop-shadow-md"
              />
              {/* <div className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                Amazon College
                <span className="block text-sm font-normal text-muted-foreground">International Campus</span>
              </div> */}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="px-4 py-3 text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="px-4 py-3 text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-3 text-lg font-semibold">
                    Our Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[450px] gap-3 p-4 bg-background/95 backdrop-blur-sm border border-border/50">
                      {programs.map((program) => (
                        <NavigationMenuLink
                          key={program.name}
                          href={program.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                        >
                          <div className="text-sm font-medium leading-none">{program.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {program.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                      <NavigationMenuLink
                        href="/programs"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer border-t border-border/50 mt-2 pt-3"
                      >
                        <div className="text-sm font-medium leading-none text-primary">View All Programs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse our complete program catalog
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/accreditations" className="px-4 py-3 text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                    Accreditations
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/gallery" className="px-4 py-3 text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/news-events" className="px-4 py-3 text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                    News & Events
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/#testimonials" className="px-4 py-3 text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                    Testimonials
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="px-4 py-3 text-lg font-semibold hover:text-primary transition-colors cursor-pointer">
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Home</a>
              <a href="/about" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">About Us</a>
              <a href="/programs" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Our Programs</a>
              <a href="/accreditations" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Accreditations</a>
              <a href="/gallery" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Gallery</a>
              <a href="/news-events" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">News & Events</a>
              <a href="/#testimonials" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Testimonials</a>
              <a href="/contact" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;