// src/pages/MainPage.jsx
import React from "react";
import { CatToggle } from "@/components/CatToggle";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

export const MainPage = ({ audioRef }) => {
  return (
    <header className="fixed top-0 w-full bg-rose-200 text-white z-20">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {/* Navbar brand and links */}
          <Navbar />
        </div>
        {/* Mute/unmute cat icon */}
        <CatToggle audioRef={audioRef} />
      </div>
    </header>
  );
};
