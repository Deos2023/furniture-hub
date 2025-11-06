import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img src={logo} alt="Furniture Hub" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="font-body text-sm opacity-90 leading-relaxed">
              Kolkata's premier sofa manufacturer offering premium custom sofas and elegant furniture. Quality craftsmanship since inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2 opacity-90">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>9/C Topsia Road, Near Bengal Motor Rex, Kustia, Kolkata – 700039</span>
              </li>
              <li className="flex items-center gap-2 opacity-90 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+917003375256">+91 7003375256</a>
              </li>
              <li className="flex items-center gap-2 opacity-90 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:salauddin.gaffar@gmail.com">salauddin.gaffar@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="font-body text-sm opacity-90">
            © {new Date().getFullYear()} Furniture Hub. All rights reserved. | Designed with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
