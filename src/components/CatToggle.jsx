// src/components/CatToggle.jsx
import React, { useState } from "react";

export function CatToggle({ audioRef }) {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    if (!audioRef?.current) return;
    const newMuted = !muted;
    audioRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  const musicName = "Piano by Clavier";
  const imgSrc = muted ? "/cat-mute.png" : "/cat-music.png";
  const altText = muted ? "Unmute music" : "Mute music";

  return (
    <div className="relative inline-block group">
      <img
        src={imgSrc}
        alt={altText}
        className="w-20 h-10 cursor-pointer animate-float hover:brightness-125"
        onClick={toggleMute}
      />
      {/* music title below the cat */}
      <span className="
       absolute left-1/5
       transform -translate-x-1/2 
       bg-black text-white text-xs rounded opacity-0 
       group-hover:opacity-100 transition-opacity duration-300
       ">
        {musicName}
      </span>
    </div>
  );
}