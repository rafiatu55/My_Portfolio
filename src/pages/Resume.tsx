import React from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen py-4 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <Button asChild variant="ghost" size="sm" className="hover-scale">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-gradient">My Resume</span>
            </h1>
          </div>
          <div className="flex gap-3">
            <Button 
              asChild 
              variant="outline" 
              className="flex items-center gap-2 hover-scale"
            >
              <Link to="/resume/view">
                <Eye className="w-4 h-4" />
                View Resume
              </Link>
            </Button>
            <Button 
              asChild 
              className="flex items-center gap-2 hover-scale bg-gradient-primary text-white shadow-glow"
            >
              <a href="/RAFIATU_IBRAHIM_CV.pdf" download="Rafiatu_Ibrahim_CV.pdf" target="_blank">
                <Download className="w-4 h-4" />
                Download
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - PDF Preview */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Resume Preview</h2>
                  <p className="text-sm text-muted-foreground">Rafiatu Ibrahim - Quality Assurance Engineer</p>
                </div>
              </div>
              
              {/* PDF Embed */}
              <div className="relative w-full h-[400px] sm:h-[600px] lg:h-[800px] rounded-lg sm:rounded-xl overflow-hidden border border-border/60">
                <iframe
                  src="/RAFIATU_IBRAHIM_CV.pdf#toolbar=0"
                  className="w-full h-full"
                  title="Rafiatu Ibrahim Resume"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-elevated">
              <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-muted-foreground">Email</div>
                  <a href="mailto:irafiatu44@gmail.com" className="font-medium hover:text-primary transition-colors">
                    irafiatu44@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-muted-foreground">Phone</div>
                  <div className="font-medium">(233) 53 719 289 8</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Location</div>
                  <div className="font-medium">Accra, Ghana</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Availability</div>
                  <div className="font-medium text-green-600">Open to opportunities</div>
                </div>
              </div>
            </div>

            {/* Key Skills */}
            <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-elevated">
              <h3 className="text-lg font-semibold mb-4">Core Competencies</h3>
              <div className="space-y-3">
                {[
                  "Manual Testing",
                  "Automated Testing",
                  "API Testing", 
                  "Performance Testing",
                  "Test Planning",
                  "Bug Tracking",
                  "Quality Assurance",
                  "Test Management"
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-elevated">
              <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "Selenium", 
                  "REST Assured",
                  "JUnit",
                  "TestNG",
                  "Postman",
                  "Jira",
                  "JMeter",
                  "Git & GitHub",
                  "Docker"
                ].map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h4 className="font-semibold mb-3">Let's Connect</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in discussing opportunities or have questions about my experience?
              </p>
              <Button asChild className="w-full bg-gradient-primary text-white">
                <Link to="/#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;