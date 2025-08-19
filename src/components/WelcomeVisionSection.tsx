import campusEntrance from "@/assets/campus-entrance.jpg";

const WelcomeVisionSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={campusEntrance}
          alt="Amazon College Campus Entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]">
              Welcome to Amazon College
            </h2>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed max-w-3xl mx-auto">
              For over two decades, Amazon College has been at the forefront of higher education, 
              providing world-class academic programs and fostering innovation. As a leading 
              educational institution, we are committed to shaping the next generation of global 
              leaders through excellence in teaching, research, and community engagement.
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Our rich history spans multiple continents, with graduates who have gone on to 
              make significant contributions in business, technology, healthcare, and public service.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-secondary/10 rounded-full animate-float" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default WelcomeVisionSection;