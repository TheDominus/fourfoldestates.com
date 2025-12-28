import { MapPin, Home, Trees, Shield } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Strategically located in Tungri, Chaibasa with excellent connectivity and peaceful surroundings.",
  },
  {
    icon: Home,
    title: "Modern Design",
    description: "Contemporary architecture blending aesthetics with functionality for comfortable living.",
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping and open areas designed for relaxation and community gatherings.",
  },
  {
    icon: Shield,
    title: "Secure Community",
    description: "Gated community with round-the-clock security for peace of mind.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            About the Project
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Building Dreams in Chaibasa
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            FourFold Estates LLP presents a premium residential development that combines 
            modern living with the tranquility of nature. Our project in Tungri, Chaibasa 
            is designed to offer families a harmonious blend of comfort, convenience, and community.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Modern residential development"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              A Vision for Modern Living
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At FourFold Estates, we believe that home is more than just a structure—it's 
              where life unfolds. Our development is thoughtfully planned to create spaces 
              that nurture families and foster community.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From wide roads and modern infrastructure to carefully curated amenities, 
              every detail has been considered to ensure that residents enjoy a quality 
              of life that exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
