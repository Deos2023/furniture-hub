import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every piece is crafted with premium materials and meticulous attention to detail."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We work closely with you to bring your vision to life."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Combining traditional craftsmanship with modern design trends to create timeless pieces."
    }
  ];

  const features = [
    "15+ years of furniture manufacturing excellence",
    "Expert craftsmen with generational expertise",
    "Premium quality materials sourced globally",
    "Custom designs tailored to your preferences",
    "Competitive pricing without compromising quality",
    "Timely delivery and professional installation"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-accent">Furniture Hub</span>
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 leading-relaxed">
              Kolkata's premier sofa manufacturer, crafting comfort and elegance for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="font-body text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-6">
                Crafting Dreams Since Day One
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
                Located in the heart of Park Circus - Mallickbazzar, Kolkata, <strong>Furniture Hub</strong> has been transforming houses into homes for over 15 years. What started as a small workshop driven by passion for quality craftsmanship has grown into Kolkata's most trusted name in custom furniture manufacturing.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Every sofa we create tells a story of dedication, expertise, and unwavering commitment to excellence. Our skilled artisans blend traditional techniques with contemporary design, ensuring each piece is not just furniture, but a work of art that enhances your living space.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We believe that great furniture is more than just aesthetics—it's about comfort, durability, and creating spaces where memories are made. That's why we source only the finest materials and pay meticulous attention to every stitch, every curve, and every detail.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80" 
                  alt="Furniture Workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-lg hover-lift">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover-lift">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="font-body text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
