import { Sofa, Palette, Wrench, ShieldCheck, Truck, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: "Custom Sofa Design",
      description: "Bespoke sofas tailored to your exact specifications, style preferences, and space requirements."
    },
    {
      icon: Palette,
      title: "Premium Materials",
      description: "Finest quality fabrics, leather, and cushioning materials for lasting comfort and elegance."
    },
    {
      icon: Wrench,
      title: "Expert Craftsmanship",
      description: "Skilled artisans with years of experience creating furniture that stands the test of time."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous quality checks ensuring every piece meets our high standards of excellence."
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Careful packaging and timely delivery to ensure your furniture arrives in perfect condition."
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Dedicated support team ready to assist you throughout your furniture journey."
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Why Choose <span className="text-gradient-gold">Furniture Hub</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            We offer comprehensive furniture manufacturing services with unwavering commitment to quality and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-lg hover-lift border border-border"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
