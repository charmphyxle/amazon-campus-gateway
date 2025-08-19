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

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (dir) => setCurrent((p) => (p + dir + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[82svh] md:h-screen overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] text-primary">
            {slides[current].title}
          </h1>
          <p className="mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-secondary drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            {slides[current].subtitle}
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {slides[current].description}
          </p>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              className="group rounded-2xl px-6 py-3 text-lg font-semibold bg-white/15 hover:bg-white/25 text-white shadow-lg transition"
            >
              <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Programs
            </Button>
            <Button
              variant="cta"
              size="xl"
              className="group rounded-2xl px-6 py-3 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-white shadow-lg transition"
            >
              <UserPlus className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full border border-white/20 shadow transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full border border-white/20 shadow transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full border border-white/40 transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
