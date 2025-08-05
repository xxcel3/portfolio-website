// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

// Navbar: simple, responsive, with anchor links and hover underline
export function Navbar() {
  const sections = ["about", "projects", "contact"]; // Section IDs for smooth scrolling

  const playClick = () => {
    // play shooting star sound effect
    const audio = new Audio(`${import.meta.env.BASE_URL}sounds/shooting-star.mp3`);
    audio.play().catch(() => {});
  };

  return (
    <nav className="flex items-center space-x-12 px-6 py-4 bg-rose-300">
      <span className="text-2xl font-bold tracking-wide text-white">
        Hello World!
      </span>

      {/* Navigation links */}
      <div className="flex space-x-8">
        {sections.map((sec) => (
          <a
            key={sec}
            href={`${import.meta.env.BASE_URL}home#${sec}`}
            onClick={playClick}
            className="group relative text-lg capitalize text-white hover:text-white/80 transition-colors duration-200"
          >
            {sec}
            {/* Animated underline on hover */}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
    </nav>
  );
}
