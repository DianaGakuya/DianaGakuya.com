import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); // Start with music ON by default
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Playful calming melody - C Major scale based progression
  const melody = [
    // Phrase 1
    { note: 'C4', duration: 0.4 },
    { note: 'E4', duration: 0.4 },
    { note: 'G4', duration: 0.4 },
    { note: 'E4', duration: 0.4 },
    // Phrase 2
    { note: 'F4', duration: 0.4 },
    { note: 'A4', duration: 0.4 },
    { note: 'C5', duration: 0.4 },
    { note: 'A4', duration: 0.4 },
    // Phrase 3
    { note: 'G4', duration: 0.4 },
    { note: 'B4', duration: 0.4 },
    { note: 'D5', duration: 0.4 },
    { note: 'B4', duration: 0.4 },
    // Phrase 4 - resolution
    { note: 'C5', duration: 0.4 },
    { note: 'G4', duration: 0.4 },
    { note: 'E4', duration: 0.4 },
    { note: 'C4', duration: 0.8 },
  ];

  // Note frequencies for piano
  const noteFrequencies: { [key: string]: number } = {
    'C4': 261.63,
    'D4': 293.66,
    'E4': 329.63,
    'F4': 349.23,
    'G4': 392.00,
    'A4': 440.00,
    'B4': 493.88,
    'C5': 523.25,
    'D5': 587.33,
    'E5': 659.25,
  };

  // Initialize audio context
  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    gainNodeRef.current = audioContextRef.current.createGain();
    gainNodeRef.current.connect(audioContextRef.current.destination);
    gainNodeRef.current.gain.value = isMuted ? 0 : 0.15; // Subtle volume

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Play a single piano note
  const playNote = (frequency: number, duration: number, startTime: number) => {
    if (!audioContextRef.current || !gainNodeRef.current) return;

    const oscillator = audioContextRef.current.createOscillator();
    const noteGain = audioContextRef.current.createGain();

    oscillator.type = 'sine'; // Piano-like tone
    oscillator.frequency.value = frequency;

    // ADSR envelope for piano-like sound
    const attackTime = 0.02;
    const decayTime = 0.1;
    const sustainLevel = 0.7;
    const releaseTime = 0.3;

    noteGain.gain.setValueAtTime(0, startTime);
    noteGain.gain.linearRampToValueAtTime(1, startTime + attackTime);
    noteGain.gain.linearRampToValueAtTime(sustainLevel, startTime + attackTime + decayTime);
    noteGain.gain.setValueAtTime(sustainLevel, startTime + duration - releaseTime);
    noteGain.gain.linearRampToValueAtTime(0, startTime + duration);

    oscillator.connect(noteGain);
    noteGain.connect(gainNodeRef.current);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  };

  // Play the melody in a loop
  const startMelody = () => {
    if (!audioContextRef.current || !isPlaying) return;

    let currentTime = audioContextRef.current.currentTime;
    let noteIndex = 0;
    let isActive = true; // Track if this melody loop should continue

    const playNextNote = () => {
      if (!audioContextRef.current || !isActive || !isPlaying) return;

      const { note, duration } = melody[noteIndex];
      const frequency = noteFrequencies[note];
      
      currentTime = audioContextRef.current.currentTime;
      playNote(frequency, duration, currentTime);

      noteIndex = (noteIndex + 1) % melody.length;

      // Schedule next note
      setTimeout(playNextNote, duration * 1000);
    };

    playNextNote();

    // Return cleanup function
    return () => {
      isActive = false;
    };
  };

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    
    if (isPlaying) {
      cleanup = startMelody();
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, [isPlaying]);

  // Update mute state
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = isMuted ? 0 : 0.15;
    }
  }, [isMuted]);

  // Hover sound effects
  useEffect(() => {
    const playHoverSound = () => {
      if (isMuted || !audioContextRef.current || !gainNodeRef.current) return;
      
      const oscillator = audioContextRef.current.createOscillator();
      const hoverGain = audioContextRef.current.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.value = 800;
      
      hoverGain.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
      hoverGain.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1);
      
      oscillator.connect(hoverGain);
      hoverGain.connect(audioContextRef.current.destination);
      
      oscillator.start();
      oscillator.stop(audioContextRef.current.currentTime + 0.1);
    };

    const playClickSound = () => {
      if (isMuted || !audioContextRef.current || !gainNodeRef.current) return;
      
      const oscillator = audioContextRef.current.createOscillator();
      const clickGain = audioContextRef.current.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.value = 1200;
      
      clickGain.gain.setValueAtTime(0.15, audioContextRef.current.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.08);
      
      oscillator.connect(clickGain);
      clickGain.connect(audioContextRef.current.destination);
      
      oscillator.start();
      oscillator.stop(audioContextRef.current.currentTime + 0.08);
    };

    const addHoverSound = () => {
      const elements = document.querySelectorAll('.hover-sound');
      elements.forEach((element) => {
        element.addEventListener('mouseenter', playHoverSound);
      });
    };

    const addClickSound = () => {
      const clickableElements = document.querySelectorAll('.hover-sound, button, a[href^="#"]');
      clickableElements.forEach((element) => {
        element.addEventListener('click', playClickSound);
      });
    };

    addHoverSound();
    addClickSound();
    
    const observer = new MutationObserver(() => {
      addHoverSound();
      addClickSound();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const elements = document.querySelectorAll('.hover-sound');
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', playHoverSound);
      });
      const clickableElements = document.querySelectorAll('.hover-sound, button, a[href^="#"]');
      clickableElements.forEach((element) => {
        element.removeEventListener('click', playClickSound);
      });
    };
  }, [isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Expose mute function globally for the mute button in navigation
  useEffect(() => {
    (window as any).toggleAudioMute = toggleMute;
    (window as any).isAudioMuted = isMuted;
  }, [isMuted]);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex gap-3">
      <Button
        onClick={togglePlay}
        size="icon"
        className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:scale-110 transition-transform"
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </Button>
    </div>
  );
}