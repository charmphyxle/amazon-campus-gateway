
import { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <div className={`bg-gradient-primary text-primary-foreground sticky top-[73px] z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Quick Access Bar */}
      <div className="py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-semibold">Quick Verification</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Input
                  placeholder="Student ID (e.g., AMZ/A001)"
                  value={quickVerifyId}
                  onChange={(e) => setQuickVerifyId(e.target.value)}
                  className="w-full sm:w-52 md:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 text-sm md:text-base h-9 md:h-10"
                  onKeyPress={(e) => e.key === 'Enter' && handleQuickVerification()}
                />
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={handleQuickVerification}
                  disabled={!quickVerifyId.trim() || isQuickLoading}
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-9 md:h-10 px-3 md:px-4"
                >
                  {isQuickLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      <span className="ml-1 hidden sm:inline">Verify</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="text-xs md:text-sm text-center md:text-right opacity-90 hidden md:block">
              <span>🎓 For employers & institutions to verify credentials instantly</span>
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
