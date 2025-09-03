import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Building, User } from "lucide-react";

const testimonials = [
  {
    quote: "Jane's testing strategies transformed our release process. Issues are caught early and collaboration is seamless. Her attention to detail and proactive approach saved us countless hours.",
    author: "Sarah Chen",
    role: "Engineering Manager",
    company: "TechFlow Solutions",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "Her automation suite reduced flakiness to near-zero. Our CI is faster and more trustworthy. Jane's expertise in test automation is unmatched.",
    author: "Michael Rodriguez",
    role: "Tech Lead",
    company: "DataStream Inc",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "Working with Jane elevated our entire quality process. She brought structure, efficiency, and a collaborative mindset that improved our team dynamics.",
    author: "Emily Watson",
    role: "Product Manager",
    company: "InnovateLab",
    rating: 5,
    avatar: "EW"
  }
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0]; index: number }> = ({ testimonial, index }) => {
  return (
    <Card 
      className="group glass-card border border-border/60 hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <CardContent className="p-8">
        {/* Quote Icon */}
        <div className="mb-6">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:scale-110 transition-transform duration-300">
            <Quote className="w-6 h-6" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg leading-relaxed text-muted-foreground mb-6 italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-semibold text-foreground">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <Building className="w-3 h-3" />
              {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gradient">Client Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the teams and leaders who've experienced the impact of strategic quality engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <div className="glass-card p-8 rounded-2xl border border-border/60 shadow-elevated max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Trusted by Industry Leaders</h3>
              <p className="text-muted-foreground">
                Delivering quality excellence across diverse technology stacks and industries
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Bug Detection Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how strategic quality engineering can transform your development process
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-xl font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <User className="w-5 h-5" />
              Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;