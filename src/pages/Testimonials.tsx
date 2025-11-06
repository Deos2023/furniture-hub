import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sk Hamza Rahman",
      location: "Park Circus, Kolkata",
      review: "Exceptional craftsmanship! The custom sofa exceeded our expectations. The attention to detail and quality is outstanding. The team was professional, patient with our changes, and delivered exactly what we envisioned. Our living room has been completely transformed!",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Manas Sardar",
      location: "Salt Lake, Kolkata",
      review: "Professional service from start to finish. Our living room looks stunning with the beautiful sofa from Furniture Hub. They guided us through material selection and the end result is simply gorgeous. The quality is exceptional and the comfort is unmatched.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "Md Kaunain",
      location: "Ballygunge, Kolkata",
      review: "Best furniture manufacturer in Kolkata! The design options are endless and the quality is top-notch. Highly recommended! They turned our ideas into reality and the craftsmanship is evident in every detail. Worth every penny!",
      rating: 5,
      date: "January 2024"
    },
    {
      name: "Saira Khan",
      location: "New Town, Kolkata",
      review: "Amazing experience! They understood exactly what we wanted and delivered a perfect custom sofa. Worth every penny! The team was incredibly professional and the quality of work speaks for itself. Our guests constantly compliment the beautiful sofa.",
      rating: 5,
      date: "December 2023"
    },
    {
      name: "Rajesh Kumar",
      location: "Jadavpur, Kolkata",
      review: "Outstanding quality and service! The sofa is not only beautiful but incredibly comfortable. The team's expertise and dedication to customer satisfaction is remarkable. They made the entire process seamless and enjoyable.",
      rating: 5,
      date: "November 2023"
    },
    {
      name: "Priya Sharma",
      location: "Lake Gardens, Kolkata",
      review: "I'm absolutely delighted with my custom L-shaped sofa! The fabric quality is superb and the design perfectly complements my living space. Furniture Hub's team was responsive, professional, and delivered on time. Highly recommend!",
      rating: 5,
      date: "October 2023"
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
              Client <span className="text-accent">Testimonials</span>
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers say
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover-lift border-2 border-border relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="font-body text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-accent">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground">{testimonial.name}</p>
                      <p className="font-body text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{testimonial.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Join Our <span className="text-gradient-gold">Happy Clients?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Experience the Furniture Hub difference for yourself
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917003375256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold rounded-lg transition-colors text-lg"
              >
                Get Your Quote Today
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-lg transition-colors text-lg"
              >
                View Our Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
