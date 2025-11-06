import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sofa from "@/assets/2.jpeg"
import sofa2 from "@/assets/6.jpeg"
import bed from "@/assets/26.jpeg"
import bed2 from "@/assets/36.jpeg"
import bed3 from "@/assets/29.jpeg"
import bed4 from "@/assets/13.jpeg"

const GalleryPreview = () => {
  const galleryImages = [
    {
      src: sofa,
      title: "Luxury Sofa Set"
    },
    {
      src: sofa2,
      title: "Modern Design"
    },
    {
      src: bed,
      title: "Elegant Comfort"
    },
    {
      src: bed2,
      title: "Custom Design"
    },
    {
      src: bed3,
      title: "Premium Quality"
    },
    {
      src: bed4,
      title: "Timeless Style"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-accent font-semibold tracking-wider uppercase text-sm">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Explore Our <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Discover our stunning collection of custom sofas and furniture pieces that showcase our craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="font-display text-xl font-semibold text-primary-foreground p-6">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold group"
          >
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
