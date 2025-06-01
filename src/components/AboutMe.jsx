// src/components/AboutMe.jsx
import React from "react";

export function AboutMe() {
  return (
    <section id="about" className="w-full py-16 bg-transparent">
      {/* mobile: vertical stacked images */}
      <div className="flex flex-col items-center space-y-6 px-4 md:hidden">
        <img
          src="/poloroid.png"
          alt="Polaroid"
          className="w-full max-w-xs h-auto"
        />
        <img
          src="/cloud.png"
          alt="Cloud"
          className="w-full max-w-xs h-auto"
        />
      </div>

      {/* desktop: relative sizing */}
      <div className="hidden md:flex justify-between items-start px-[20%] space-x-8">
        <img
          src="/poloroid.png"
          alt="Polaroid"
          className="w-[50%] h-auto object-cover"
        />
        <img
          src="/cloud.png"
          alt="Cloud"
          className="w-[50%] h-auto object-cover"
        />
      </div>
    </section>
  );
}
