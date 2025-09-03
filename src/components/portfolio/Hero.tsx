import React, { useEffect, useRef, useState } from "react";
import profile from "@/assets/img1.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle, Linkedin, Instagram, Mail, Download, ArrowRight, Star, Award, Users } from "lucide-react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const py = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.setProperty('--px', String(px));
      el.style.setProperty('--py', String(py));
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [reduced]);

  const achievements = [
    { icon: Award, label: "1+ Year", sublabel: "Experience" },
    { icon: Users, label: "6+ Projects", sublabel: "Delivered" },
    { icon: Star, label: "95%", sublabel: "Test Coverage" },
  ];

  return (
    <header id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for new opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="text-gradient">Quality Engineer</span>
                <br />
                <span className="text-foreground">Crafting Excellence</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed">
                I transform complex software challenges into reliable, user-centric solutions through 
                strategic testing, automation excellence, and collaborative quality engineering.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="hover-scale bg-gradient-primary text-white shadow-glow">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <a href="/RAFIATU_IBRAHIM_CV.pdf" target="_blank" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-medium">Specialized in</p>
              <div className="flex flex-wrap gap-3">
                {["Java", "Selenium", "REST Assured", "JUnit", "TestNG", "JMeter"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-sm font-medium border border-primary/20 hover:border-primary/40 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { href: "https://www.linkedin.com/in/rafiatu-ibrahim-b56b94241/", icon: Linkedin, label: "LinkedIn" },
                // { href: "https://instagram.com/jane.qa", icon: Instagram, label: "Instagram" },
                { href: "mailto:irafiatu44@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Section */}
          <div className="relative">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" aria-hidden />
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl border-2 border-border/60 shadow-elevated overflow-hidden bg-gradient-to-br from-card to-card/50"
                style={{
                  transform: reduced ? undefined : `translate3d(calc(var(--px,0)*8px), calc(var(--py,0)*-8px), 0)`
                }}
              >
                <img
                  src={profile}
                  alt="Professional portrait of Rafiatu Ibrahim, QA Engineer"
                  className="w-full h-full object-cover"
                  decoding="async"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 sm:-right-8">
              <div 
                className="glass-card p-4 rounded-xl border border-border/60 shadow-elevated"
                style={{ transform: reduced ? undefined : `translate3d(calc(var(--px,0)*-12px), calc(var(--py,0)*6px), 0)` }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm font-medium">All Tests Passed</div>
                    <div className="text-xs text-muted-foreground">Latest Build</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 sm:-left-8">
              <div 
                className="glass-card p-4 rounded-xl border border-border/60 shadow-elevated"
                style={{ transform: reduced ? undefined : `translate3d(calc(var(--px,0)*8px), calc(var(--py,0)*-4px), 0)` }}
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Quality Expert</div>
                    <div className="text-xs text-muted-foreground">Certified Professional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 lg:mt-24">
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="text-center p-6 glass-card rounded-2xl border border-border/60 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-4">
                  <achievement.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
