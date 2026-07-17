import React from 'react';
import { ExternalLink, Github, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { projectsData } from '../data/projectsData';

export function ListPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo size="sm" />
            <div>
              <div className="text-sm">Diana Gakuya</div>
              <div className="text-xs text-muted-foreground">Software Engineer</div>
            </div>
          </a>
          <Button asChild variant="outline" size="sm">
            <a href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </a>
          </Button>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl mb-4">Projects I've Built</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Every project below is something I've personally designed, built, or led the rebuild of.
            Each entry links to the live site (where one exists) and the GitHub repository (where one
            is public or I have access to share), plus a note on that repo's current status.
          </p>
        </div>

        <div className="space-y-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h2 className="text-xl md:text-2xl">{project.title}</h2>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary-foreground hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.repoStatus && (
                    <div className="flex items-start gap-2 text-xs text-muted-foreground mb-4">
                      {project.githubUrl || project.repoStatus.startsWith('Local') ? (
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      )}
                      <span>{project.repoStatus}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-2" />
                          Visit Site
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild size="sm" variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-2" />
                          View Repo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 pb-8 text-center text-xs text-muted-foreground">
          <p>Full case studies for each project are available on the main portfolio page.</p>
        </div>
      </div>
    </div>
  );
}
