// src/pages/MainPage.jsx
import React from "react";
import { Navbar } from "@/components/Navbar";
import { CatToggle } from "@/components/CatToggle";
import { StarBackground } from "@/components/StarBackground";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";


export const MainPage = ({ audioRef }) => {
  return (
    <div className="relative min-h-screen overflow-auto bg-transparent">
      {/* Starry background */}
      <div className="absolute inset-0">
        <StarBackground />
      </div>

      {/* Content over the stars */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="fixed top-0 w-full bg-rose-300 text-white z-20 bg-opacity-80 backdrop-blur">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between p-4">
            <Navbar />
            <CatToggle audioRef={audioRef} />
          </div>
        </header>

        {/* Main content (transparent) */}
        <main className="pt-24 bg-transparent">
          <AboutMe />
          <Projects />
        </main>

        <Contact />
      </div>
    </div>
  );
};
