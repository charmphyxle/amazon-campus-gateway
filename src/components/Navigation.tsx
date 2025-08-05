import { useState } from "react";
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

  const programs = [
    { name: "Diploma Programs", description: "Professional diploma courses" },
    { name: "Language Courses", description: "English & international languages" },
    { name: "Kids Programs", description: "Educational programs for children" },
    { name: "Teacher Training", description: "Professional development courses" }
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Amazon College
              <span className="block text-sm font-normal text-muted-foreground">International Campus</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium">
                    Our Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {programs.map((program) => (
                        <NavigationMenuLink
                          key={program.name}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                        >
                          <div className="text-sm font-medium leading-none">{program.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {program.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    Accreditations
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    News & Events
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    Testimonials
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
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
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Home</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">About Us</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Our Programs</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Accreditations</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Gallery</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">News & Events</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Testimonials</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;