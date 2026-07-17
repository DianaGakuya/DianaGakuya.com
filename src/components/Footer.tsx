import React from 'react';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { CatGif } from './CatGif';
import { projectsData } from '../data/projectsData';

export function Footer() {
  const liveSites = projectsData.filter((p) => p.liveUrl);
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/DianaGakuya',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/diana-gakuya-643418195/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:deegakuya@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-accent border-t border-border">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="sm" />
              <div>
                <div className="text-lg">Diana Gakuya</div>
                <div className="text-sm text-muted-foreground">Software Engineer</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Building innovative solutions with modern technologies. 
              Passionate about creating impact through code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h4>Let's Connect</h4>
              <CatGif size="sm" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Follow me on social media or send me an email to discuss your next project.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Websites I've Built */}
        <div className="pt-8 border-t border-border">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h4>Websites I've Built</h4>
            <a
              href="/list"
              className="text-sm text-primary hover:underline"
            >
              See full project list →
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {liveSites.map((project) => (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary-foreground hover:bg-primary/20 transition-colors"
              >
                {project.title}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Diana Gakuya. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}