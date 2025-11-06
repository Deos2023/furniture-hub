import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
// import sofa from "@/assets/12.jpeg"
const About = () => {
  const features = [
    "Premium Quality Materials",
    "Expert Craftsmanship",
    "Custom Designs",
    "Competitive Pricing",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="font-body text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Kolkata's Premier <span className="text-gradient-gold">Sofa Manufacturer</span>
              </h2>
            </div>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Welcome to <strong>Furniture Hub</strong>, located in the heart of Park Circus - Mallickbazzar, Kolkata. We are passionate about creating premium custom sofas and elegant furniture that transform houses into homes.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              With years of expertise in furniture manufacturing, we combine traditional craftsmanship with modern design sensibilities. Every piece we create is a testament to our commitment to quality, comfort, and timeless elegance.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 font-body">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold mt-4"
            >
              <a href="/about">
                Learn More About Us
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src = "../../assets/12.jpeg"
                alt="Furniture Craftsmanship" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <p className="font-display text-4xl font-bold">15+</p>
              <p className="font-body font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
