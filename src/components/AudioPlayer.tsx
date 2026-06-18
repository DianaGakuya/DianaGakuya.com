import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); // Start with music ON by default
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Flowing, calming piano melody - Arpeggios that sustain and overlay (sustain pedal effect)
  const melody = [
    // Phrase 1: Cmaj7 flowing arpeggio
    { note: 'C4', duration: 0.6 },
    { note: 'G4', duration: 0.6 },
    { note: 'C5', duration: 0.6 },
    { note: 'E5', duration: 0.6 },
    
    // Phrase 2: Fmaj7 flowing arpeggio
    { note: 'F4', duration: 0.6 },
    { note: 'A4', duration: 0.6 },
    { note: 'C5', duration: 0.6 },
    { note: 'E5', duration: 0.6 },
    
    // Phrase 3: Am7 flowing arpeggio
    { note: 'A3', duration: 0.6 },
    { note: 'E4', duration: 0.6 },
    { note: 'A4', duration: 0.6 },
    { note: 'C5', duration: 0.6 },
    
    // Phrase 4: G6 flowing arpeggio
    { note: 'G3', duration: 0.6 },
    { note: 'D4', duration: 0.6 },
    { note: 'B4', duration: 0.6 },
    { note: 'D5', duration: 0.6 },
  ];

  // Note frequencies
  const noteFrequencies: { [key: string]: number } = {
    'G3': 196.00,
    'A3': 220.00,
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
    'G5': 783.99,
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

  // Play a single note using additive synthesis to emulate a rich, organic piano tone
  const playNote = (frequency: number, duration: number, startTime: number) => {
    if (!audioContextRef.current || !gainNodeRef.current) return;

    // Fundamental note: warm, gentle sine wave
    const fundamentalOsc = audioContextRef.current.createOscillator();
    const fundamentalGain = audioContextRef.current.createGain();
    fundamentalOsc.type = 'sine';
    fundamentalOsc.frequency.value = frequency;

    // Pluck harmonic: sine wave 1 octave higher (2x frequency) to simulate hammer strike/tine
    const harmonicOsc = audioContextRef.current.createOscillator();
    const harmonicGain = audioContextRef.current.createGain();
    harmonicOsc.type = 'sine';
    harmonicOsc.frequency.value = frequency * 2;

    const attackTime = 0.005; // Instantaneous hammer strike attack

    // Fundamental envelope: slowly decays over the entire duration
    fundamentalGain.gain.setValueAtTime(0, startTime);
    fundamentalGain.gain.linearRampToValueAtTime(0.18, startTime + attackTime);
    fundamentalGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    // Harmonic envelope: decays very quickly to simulate the initial pluck/tine strike
    const harmonicDecay = 0.15;
    harmonicGain.gain.setValueAtTime(0, startTime);
    harmonicGain.gain.linearRampToValueAtTime(0.06, startTime + attackTime);
    harmonicGain.gain.exponentialRampToValueAtTime(0.001, startTime + harmonicDecay);

    fundamentalOsc.connect(fundamentalGain);
    fundamentalGain.connect(gainNodeRef.current);

    harmonicOsc.connect(harmonicGain);
    harmonicGain.connect(gainNodeRef.current);

    fundamentalOsc.start(startTime);
    fundamentalOsc.stop(startTime + duration);

    harmonicOsc.start(startTime);
    harmonicOsc.stop(startTime + harmonicDecay);
  };

  // Play the melody in a loop with sustain/overlapping notes
  const startMelody = () => {
    if (!audioContextRef.current || !isPlaying) return;

    let currentTime = audioContextRef.current.currentTime;
    let noteIndex = 0;
    let isActive = true; // Track if this melody loop should continue

    const playNextNote = () => {
      if (!audioContextRef.current || !isActive || !isPlaying) return;

      const { note, duration } = melody[noteIndex];
      if (noteFrequencies[note]) {
        const frequency = noteFrequencies[note];
        currentTime = audioContextRef.current.currentTime;
        
        // Decoupled duration: notes ring for 3.0s (sustain pedal effect) while stepping every 0.6s
        const playDuration = duration * 5.0; 
        playNote(frequency, playDuration, currentTime);
      }

      noteIndex = (noteIndex + 1) % melody.length;

      // Schedule next note based on step duration
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
      oscillator.frequency.value = 440; // Warm, lower pitch (A4)
      
      hoverGain.gain.setValueAtTime(0.03, audioContextRef.current.currentTime); // Very quiet, subtle hint
      hoverGain.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.15);
      
      oscillator.connect(hoverGain);
      hoverGain.connect(audioContextRef.current.destination);
      
      oscillator.start();
      oscillator.stop(audioContextRef.current.currentTime + 0.15);
    };

    const playClickSound = () => {
      if (isMuted || !audioContextRef.current || !gainNodeRef.current) return;
      
      const oscillator = audioContextRef.current.createOscillator();
      const clickGain = audioContextRef.current.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.value = 523.25; // Calming note (C5)
      
      clickGain.gain.setValueAtTime(0.05, audioContextRef.current.currentTime); // Soft tick
      clickGain.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.12);
      
      oscillator.connect(clickGain);
      clickGain.connect(audioContextRef.current.destination);
      
      oscillator.start();
      oscillator.stop(audioContextRef.current.currentTime + 0.12);
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