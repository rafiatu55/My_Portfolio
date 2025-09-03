import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Zap, CheckCircle, AlertTriangle } from "lucide-react";

const cases = [
  {
    title: "AmaliHomes E-commerce",
    description: "Furniture & Home Decor platform testing",
    before: "Complex multi-service integration challenges",
    after: "Seamless Angular app with third-party services",
    impact: "Successful platform launch with multiple integrations",
    kpis: ["Angular", "Contentful CMS", "AWS Translate"],
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    metrics: { services: "4+", testing: "E2E", platform: "Web" }
  },
  {
    title: "Swag Labs Automation",
    description: "E-commerce platform test automation",
    before: "Manual testing bottlenecks",
    after: "Comprehensive Selenium test suite",
    impact: "Automated checkout flow validation",
    kpis: ["Selenium", "Java", "TestNG"],
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    metrics: { automation: "90%", coverage: "Full", framework: "Selenium" }
  },
  {
    title: "RESTful API Testing",
    description: "Comprehensive API validation suite",
    before: "Manual API testing inefficiencies",
    after: "Automated CRUD operations testing",
    impact: "Reliable API quality with automated reports",
    kpis: ["REST Assured", "JUnit", "Allure Reports"],
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    metrics: { operations: "CRUD", reports: "Allure", framework: "REST Assured" }
  },
];

const ProjectCard: React.FC<{ project: typeof cases[0]; index: number }> = ({ project, index }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-border/60">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
            <project.icon className="w-6 h-6" />
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-1">Case Study #{index + 1}</div>
            <div className="flex items-center gap-1 text-xs text-primary">
              <CheckCircle className="w-3 h-3" />
              <span>Completed</span>
            </div>
          </div>
        </div>
        <CardTitle className="text-lg sm:text-xl mt-4">{project.title}</CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Before/After Comparison */}
        <div className="relative">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-medium text-red-700 dark:text-red-300 mb-1">Before</div>
                <p className="text-sm text-red-600 dark:text-red-400">{project.before}</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-medium text-green-700 dark:text-green-300 mb-1">After</div>
                <p className="text-sm text-green-600 dark:text-green-400">{project.after}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center p-3 rounded-lg bg-muted/50">
              <div className="text-lg font-bold text-primary">{value}</div>
              <div className="text-xs text-muted-foreground capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.kpis.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Impact */}
        <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Business Impact</span>
          </div>
          <p className="text-sm text-muted-foreground">{project.impact}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Real-world impact through strategic quality assurance and testing excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cases.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl border border-border/60 shadow-elevated max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Quality Process?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how strategic testing can elevate your product quality and user experience.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
