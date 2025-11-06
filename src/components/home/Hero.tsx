import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sofa.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Furniture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Crafting Comfort, <br />
            <span className="text-gradient-gold">Elegance & Style</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            Experience the finest in custom sofa manufacturing. From concept to creation, we bring your vision of perfect comfort and timeless elegance to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg group"
            >
              <a href="https://wa.me/917003375256" target="_blank" rel="noopener noreferrer">
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-yellow-950 hover:bg-primary-foreground hover:text-primary font-body font-semibold text-lg"
            >
              <a href="#gallery">
                View Our Gallery
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
