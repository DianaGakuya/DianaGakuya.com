import React from 'react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from 'figma:asset/9c2db085165f38ba88d641e23748aec07d9cb02d.png';
import gradImage1 from 'figma:asset/f7b9e7f3ccf3b8391d4b10fb39e8c36dad378a1c.png';
import gradImage2 from 'figma:asset/9d213150c6c7fa0a0005e5778517109988416e3a.png';

export function About() {
  const highlights = [
    'Python', 'Java', 'JavaScript', 'Flutter', 'Django', 
    'DevOps', 'Cloud Deployment', 'AI-IoT Systems'
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-center mb-12">About Dee</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Innovative and results-oriented Software Engineer skilled in{' '}
              {highlights.slice(0, 4).map((skill, index) => (
                <span key={skill}>
                  <span className="px-2 py-1 bg-primary/20 text-primary-foreground rounded">
                    {skill}
                  </span>
                  {index < 3 && ', '}
                </span>
              ))}.
            </p>
            <p className="text-lg leading-relaxed">
              Experienced in backend, frontend, mobile,{' '}
              <span className="px-2 py-1 bg-primary/20 text-primary-foreground rounded">
                DevOps
              </span>
              ,{' '}
              <span className="px-2 py-1 bg-primary/20 text-primary-foreground rounded">
                cloud deployment
              </span>
              , debugging and{' '}
              <span className="px-2 py-1 bg-primary/20 text-primary-foreground rounded">
                AI-IoT systems
              </span>
              .
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-2xl mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </Card>
            </div>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
              <img
                src={profileImage}
                alt="Diana at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
              <img
                src={gradImage1}
                alt="Diana graduation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
              <img
                src={gradImage2}
                alt="Diana graduation celebration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}