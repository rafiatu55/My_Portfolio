import React from "react";
import { Target, Users, Lightbulb, Heart, Code, Shield, Zap, Globe } from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Precision-Driven",
      description: "Every test case is crafted with meticulous attention to detail and strategic thinking.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Building bridges between development, product, and design teams for unified quality.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focused",
      description: "Constantly exploring new testing methodologies and automation frameworks.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every quality decision is made with the end-user experience at the forefront.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const expertise = [
    {
      icon: Code,
      title: "Test Automation",
      skills: ["Selenium WebDriver", "REST Assured", "JUnit", "TestNG", "GitHub Actions"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      skills: ["Manual Testing", "Test Planning", "Bug Tracking", "Test Documentation"]
    },
    {
      icon: Zap,
      title: "Performance",
      skills: ["JMeter", "Load Testing", "Performance Analysis", "Bottleneck Identification"]
    },
    {
      icon: Globe,
      title: "Development",
      skills: ["Java", "Spring Boot", "Python", "C++", "Git & GitHub"]
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                <span className="text-gradient">About Me</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  I'm a dedicated Quality Assurance Engineer with over a year of experience in manual and automated 
                  testing. I am proficient in test management with Jira(X-ray) Java, Selenium, JUnit, and REST 
                  Assured, designing effective test strategies to enhance software quality and user satisfaction.
                </p>
                <p className="text-muted-foreground">
                  I thrive in collaborative teams, embrace creative problem-solving, and am committed to continuous learning 
                  and delivering high-impact, scalable systems. My experience spans from backend development to comprehensive 
                  quality assurance across various platforms.
                </p>
                <p className="text-muted-foreground">
                  Currently serving as a QA Engineer at AmaliTech Services GmbH, I focus on ensuring software quality 
                  through strategic testing approaches and cross-functional collaboration.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                    className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-card border border-border/60 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
              <div className="space-y-6">
                {expertise.map((area, index) => (
                  <div 
                    key={area.title}
                    className="group p-6 rounded-2xl bg-card border border-border/60 hover:shadow-md transition-all duration-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        <area.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-3">{area.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h4 className="font-semibold text-lg mb-3">Beyond Testing</h4>
              <p className="text-muted-foreground mb-4">
                When I'm not ensuring software quality, you'll find me contributing to tech communities, 
                participating in Python Cape Coast (PyClub), and staying updated with the latest testing methodologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python Community Member", "CITSA Core Member", "Continuous Learner", "Team Collaborator"].map((trait) => (
                  <span key={trait} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;