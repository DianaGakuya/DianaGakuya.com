import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    institution: 'Moringa School',
    degree: 'Software Engineering',
    period: '2023',
    icon: GraduationCap,
    description: 'Comprehensive software engineering bootcamp covering full-stack development, algorithms, and software design patterns.',
  },
  {
    institution: 'Udemy',
    degree: 'Web Development Bootcamp',
    period: '2022',
    icon: BookOpen,
    description: 'Complete web development course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
  },
];

const certifications = [
  'AWS Certified Solutions Architect',
  'Docker & Kubernetes Essentials',
  'Advanced Django Development',
  'Flutter Mobile Development',
  'DevOps & CI/CD Pipelines',
  'IoT Systems Integration',
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-center mb-16">Education & Certifications</h2>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-primary/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{edu.degree}</h3>
                    <div className="text-muted-foreground mb-2">{edu.institution}</div>
                    <div className="text-sm text-primary">{edu.period}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-accent rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-2xl">Professional Certifications</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-card p-4 rounded-lg border border-border hover:border-primary/30 transition-colors flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Committed to continuous learning and staying updated with the latest technologies 
            and best practices in software engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
