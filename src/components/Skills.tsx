import React from 'react';
import { Badge } from './ui/badge';
import { 
  Code2, Database, Cloud, Smartphone, Cpu, 
  GitBranch, Server, Terminal, Gauge, Globe 
} from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Dart'],
  },
  {
    name: 'Frameworks',
    icon: Server,
    skills: ['Django', 'Flutter', 'React', 'Node.js', 'FastAPI'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'CI/CD', 'Terraform', 'Kubernetes'],
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    skills: ['Flutter', 'React Native', 'iOS', 'Android', 'Cross-Platform'],
  },
  {
    name: 'IoT & AI',
    icon: Cpu,
    skills: ['IoT Systems', 'AI Integration', 'Real-time Tracking', 'Monitoring'],
  },
  {
    name: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'MySQL'],
  },
  {
    name: 'Tools',
    icon: Terminal,
    skills: ['Git', 'GitHub Actions', 'VS Code', 'Postman', 'Jira'],
  },
  {
    name: 'API Development',
    icon: Globe,
    skills: ['REST API', 'GraphQL', 'WebSocket', 'API Design', 'Microservices'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-5xl text-center mb-6">Skills & Expertise</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 text-foreground transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-accent rounded-2xl">
            <div className="text-3xl md:text-4xl mb-2 text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 bg-accent rounded-2xl">
            <div className="text-3xl md:text-4xl mb-2 text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Frameworks</div>
          </div>
          <div className="text-center p-6 bg-accent rounded-2xl">
            <div className="text-3xl md:text-4xl mb-2 text-primary">20+</div>
            <div className="text-sm text-muted-foreground">AWS Services</div>
          </div>
          <div className="text-center p-6 bg-accent rounded-2xl">
            <div className="text-3xl md:text-4xl mb-2 text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
}
