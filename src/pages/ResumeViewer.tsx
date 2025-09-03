import React from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap, Code, Github, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const ResumeViewer: React.FC = () => {
  const experience = [
    {
      title: "QA Engineer (National Service Person)",
      company: "AmaliTech Services GmbH",
      period: "October 2024 - Present",
      location: "Accra, Ghana",
      responsibilities: [
        "Conducting manual and automated tests with Selenium, TestNG, JUnit to ensure software quality",
        "Collaborating with development teams using git and GitHub to identify and resolve defects",
        "Documenting test cases, test plans, and reports with Microsoft word and Excel to maintain project transparency"
      ]
    },
    {
      title: "Backend Developer (Intern)",
      company: "AmaliTech Services GmbH",
      period: "September 2023 - November 2023",
      location: "Accra, Ghana",
      responsibilities: [
        "Upskilled in Java and Spring Boot and created a CLI USSD application using Java",
        "Participated in daily stand-up meetings, contributing to the agile development processes, and ensuring project milestones were met"
      ]
    },
    {
      title: "Sales and Logistics Personnel",
      company: "Forewin Ghana Limited",
      period: "October 2022 - December 2022",
      location: "Accra, Ghana",
      responsibilities: [
        "Engaged with potential customers, presented product information persuasively, and closed deals to meet sales targets",
        "Nurtured relationships with existing clients, encouraged repeat business and contributed to the overall success of the sales team"
      ]
    }
  ];

  const projects = [
    {
      name: "AmaliHomes - Furniture & Home Decor E-commerce",
      description: "Vacation rental-style content e-commerce platform built with Angular and integrated with multiple third-party services",
      technologies: ["Angular", "Contentful CMS", "Commerce Layer", "AWS Translate", "Supabase"],
      link: "#"
    },
    {
      name: "Swag Labs – E-Commerce Platform",
      description: "E-commerce platform enabling users to browse, add items to a cart, and check out securely",
      technologies: ["Selenium", "Java", "TestNG", "Cross-browser Testing"],
      link: "https://www.saucedemo.com"
    },
    {
      name: "XYZ Bank App (Selenium Automation)",
      description: "Created and executed automated test scripts using Selenium WebDriver with Java",
      technologies: ["Selenium WebDriver", "Java", "Excel", "Test Planning"],
      link: "#"
    },
    {
      name: "RESTful API Testing",
      description: "Automated API testing with REST Assured, validating CRUD operations",
      technologies: ["REST Assured", "JUnit", "TestNG", "Allure Reports"],
      link: "#"
    },
    {
      name: "GitHub Actions CI Pipeline",
      description: "Set up CI pipeline using GitHub Actions to automate Selenium tests with notifications",
      technologies: ["GitHub Actions", "Selenium", "Email Notifications", "Slack Integration"],
      link: "#"
    },
    {
      name: "Performance Testing with JMeter",
      description: "Assessed web application performance under varying loads, simulating real-world scenarios",
      technologies: ["JMeter", "Performance Testing", "Load Testing", "Analysis"],
      link: "#"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science - Computer Science",
      institution: "University of Cape Coast",
      period: "2021 - 2024",
      location: "Cape Coast, Ghana",
      honors: "Second Class Honors",
      activities: ["Core Member, Python Cape Coast (PyClub)", "CITSA - Core Member"],
      coursework: "Software Engineering, Operating Systems, OOP, Computer Networking, DSA, Database, Programming and Problem Analysis"
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "C++", "HTML", "CSS"],
    "Frameworks": ["Spring Boot", "Selenium", "REST Assured", "JUnit", "TestNG"],
    "Tools & Technologies": ["Postman", "Git & GitHub", "JMeter", "GitHub Actions", "Jira", "Excel", "Docker", "Burp Suite"],
    "Testing Expertise": ["Manual Testing", "Automated Testing", "API Testing", "Performance Testing", "Test Planning", "Bug Tracking"]
  };

  const certifications = [
    { name: "Quality Assurance Engineering", year: "2024" },
    { name: "Java & Spring Boot Development", year: "2023" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Button asChild variant="ghost" size="sm">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="bg-gradient-primary text-white">
              <a href="/RAFIATU_IBRAHIM_CV.pdf" download="Rafiatu_Ibrahim_CV.pdf" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto max-w-4xl py-6 sm:py-8 lg:py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Rafiatu Ibrahim</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">Quality Assurance Engineer</p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:irafiatu44@gmail.com" className="hover:text-primary transition-colors">
                irafiatu44@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>(233) 53 719 289 8</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Accra, Ghana</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            <a 
              href="https://www.linkedin.com/in/rafiatu-ibrahim-b56b94241/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/60 hover:border-primary/40 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              <span className="text-sm">LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://github.com/rafiatu24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/60 hover:border-primary/40 transition-colors"
            >
              <Github className="w-4 h-4 text-primary" />
              <span className="text-sm">GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Professional Summary
          </h2>
          <div className="glass-card p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border/60">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I'm a dedicated Quality Assurance Engineer with over a year of experience in manual and automated 
              testing. I am proficient in test management with Jira(X-ray) Java, Selenium, JUnit, and REST 
              Assured, designing effective test strategies to enhance software quality and user satisfaction. I thrive 
              in collaborative teams, embrace creative problem-solving, and am committed to continuous learning 
              and delivering high-impact, scalable systems.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-border/60">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                    <p className="text-lg font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div className="flex items-center gap-1 justify-start md:justify-end">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1 justify-start md:justify-end mt-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-border/60">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-primary">{project.name}</h3>
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass-card p-6 rounded-xl border border-border/60">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-border/60">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    {edu.honors && <p className="text-sm font-medium text-green-600">{edu.honors}</p>}
                    <div className="text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                    </div>
                    {edu.coursework && (
                      <div className="mt-3">
                        <p className="text-sm font-medium mb-1">Relevant Coursework:</p>
                        <p className="text-xs text-muted-foreground">{edu.coursework}</p>
                      </div>
                    )}
                    {edu.activities && (
                      <div className="mt-3">
                        <p className="text-sm font-medium mb-1">Activities:</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {edu.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-4 rounded-xl border border-border/60">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-xl border border-border/60">
            <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              Interested in discussing opportunities or learning more about my experience?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-primary text-white">
                <Link to="/#contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/RAFIATU_IBRAHIM_CV.pdf" download="Rafiatu_Ibrahim_CV.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;