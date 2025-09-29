import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, UserPlus, Play } from "lucide-react";
import YouTubeModal from "./YouTubeModal";
import heroGraduation from "@/assets/hero-graduation.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import awardsBadge from "@/assets/awards-badge.png";
import excellenceBadge from "@/assets/excellence-badge.png";
import accreditationBadge from "@/assets/accreditation-badge.png";
import successBadge from "@/assets/success-badge.png";
import partnershipBadge from "@/assets/partnership-badge.png";

/**
 * HeroSection (Bright + Sharp + Responsive)
 * - Brighter vivid images
 * - Sharp clear text with shadows for contrast
 * - Responsive, modern, stylish UI
 * - Stable (no position shifts when animating)
 */
const SLIDE_INTERVAL = 6000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const navigate = useNavigate();

  const slides = useMemo(
    () => [
      {
        image: "/lovable-uploads/00-112.jpg",
        title: "Amazon College Convocation 2024",
        subtitle: "Celebrating Academic Excellence",
        description:
          "Witnessing the graduation of our outstanding students and their journey to success",
      },
      {
        image: "/lovable-uploads/1_1.jpg",
        title: "Annual Convocation Ceremony",
        subtitle: "A Tradition of Excellence",
        description:
          "Distinguished faculty and leaders celebrating academic achievements in our grand auditorium",
      },
      {
        image: "/lovable-uploads/00-42.jpg",
        title: "Graduate Success Stories",
        subtitle: "Future Leaders Taking the Oath",
        description:
          "Our graduates ready to make their mark in the professional world with confidence and knowledge",
      },
      {
        image: "/lovable-uploads/8.jpg",
        title: "Academic Leadership",
        subtitle: "International Recognition",
        description:
          "Amazon Campus Private University Sri Lanka - Building bridges to global education",
      },
      {
        image: "/lovable-uploads/70-2.jpg",
        title: "Mid-Year Convocation 2025",
        subtitle: "Continuing Excellence",
        description:
          "Celebrating the achievements of our diverse student community from around the world",
      },
      {
        image: "/lovable-uploads/4.jpg",
        title: "Distinguished Faculty Panel",
        subtitle: "Academic Excellence",
        description:
          "Our world-class faculty committed to providing exceptional education and mentorship",
      },
      {
        image: "/lovable-uploads/00-32-2.jpg",
        title: "Convocation Panel Discussion",
        subtitle: "Academic Leadership Summit",
        description:
          "Industry leaders and academic experts sharing insights for future educational excellence",
      },
      {
        image: "/lovable-uploads/SEK_6943.JPG",
        title: "Graduation Ceremony",
        subtitle: "Dreams Realized",
        description:
          "Our proud graduates ready to embark on their professional journey with Amazon College credentials",
      },
    ],
    []
  );

  const badges = [
    { icon: excellenceBadge, isImage: true },
    { icon: awardsBadge, isImage: true },
    { icon: accreditationBadge, isImage: true },
    { icon: successBadge, isImage: true },
    { icon: partnershipBadge, isImage: true },
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (dir) => setCurrent((p) => (p + dir + slides.length) % slides.length);

  const handleExplorePrograms = () => {
    navigate('/programs');
  };

  const handleRegisterNow = () => {
    navigate('/apply');
  };

  return (
    <section className="relative w-full h-[85svh] sm:h-[90svh] md:h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0" aria-hidden>
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-linear ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image}
              alt=""
              className="w-full h-full object-cover [filter:brightness(1.2)_contrast(1.1)_saturate(1.25)]"
              draggable={false}
            />
            {/* gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          </div>
        ))}
      </div>

      {/* Achievement Badges - Mobile Responsive */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-2 sm:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 md:gap-4">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex items-center justify-center animate-bounce-in hover:bg-white/25 hover:scale-105 transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img 
                src={badge.icon} 
                alt="Achievement Badge" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-3 sm:px-4 md:px-6 text-center pt-20 sm:pt-24 md:pt-0">
        <div className="max-w-5xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-transparent px-2">
            {slides[current].title}
          </h1>
          <p className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] px-2">
            {slides[current].subtitle}
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] px-2 leading-relaxed">
            {slides[current].description}
          </p>

          {/* Buttons */}
          <div className="mt-5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button
              onClick={handleExplorePrograms}
              variant="hero"
              size="xl"
              className="group rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold bg-white/15 hover:bg-white/25 text-white shadow-lg transition w-full sm:w-auto hover:scale-105"
            >
              <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Programs
            </Button>
            <Button
              onClick={handleRegisterNow}
              variant="cta"
              size="xl"
              className="group rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-white shadow-lg transition w-full sm:w-auto hover:scale-105"
            >
              <UserPlus className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Register Now
            </Button>
          </div>

          {/* Additional Call-to-Action */}
          <div className="mt-4 sm:mt-6 flex justify-center">
            <button 
              onClick={() => setShowVideoModal(true)}
              className="group flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base transition-colors"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-2.5 md:p-3 rounded-full border border-white/20 shadow transition"
      >
        <ChevronLeft className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-2.5 md:p-3 rounded-full border border-white/20 shadow transition"
      >
        <ChevronRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full border border-white/40 transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* YouTube Modal */}
      <YouTubeModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId="0MAgpCSsVWI"
      />
    </section>
  );
}
