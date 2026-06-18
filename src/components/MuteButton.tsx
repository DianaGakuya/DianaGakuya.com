import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

export function MuteButton() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if ((window as any).toggleAudioMute) {
      (window as any).toggleAudioMute();
    }
    setIsMuted(!isMuted);
  };

  // Sync with global mute state
  useEffect(() => {
    const interval = setInterval(() => {
      if ((window as any).isAudioMuted !== undefined) {
        setIsMuted((window as any).isAudioMuted);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Button
      onClick={toggleMute}
      size="icon"
      variant="ghost"
      className="w-6 h-6 hover:bg-primary/10 rounded-full p-1"
      title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
    >
      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
    </Button>
  );
}
