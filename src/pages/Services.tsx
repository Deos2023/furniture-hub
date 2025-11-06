import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sofa, Palette, Ruler, Wrench, ShieldCheck, Truck, HeadphonesIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: "Custom Sofa Manufacturing",
      description: "Bespoke sofas designed and crafted to your exact specifications. Choose from a wide range of styles, sizes, and configurations to perfectly fit your space and lifestyle.",
      features: ["L-shaped sofas", "Sectionals", "Recliners", "Loveseats", "Corner sofas"]
    },
    {
      icon: Palette,
      title: "Premium Material Selection",
      description: "Access to the finest quality fabrics, leathers, and upholstery materials. From luxurious velvets to durable performance fabrics, we have options for every preference and budget.",
      features: ["Leather upholstery", "Designer fabrics", "Velvet finishes", "Performance materials", "Custom colors"]
    },
    {
      icon: Ruler,
      title: "Design Consultation",
      description: "Expert design guidance to help you create the perfect piece. Our experienced team works with you to understand your vision and translate it into reality.",
      features: ["Free consultation", "3D visualizations", "Style recommendations", "Space planning", "Color matching"]
    },
    {
      icon: Wrench,
      title: "Expert Craftsmanship",
      description: "Master craftsmen with decades of experience bring your furniture to life. Every joint, stitch, and finish is executed with precision and care.",
      features: ["Hand-crafted details", "Quality joinery", "Reinforced frames", "Premium cushioning", "Durable construction"]
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous quality checks at every stage ensure your furniture meets our exacting standards. We stand behind our work with comprehensive warranties.",
      features: ["Multi-point inspection", "Durability testing", "Warranty coverage", "Quality guarantee", "Post-delivery support"]
    },
    {
      icon: Truck,
      title: "Delivery & Installation",
      description: "Professional delivery and installation services ensure your furniture arrives safely and is set up perfectly in your home.",
      features: ["Safe packaging", "Timely delivery", "Professional assembly", "Old furniture removal", "Setup assistance"]
    },
    {
      icon: HeadphonesIcon,
      title: "After-Sales Support",
      description: "Our relationship doesn't end at delivery. We provide ongoing support and maintenance guidance to keep your furniture looking beautiful for years.",
      features: ["Maintenance tips", "Repair services", "Cleaning guidance", "Fabric protection", "Lifetime support"]
    },
    {
      icon: Sparkles,
      title: "Restoration & Reupholstery",
      description: "Breathe new life into your beloved furniture. Our restoration services can transform worn pieces into stunning statement furniture.",
      features: ["Frame restoration", "Reupholstery", "Spring replacement", "Cushion renewal", "Refinishing"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive furniture manufacturing services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-card p-8 rounded-2xl shadow-lg hover-lift border-2 border-border"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Create Your <span className="text-gradient-gold">Dream Furniture?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation and custom quote
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg"
            >
              <a href="https://wa.me/917003375256" target="_blank" rel="noopener noreferrer">
                Get Your Free Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
