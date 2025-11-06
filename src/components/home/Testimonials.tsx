import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sk Hamza Rahman",
      review: "Exceptional craftsmanship! The custom sofa exceeded our expectations. The attention to detail and quality is outstanding.",
      rating: 5
    },
    {
      name: "Manas Sardar",
      review: "Professional service from start to finish. Our living room looks stunning with the beautiful sofa from Furniture Hub.",
      rating: 5
    },
    {
      name: "Md Kaunain",
      review: "Best furniture manufacturer in Kolkata! The design options are endless and the quality is top-notch. Highly recommended!",
      rating: 5
    },
    {
      name: "Saira Khan",
      review: "Amazing experience! They understood exactly what we wanted and delivered a perfect custom sofa. Worth every penny!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-accent font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">{testimonial.name}</p>
                  <p className="font-body text-sm text-muted-foreground">Verified Customer</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
