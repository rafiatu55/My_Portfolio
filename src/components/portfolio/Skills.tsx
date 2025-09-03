import React, { useEffect, useRef, useState } from "react";
import { Bug, FlaskConical, Network, Settings2, Workflow, ClipboardCheck, Code, TestTube, Zap, Target } from "lucide-react";

type Skill = { 
  name: string; 
  level: number; 
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  category: string;
  description: string;
};

const skills: Skill[] = [
  { name: "Manual Testing", level: 95, Icon: TestTube, category: "Testing", description: "Comprehensive manual testing" },
  { name: "Selenium", level: 90, Icon: Settings2, category: "Automation", description: "Web UI automation" },
  { name: "Java", level: 85, Icon: Code, category: "Programming", description: "Backend development & testing" },
  { name: "REST Assured", level: 88, Icon: Network, category: "API Testing", description: "API testing & validation" },
  { name: "JUnit/TestNG", level: 85, Icon: Workflow, category: "Automation", description: "Unit & integration testing" },
  { name: "Jira", level: 92, Icon: Bug, category: "Management", description: "Issue tracking & X-ray" },
  { name: "JMeter", level: 80, Icon: Zap, category: "Performance", description: "Load & performance testing" },
  { name: "Postman", level: 90, Icon: ClipboardCheck, category: "API Testing", description: "API testing & documentation" },
  { name: "Git & GitHub", level: 88, Icon: FlaskConical, category: "Technical", description: "Version control & CI/CD" },
];

const categories = [
  { name: "Manual Testing", icon: TestTube, color: "from-blue-500 to-cyan-500" },
  { name: "Test Automation", icon: Code, color: "from-green-500 to-emerald-500" },
  { name: "API Testing", icon: Network, color: "from-yellow-500 to-orange-500" },
  { name: "Quality Assurance", icon: Target, color: "from-purple-500 to-pink-500" },
];

const ProgressBar: React.FC<{ value: number; animated: boolean }> = ({ value, animated }) => {
  return (
    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
        style={{ width: animated ? `${value}%` : '0%' }}
      />
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill; animated: boolean; index: number }> = ({ skill, animated, index }) => {
  return (
    <div 
      className="group glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/60 shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:scale-110 transition-transform duration-300">
            <skill.Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{skill.description}</p>
          </div>
        </div>
        <span className="text-xl sm:text-2xl font-bold text-primary">{skill.level}%</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="font-medium">{skill.category}</span>
        </div>
        <ProgressBar value={skill.level} animated={animated} />
      </div>
    </div>
  );
};

const CategoryCard: React.FC<{ category: typeof categories[0]; index: number }> = ({ category, index }) => {
  return (
    <div 
      className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/60 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <category.icon className="w-8 h-8" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
      <p className="text-sm text-muted-foreground">Specialized expertise in modern {category.name.toLowerCase()} practices</p>
    </div>
  );
};

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Comprehensive testing capabilities across modern development stacks
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} animated={visible} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl border border-border/60 shadow-elevated max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Test Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
