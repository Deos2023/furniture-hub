import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = `Hello! I'm ${formData.name}.\n\nSubject: ${formData.subject || 'Furniture Inquiry'}\n\nMessage: ${formData.message}\n\nContact Details:\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}`;
    const whatsappUrl = `https://wa.me/917003375256?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to send your message..."
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 leading-relaxed">
              Get in touch with us for custom furniture solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-body font-medium text-foreground block mb-2">
                      Your Name *
                    </label>
                    <Input 
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="font-body"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-body font-medium text-foreground block mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="font-body"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="font-body font-medium text-foreground block mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="font-body"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="font-body font-medium text-foreground block mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="font-body"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-body font-medium text-foreground block mb-2">
                    Your Message *
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your furniture needs..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="font-body resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold"
                  size="lg"
                >
                  Send Message via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                  Have questions about our custom furniture? Want to discuss your project? We're here to help. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border-2 border-border hover-lift">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+917003375256" className="font-body text-muted-foreground hover:text-accent transition-colors">
                      +91 7003375256
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border-2 border-border hover-lift">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:salauddin.gaffar@gmail.com" className="font-body text-muted-foreground hover:text-accent transition-colors break-all">
                      salauddin.gaffar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border-2 border-border hover-lift">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-semibold text-foreground mb-1">Location</p>
                    <p className="font-body text-muted-foreground">
                      9/C Topsia Road, Near Bengal Motor Rex, Kustia, Kolkata – 700039
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border-2 border-border hover-lift">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-semibold text-foreground mb-1">Business Hours</p>
                    <p className="font-body text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
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
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
