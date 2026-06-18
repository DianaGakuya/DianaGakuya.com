import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Briefcase } from 'lucide-react';
import profileImage from 'figma:asset/9c2db085165f38ba88d641e23748aec07d9cb02d.png';
import braidsImage from 'figma:asset/03bf4021c104356baae95af0255daf3aed51aae7.png';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Vibe Coder', 'Front End Developer', 'Designer'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [profileImage, braidsImage];

  const skills = ['Figma Designer', 'Front End Developer', 'Flutter Developer', 'UI/UX Designer'];
  const fullText = skills.join(' | ');

  // Typing animation for skills
  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullText]);

  // Rotating title animation
  useEffect(() => {
    const titleTimer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(titleTimer);
  }, []);

  // Image rotation animation
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageTimer);
  }, []);

  const techIcons = [
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Django', icon: '🎸' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'var(--pink-gradient)',
        }}
      />
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {techIcons.map((tech, index) => (
          <div
            key={tech.name}
            className="absolute animate-float"
            style={{
              left: `${15 + index * 15}%`,
              top: `${20 + (index % 3) * 25}%`,
              animationDelay: `${index * 0.5}s`,
              fontSize: '2rem',
              opacity: 0.4,
            }}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Portrait with animation */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Diana Gakuya"
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              {/* Decorative pink ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl mb-4">
              Diana Gakuya
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 min-h-[3rem] flex items-center justify-center md:justify-start">
              <span className="animate-fade-in">{titles[titleIndex]}</span>
            </h2>
            <p className="text-lg md:text-xl text-primary mb-8 max-w-2xl min-h-[2rem]">
              {displayedText}
              <span className="animate-blink">|</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover-sound"
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
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary hover:bg-primary/10 hover-sound"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }
      `}</style>
    </section>
  );
}