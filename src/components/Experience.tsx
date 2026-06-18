import React from 'react';
import { Briefcase, Building2, Zap, Cpu } from 'lucide-react';

const experiences = [
  {
    title: 'Operations Service App Developer',
    company: 'Spiro Kenya',
    period: '2025 – Present',
    icon: Briefcase,
    emoji: '📱',
    description: 'Developing cross-platform operations service application using Flutter and Java.',
  },
  {
    title: 'Software Engineer',
    company: 'Spiro Kenya',
    period: '2025',
    icon: Building2,
    emoji: '💻',
    description: 'Full-stack development and cloud deployment of enterprise solutions.',
  },
  {
    title: 'CTO',
    company: 'Thinking Energy LLC',
    period: '2024 – 2025',
    icon: Zap,
    emoji: '⚡',
    description: 'Led technical strategy and development of IoT monitoring platforms for energy management.',
  },
  {
    title: 'IoT Platform Developer',
    company: 'Thinking Energy',
    period: '2025',
    icon: Cpu,
    emoji: '🔌',
    description: 'Developed real-time IoT monitoring platform with AI-powered analytics.',
  },
  {
    title: 'Software Engineer',
    company: 'AfroSoftware',
    period: '2023 – Present',
    icon: Briefcase,
    emoji: '🚀',
    description: 'Building scalable web and mobile applications using modern tech stack.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl text-center mb-16">Experience</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center z-10">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border hover-sound">
                      <div className="flex items-center gap-2 mb-2 justify-start">
                        <span className="text-2xl">{exp.emoji}</span>
                        <div className="text-sm text-primary">{exp.period}</div>
                      </div>
                      <h3 className="text-xl mb-1">{exp.title}</h3>
                      <div className="text-muted-foreground mb-3">{exp.company}</div>
                      <p className="text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}