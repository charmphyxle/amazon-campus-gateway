
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Users, BookOpen, Shield, Search, GraduationCap, Globe, Star, Trophy, Calendar, MapPin } from "lucide-react";
import { findStudentById, StudentRecord } from "@/data/dummyStudents";
import StudentVerificationModal from "./StudentVerificationModal";
import excellenceBadge from "@/assets/excellence-badge.png";
import accreditationBadge from "@/assets/accreditation-badge.png";

const Header = () => {
  const navigate = useNavigate();
  const [quickVerifyId, setQuickVerifyId] = useState("");
  const [isQuickLoading, setIsQuickLoading] = useState(false);
  const [quickModalOpen, setQuickModalOpen] = useState(false);
  const [quickFoundStudent, setQuickFoundStudent] = useState<StudentRecord | null>(null);
  const [isQuickError, setIsQuickError] = useState(false);

  const handleQuickVerification = () => {
    if (!quickVerifyId.trim()) return;
    
    setIsQuickLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const student = findStudentById(quickVerifyId.trim());
      
      if (student) {
        setQuickFoundStudent(student);
        setIsQuickError(false);
      } else {
        setQuickFoundStudent(null);
        setIsQuickError(true);
      }
      
      setIsQuickLoading(false);
      setQuickModalOpen(true);
    }, 800);
  };

  const handleQuickCloseModal = () => {
    setQuickModalOpen(false);
    setQuickFoundStudent(null);
    setIsQuickError(false);
  };

  const handleRegisterClick = () => {
    navigate('/apply');
  };

  return (
    <div className="bg-gradient-primary text-primary-foreground">
      {/* Top Quick Access Bar */}
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between py-3 gap-4">
            {/* Left side - Badges */}
            <div className="flex items-center gap-2 lg:gap-4 flex-wrap justify-center lg:justify-start order-1 lg:order-1">
              <Badge variant="secondary" className="flex items-center gap-1 text-xs bg-white/15 backdrop-blur-sm">
                <img src={excellenceBadge} alt="Excellence" className="w-3 h-3" />
                <span className="hidden sm:inline">15+ Years Excellence</span>
                <span className="sm:hidden">15+ Years</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 text-xs bg-white/15 backdrop-blur-sm">
                <img src={accreditationBadge} alt="Accreditation" className="w-3 h-3" />
                <span className="hidden sm:inline">International Accredited</span>
                <span className="sm:hidden">Accredited</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 text-xs bg-white/15 backdrop-blur-sm">
                <GraduationCap className="w-3 h-3" />
                <span className="hidden sm:inline">10,000+ Graduates</span>
                <span className="sm:hidden">10K+ Grads</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 text-xs bg-white/15 backdrop-blur-sm">
                <Globe className="w-3 h-3" />
                <span className="hidden sm:inline">Global Recognition</span>
                <span className="sm:hidden">Global</span>
              </Badge>
            </div>
            
            {/* Right side - Action Buttons and Contact Info */}
            <div className="flex flex-col items-center lg:items-end gap-3 order-2 lg:order-2">
              {/* Buttons */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs px-3 hover:scale-105 transition-transform">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline ml-1">Student LMS</span>
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs px-3 hover:scale-105 transition-transform">
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline ml-1">Staff LMS</span>
                </Button>
                <Button 
                  variant="cta" 
                  size="sm" 
                  onClick={handleRegisterClick}
                  className="text-xs px-3 hover:scale-105 transition-transform"
                >
                  <span className="hidden sm:inline">Register Online</span>
                  <span className="sm:hidden">Register</span>
                </Button>
              </div>
              
              {/* Contact Info - Larger and more prominent */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm lg:text-base">
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-lg">📞</span>
                  <span className="text-primary-foreground">+94 114-386-126</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-lg">📧</span>
                  <span className="text-primary-foreground">info@amazoncollege.lk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Student Verification Bar */}
      <div className="py-2 lg:py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full lg:w-auto">
              <div className="flex items-center gap-1 mr-0 sm:mr-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Quick Verification:</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Input
                  placeholder="Student ID (e.g., AMZ/A001)"
                  value={quickVerifyId}
                  onChange={(e) => setQuickVerifyId(e.target.value)}
                  className="w-full sm:w-48 lg:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && handleQuickVerification()}
                />
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={handleQuickVerification}
                  disabled={!quickVerifyId.trim() || isQuickLoading}
                  className="bg-white/20 hover:bg-white/30 whitespace-nowrap"
                >
                  {isQuickLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary" />
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-1" />
                      {/* <span className="hidden sm:inline">Verify</span> */}
                      <span className="sm:hidden">✓</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="text-xs lg:text-sm text-center lg:text-right">
              <span className="opacity-90">
                {/* <span className="hidden sm:inline">🎓 For employers & institutions to verify credentials instantly</span> */}
                <span className="sm:hidden">🎓 Instant credential verification</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Verification Modal */}
      <StudentVerificationModal
        isOpen={quickModalOpen}
        onClose={handleQuickCloseModal}
        student={quickFoundStudent}
        isError={isQuickError}
      />
    </div>
  );
};

export default Header;
