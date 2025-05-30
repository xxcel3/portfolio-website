// src/components/CatToggle.jsx

import React, { useState } from "react";

export function CatToggle({ audioRef }) {
  // Track whether audio is currently muted
  const [muted, setMuted] = useState(false);
  const toggleMute = () => {
    if (!audioRef?.current) return;               // Do nothing if ref is missing
    const audio = audioRef.current;
    const newMuted = !muted;                      // Flip muted state

    if (!newMuted) {
      // Unmuting: ensure audio is not muted
      audio.muted = false;
      // If audio is paused (hasn't played), start playback
      if (audio.paused) {
        audio.play().catch(() => {
          // Ignore exceptions 
        });
      }
    } else {
      audio.muted = true;
    }

    setMuted(newMuted);                            
  };

  const musicName = "Piano by Clavier";
  const imgSrc = muted ? "/cat-mute.png" : "/cat-music.png";
  const altText = muted ? "Unmute music" : "Mute music";

  return (
    <div className="relative inline-block group">
      {/* Cat icon click toggles mute */}
      <img
        src={imgSrc}
        alt={altText}
        className="w-20 h-10 cursor-pointer animate-float hover:brightness-125"
        onClick={toggleMute}
      />

      {/* track name when hovering the icon */}
      <span
        className="
          absolute left-1/3 transform -translate-x-1/2
          bg-black text-white text-xs rounded opacity-0
          group-hover:opacity-100 transition-opacity duration-300
        "
      >
        {musicName}
      </span>
    </div>
  );
}
