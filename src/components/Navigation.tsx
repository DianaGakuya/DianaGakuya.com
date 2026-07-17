import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { CatGif } from './CatGif';
import { MuteButton } from './MuteButton';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'All Projects', href: '/list' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <Logo size="sm" />
              <div>
                <div className="text-sm">Diana Gakuya</div>
                <div className="text-xs text-muted-foreground">Software Engineer</div>
                <div className="text-xs mt-1" style={{ color: '#E91E63' }}>
                  aka Dee
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <Button
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-accent hover-sound"
                  onClick={() => {
                    // Download CV
                    const link = document.createElement('a');
                    link.href = '/DianaGakuyaResume.pdf';
                    link.download = 'DianaGakuyaResume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download CV
                </Button>
                <div className="flex items-center gap-2">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground hover-sound"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Hire Dee
                  </Button>
                  <CatGif size="sm" />
                  <MuteButton />
                </div>
              </div>
              
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-md pt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-2xl hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}