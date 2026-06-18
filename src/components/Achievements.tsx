import React from 'react';
import { Card } from './ui/card';
import { TrendingUp, Rocket, Zap, Award } from 'lucide-react';

const achievements = [
  {
    icon: TrendingUp,
    metric: '30%',
    label: 'System Reliability',
    description: 'Improved system uptime and performance',
    color: 'text-green-500',
  },
  {
    icon: Rocket,
    metric: '3',
    label: 'Cross-Platform Products',
    description: 'Successfully launched and deployed',
    color: 'text-blue-500',
  },
  {
    icon: Zap,
    metric: '40%',
    label: 'Deployment Time',
    description: 'Reduced through CI/CD automation',
    color: 'text-yellow-500',
  },
  {
    icon: Award,
    metric: '20+',
    label: 'AWS Services Managed',
    description: 'Cloud infrastructure expertise',
    color: 'text-purple-500',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-accent">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-5xl text-center mb-6">Achievements</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Measurable impact and proven results
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30 bg-card"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                </div>
                
                <div className="text-4xl md:text-5xl mb-2 text-primary">
                  {achievement.metric}
                </div>
                
                <h3 className="text-lg mb-2">
                  {achievement.label}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h3 className="text-2xl text-center mb-8">Key Contributions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-3">🏆</div>
              <h4 className="mb-2">Technical Leadership</h4>
              <p className="text-sm text-muted-foreground">
                Led teams as CTO at Thinking Energy LLC
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">💡</div>
              <h4 className="mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Implemented AI-powered IoT monitoring solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🌍</div>
              <h4 className="mb-2">Impact</h4>
              <p className="text-sm text-muted-foreground">
                Deployed solutions serving thousands of users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
