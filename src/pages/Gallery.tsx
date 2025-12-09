import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, Play, Image as ImageIcon } from "lucide-react";

// Import all numeric images (1-40)
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";
import img10 from "@/assets/10.jpeg";
import img11 from "@/assets/11.jpeg";
import img12 from "@/assets/12.jpeg";
import img13 from "@/assets/13.jpeg";
import img14 from "@/assets/14.jpeg";
import img15 from "@/assets/15.jpeg";
import img16 from "@/assets/16.jpeg";
import img17 from "@/assets/17.jpeg";
import img18 from "@/assets/18.jpeg";
import img19 from "@/assets/19.jpeg";
import img20 from "@/assets/20.jpeg";
import img21 from "@/assets/21.jpeg";
import img22 from "@/assets/22.jpeg";
import img23 from "@/assets/23.jpeg";
import img24 from "@/assets/24.jpeg";
import img25 from "@/assets/25.jpeg";
import img26 from "@/assets/26.jpeg";
import img27 from "@/assets/27.jpeg";
import img28 from "@/assets/28.jpeg";
import img29 from "@/assets/29.jpeg";
import img30 from "@/assets/30.jpeg";
import img31 from "@/assets/31.jpeg";
import img32 from "@/assets/32.jpeg";
import img33 from "@/assets/33.jpeg";
import img34 from "@/assets/34.jpeg";
import img35 from "@/assets/35.jpeg";
import img36 from "@/assets/36.jpeg";
import img37 from "@/assets/37.jpeg";
import img38 from "@/assets/38.jpeg";
import img39 from "@/assets/39.jpeg";
import img40 from "@/assets/40.jpeg";

// Import hero image
// import heroImage from "@/assets/hero-sofa.jpg";

// // Import logo
// import logoImage from "@/assets/logo.jpeg";

// Import WhatsApp images
import whatsapp00 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.00.jpeg";
import whatsapp01 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.01.jpeg";
import whatsapp02 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.02.jpeg";
import whatsapp03_1 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.03 (1).jpeg";
import whatsapp03 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.03.jpeg";
import whatsapp04 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.04.jpeg";
import whatsapp05 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.05.jpeg";
import whatsapp06 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.06.jpeg";
import whatsapp07 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.07.jpeg";
import whatsapp08 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.08.jpeg";
import whatsapp09 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.09.jpeg";
import whatsapp10 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.10.jpeg";
import whatsapp11 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.11.jpeg";
import whatsapp12 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.12.jpeg";
import whatsapp14_1 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.14 (1).jpeg";
import whatsapp14 from "@/assets/WhatsApp Image 2025-12-09 at 13.27.14.jpeg";

// Import WhatsApp videos
import video59 from "@/assets/WhatsApp Video 2025-12-09 at 13.26.59.mp4";
import video00 from "@/assets/WhatsApp Video 2025-12-09 at 13.27.00.mp4";
import video15 from "@/assets/WhatsApp Video 2025-12-09 at 13.27.15.mp4";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null);

  // Array of all numeric images
  const numericImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40
  ];

  // Array of all WhatsApp images
  const whatsappImages = [
    whatsapp00, whatsapp01, whatsapp02, whatsapp03_1, whatsapp03,
    whatsapp04, whatsapp05, whatsapp06, whatsapp07, whatsapp08,
    whatsapp09, whatsapp10, whatsapp11, whatsapp12, whatsapp14_1, whatsapp14
  ];

  // Array of all videos
  const videos = [video59, video00, video15];

  // Format all media with metadata
  const allMedia = [
    // Hero image
    // Numeric images (1-40)
    ...numericImages.map((src, index) => ({
      src,
      title: `Premium Sofa Collection ${index + 1}`,
      category: index % 4 === 0 ? "Living Room" : 
               index % 4 === 1 ? "Contemporary" : 
               index % 4 === 2 ? "Sectionals" : "Custom Design",
      type: "image" as const
    })),
    // WhatsApp images
    ...whatsappImages.map((src, index) => ({
      src,
      title: `Showcase ${index + 41}`,
      category: index % 3 === 0 ? "Modern Design" : 
               index % 3 === 1 ? "Premium Quality" : "Handcrafted",
      type: "image" as const
    })),
    // Videos
    ...videos.map((src, index) => ({
      src,
      title: `Product Showcase Video ${index + 1}`,
      category: "Video Tour",
      type: "video" as const,
      thumbnail: numericImages[index + 35] // Using last few images as thumbnails
    }))
  ];

  const handleMediaClick = (src: string, type: "image" | "video", thumbnail?: string) => {
    setSelectedMedia(src);
    setMediaType(type);
  };

  const handleClose = () => {
    setSelectedMedia(null);
    setMediaType(null);
  };

  // Filter categories for the tabs
  const categories = ["All", "Living Room", "Contemporary", "Sectionals", "Custom Design", "Modern Design", "Premium Quality", "Handcrafted", "Video Tour", "Featured", "Brand"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMedia = activeCategory === "All" 
    ? allMedia 
    : allMedia.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Gallery</span>
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Explore our complete collection of {allMedia.length} handcrafted sofas and furniture pieces
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-body text-lg font-semibold">
                  {allMedia.filter(m => m.type === "image").length} Photos
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-body text-lg font-semibold">
                  {allMedia.filter(m => m.type === "video").length} Videos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background/50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {category}
                <span className="ml-1 opacity-75">
                  ({category === "All" ? allMedia.length : allMedia.filter(m => m.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMedia.map((item, index) => (
              <div 
                key={index}
                onClick={() => handleMediaClick(item.src, item.type, 'thumbnail' in item ? item.thumbnail : undefined)}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer"
              >
                {item.type === "image" ? (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    {'thumbnail' in item && item.thumbnail ? (
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === "video" ? (
                      <Play className="w-4 h-4 text-accent fill-accent" />
                    ) : (
                      <ImageIcon className="w-4 h-4 text-accent" />
                    )}
                    <span className="font-body text-xs text-accent font-semibold tracking-wider uppercase">
                      {item.category}
                    </span>
                  </div>
                  <p className="font-display text-sm font-semibold text-primary-foreground line-clamp-2">
                    {item.title}
                  </p>
                  <p className="font-body text-xs text-primary-foreground/80 mt-1">
                    {item.type === "video" ? "Click to play video" : "Click to enlarge"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && mediaType && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={handleClose}
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-7xl max-h-[90vh] w-full flex items-center justify-center">
            {mediaType === "image" ? (
              <img 
                src={selectedMedia} 
                alt="Gallery" 
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video 
                src={selectedMedia} 
                controls
                autoPlay
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;