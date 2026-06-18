import React, { useEffect } from 'react';
import { X, ExternalLink, Award, Zap, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { projectsData } from '../data/projectsData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  projectId: string;
  onClose: () => void;
}

export function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur-md">
      <div className="min-h-screen px-4 py-8">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl md:text-5xl mb-2">{project.title}</h1>
              <p className="text-muted-foreground">{project.year}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-accent"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Tech Stack */}
          <Card className="p-6 mb-8">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <Badge 
                  key={tech}
                  className="bg-primary/10 text-primary-foreground hover:bg-primary/20 px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* My Story */}
          <Card className="p-6 md:p-8 mb-8 bg-accent">
            <h3 className="text-2xl mb-4">My Story 💭</h3>
            <div className="prose prose-lg max-w-none">
              {project.fullStory.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h3 key={index} className="text-xl mt-6 mb-3">
                      {paragraph.replace('##', '').trim()}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-base leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </Card>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.challenges}
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-primary" />
                My Solution
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.solutions}
              </p>
            </Card>
          </div>

          {/* Outcome */}
          <Card className="p-6 md:p-8 bg-primary/5 border-2 border-primary/20">
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              The Outcome
            </h3>
            <p className="text-base leading-relaxed">
              {project.outcome}
            </p>
          </Card>

          {/* Footer */}
          <div className="mt-8 flex justify-center gap-4">
            <Button
              onClick={onClose}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
