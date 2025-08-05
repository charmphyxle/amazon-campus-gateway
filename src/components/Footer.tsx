import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Amazon College</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              International Campus dedicated to providing world-class education and 
              preparing students for global success through innovative programs and 
              expert guidance.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Programs</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Admissions</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Student Services</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Career Services</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Education Street, Academic District, City 12345
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  info@amazoncollege.edu
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-primary-foreground/80 text-sm">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Stay updated with our latest news, events, and program announcements.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 Amazon College International Campus. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;