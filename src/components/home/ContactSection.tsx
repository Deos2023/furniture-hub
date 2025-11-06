import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = `Hello! I'm ${formData.name}. ${formData.message} Please contact me at ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/917003375256?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to send your message..."
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Contact <span className="text-gradient-gold">Furniture Hub</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Ready to create your dream furniture? Get in touch with us today for a custom quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-body font-medium text-foreground block mb-2">
                  Your Name
                </label>
                <Input 
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="font-body"
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-body font-medium text-foreground block mb-2">
                  Phone Number
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="font-body"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-body font-medium text-foreground block mb-2">
                  Your Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your furniture needs..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="font-body resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold"
              >
                Send Message via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">Phone</p>
                  <a href="tel:+917003375256" className="font-body text-muted-foreground hover:text-accent transition-colors">
                    +91 7003375256
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">Email</p>
                  <a href="mailto:salauddin.gaffar@gmail.com" className="font-body text-muted-foreground hover:text-accent transition-colors">
                    salauddin.gaffar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">Location</p>
                  <p className="font-body text-muted-foreground">
                    9/C Topsia Road, Near Bengal Motor Rex, Kustia, Kolkata – 700039
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1678195428085!2d88.3839318!3d22.5353854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f07c9d5331%3A0xb179d17465cd394d!2sFurniture%20Hubs%20I%20Best%20Sofa%20Manufacturer%20in%20Kolkata-Park%20Circus-Mallickbazzar!5e0!3m2!1sen!2sin!4v1762427132270!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
