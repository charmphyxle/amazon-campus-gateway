const AccreditationsSection = () => {
  const accreditations = [
    {
      name: "Ministry of Education",
      description: "Officially recognized by the Ministry of Education",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    },
    {
      name: "International Accreditation Council",
      description: "Globally recognized education standards",
      logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=100&fit=crop"
    },
    {
      name: "Quality Assurance Agency",
      description: "Certified for academic excellence",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop"
    },
    {
      name: "International Education Partners",
      description: "Trusted partner for global education",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Accreditations & Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by international education bodies and recognized worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {accreditations.map((accreditation, index) => (
            <div 
              key={accreditation.name}
              className="group text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-background rounded-lg p-6 shadow-elegant hover:shadow-elegant-lg transition-shadow">
                <img
                  src={accreditation.logo}
                  alt={accreditation.name}
                  className="w-full h-16 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <h3 className="font-semibold text-sm mb-2">{accreditation.name}</h3>
                <p className="text-xs text-muted-foreground">{accreditation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationsSection;