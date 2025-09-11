import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, UserPlus } from "lucide-react";
import heroGraduation from "@/assets/hero-graduation.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

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

  const slides = useMemo(
    () => [
      {
        image: heroGraduation,
        title: "Welcome to Amazon College International Campus",
        subtitle: "Where Success Begins",
        description:
          "Empowering students worldwide with quality education and international opportunities",
      },
      {
        image: heroClassroom,
        title: "World-Class Education",
        subtitle: "Excellence in Learning",
        description:
          "Modern classrooms with experienced faculty and cutting-edge technology",
      },
      {
        image: heroCampus,
        title: "International Community",
        subtitle: "Global Connections",
        description:
          "Join students from around the world in our vibrant academic community",
      },
    ],
    []
  );

  const badges = [
    { text: "15+ Years Excellence", icon: "🏆" },
    { text: "Award-Winning Institution", icon: "🥇" },
    { text: "International Recognition", icon: "🌍" },
    { text: "Top-Rated Programs", icon: "⭐" },
    { text: "Industry Partnerships", icon: "🤝" },
    { text: "Career Success Rate 95%", icon: "📈" },
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (dir) => setCurrent((p) => (p + dir + slides.length) % slides.length);

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-center animate-bounce-in hover-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1">{badge.icon}</div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-white drop-shadow-lg leading-tight">
                {badge.text}
              </div>
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
          <p className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-orange-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] px-2">
            {slides[current].subtitle}
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] px-2 leading-relaxed">
            {slides[current].description}
          </p>

          {/* Buttons */}
          <div className="mt-5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button
              variant="hero"
              size="xl"
              className="group rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold bg-white/15 hover:bg-white/25 text-white shadow-lg transition w-full sm:w-auto"
            >
              <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Programs
            </Button>
            <Button
              variant="cta"
              size="xl"
              className="group rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold bg-secondary hover:bg-secondary/90 text-white shadow-lg transition w-full sm:w-auto"
            >
              <UserPlus className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Register Now
            </Button>
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
    </section>
  );
}
