import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Users, BookOpen, Shield } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-gradient-primary text-primary-foreground">
      {/* Top Quick Access Bar */}
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 gap-4">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                15+ Years Excellence
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Award-Winning Institution
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Users className="w-4 h-4" />
                Student LMS
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <BookOpen className="w-4 h-4" />
                Staff LMS
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Download className="w-4 h-4" />
                Download App
              </Button>
              <Button variant="cta" size="sm">
                Register Online
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Student Verification Bar */}
      <div className="py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Quick Verification:</span>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Enter Student ID (e.g., amz/a0007)"
                  className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" size="sm">
                  Verify Now
                </Button>
              </div>
            </div>
            
            <div className="text-sm">
              <span className="opacity-90">For employers & institutions to verify credentials</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;