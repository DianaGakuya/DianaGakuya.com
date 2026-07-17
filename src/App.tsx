import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { PhotoGallery } from './components/PhotoGallery';
import { Interests } from './components/Interests';
import { GitHubSection } from './components/GitHubSection';
import { Blog } from './components/Blog';
import { MiniGames } from './components/MiniGames';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { CatGifAboveAchievements } from './components/CatGifAboveAchievements';
import { ListPage } from './components/ListPage';
import { Toaster } from './components/ui/sonner';
import './styles/globals.css';

export default function App() {
  if (window.location.pathname === '/list') {
    return (
      <div className="min-h-screen">
        <ListPage />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <AudioPlayer />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CatGifAboveAchievements />
        <Achievements />
        <Education />
        <PhotoGallery />
        <Interests />
        <GitHubSection />
        <Blog />
        <MiniGames />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}