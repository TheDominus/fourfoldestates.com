import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Premium Residential Development
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            FourFold Estates
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Tungri, Chaibasa, Jharkhand
          </p>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            Discover a new standard of modern living in a serene, thoughtfully designed community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#about")}
              className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base font-medium"
            >
              Explore the Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="border-white text-foreground hover:bg-white/10 px-8 py-6 text-base font-medium"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#about")}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
