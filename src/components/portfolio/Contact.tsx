import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MapPin, Mail, Clock, Send, ExternalLink, MessageCircle } from "lucide-react";

const LocationMap: React.FC = () => {
  return (
    <div className="relative h-64 rounded-xl overflow-hidden border border-border/60 shadow-elevated">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-gray-300 dark:border-gray-600" />
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
            <div className="relative bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border/60">
          <div className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Accra, Ghana</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Available for remote work
          </div>
        </div>
        
        <button 
          onClick={() => window.open('https://maps.google.com/?q=5.6522756,-0.1372133,15.8', '_blank')}
          className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-border/60 hover:bg-card transition-colors"
          aria-label="Open in Google Maps"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      );
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Ready to elevate your product quality? I'd love to discuss how we can collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 sm:space-y-6 glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-border/60 shadow-elevated"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="user_name"
                    name="user_name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project collaboration opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project and how I can help..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full hover-scale bg-gradient-primary text-white font-medium py-3 px-6 rounded-lg shadow-glow"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:irafiatu44@gmail.com" className="font-medium hover:text-primary">
                    irafiatu44@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60">
                <div className="p-3 rounded-lg bg-green-500/10 text-green-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <a href="https://wa.me/233537192898" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                    +233 53 719 289 8
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                  <div className="font-medium">Within 24 hours</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">My Location</h3>
              <LocationMap />
              <div className="mt-4 p-4 rounded-xl bg-card border border-border/60">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Based in Accra, Ghana</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Available for remote work worldwide • GMT timezone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
