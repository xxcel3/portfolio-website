// src/components/Projects.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// array of project data
const PROJECTS = [
  {
    title: "[FrontEnd] Portfolio Website",
    description:
      "A dynamic personal website built with React, React Router, Canva and Tailwind CSS.",
    imageSrc: "preview.png",       
    link: "/",                      
    githubLink: "https://github.com/xxcel3/portfolio-website", 
  },
  {
    title: "[IOS] Gamified Step Tracker",
    description:
      "A planned iOS app that connects to Apple Health for step data, gamifies walking by rewarding users to care for a virtual pet.",
    githubLink: "https://github.com/xxcel3" 
  },
  {
    title: "[Fullstack] Workspace/Notetaking Webapp",
    description:
      "Used JavaScript, Python, PHP, and MySQL to build full-stack task management features, user authentication, and calendar integration.",
    videoSrc: "videos/CreativeHub.mp4", 
    githubLink: "https://github.com/xxcel3/CreativeHub"
  },
  {
    title: "[FullStack] Blogging Webapp",
    description:
      "Built a full-stack blog platform with JavaScript, Flask, Socket.io, MongoDB, and Docker; features include media uploads, like counts, Spotify API integration, and live user lists over HTTPS.",
    videoSrc: "videos/Hobbied.mp4",
    githubLink: "https://github.com/maggiechen259/cse312project"
  },
  {
    title: "[AI] Dog Breed Identifier",
    description:
      "Developed a CNN-based classifier with VGG-16 and a PyQt GUI, creating a data pipeline to transform images and display breed analytics.",
    imageSrc: "dog.png",
    link: "https://docs.google.com/presentation/d/1wIqGNpO7AX9lvImBtpFLyj4iuwK-1SuBmulX5WPnNMc/edit?usp=sharing",  
    githubLink: "https://docs.google.com/presentation/d/1wIqGNpO7AX9lvImBtpFLyj4iuwK-1SuBmulX5WPnNMc/edit?usp=sharing"
  },
  {
    title: "[AI] Externship for Outamation",
    description: "Summer Externship in Progress",     // No media yet
    githubLink: "https://github.com/xxcel3"
  }
];

export function Projects() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Preload hover sound and set volume lower for quieter effect
  const hoverSound = new Audio(`${import.meta.env.BASE_URL}sounds/hover.mp3`);
  hoverSound.volume = 0.2;

  // card layout
  const baseClasses =
    'cursor-pointer relative p-6 bg-gray-800 bg-opacity-60 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-transform duration-300';
  const style = { minHeight: '24rem' };

  // Function to build each card based on project data
  const renderCard = (proj) => {
    const githubIconSrc = `${import.meta.env.BASE_URL}github.png`;
    const content = (
      <>
        {proj.githubLink && (
          <a
            href={proj.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 w-6 h-6 hover:scale-120"
            onClick={(e) => e.stopPropagation()} // Prevent opening video when clicking icon
          >
            <img src={githubIconSrc} alt="GitHub" className="w-full h-full" />
          </a>
        )}

        {/* Display image or looping video */}
        {proj.imageSrc && (
          <img
            src={`${import.meta.env.BASE_URL}${proj.imageSrc}`}
            alt={proj.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}
        {proj.videoSrc && (
          <video
            src={`${import.meta.env.BASE_URL}${proj.videoSrc}`}
            muted
            loop
            playsInline
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}

        <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
        <p className="text-base">{proj.description}</p>

        {/* if there's no media */}
        {!proj.imageSrc && !proj.videoSrc && (
          <p className="mt-4 text-sm italic">Coming Soon</p>
        )}
      </>
    );

    // hover sound
    const wrapperProps = {
      className: baseClasses,
      style,
      onMouseEnter: () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      }
    };

    // interactive wrapper/cards
    if (proj.link === "/") {
      return (
        <div key={proj.title} {...wrapperProps} onClick={() => navigate(proj.link)}>
          {content}
        </div>
      );
    }
    if (proj.link) {
      return (
        <a
          key={proj.title}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          {...wrapperProps}
        >
          {content}
        </a>
      );
    }
    if (proj.videoSrc) {
      return (
        <div
          key={proj.title}
          {...wrapperProps}
          onClick={() => setSelectedVideo(`${import.meta.env.BASE_URL}${proj.videoSrc}`)}
        >
          {content}
        </div>
      );
    }

    // non-interactive card
    return (
      <div key={proj.title} {...wrapperProps}>
        {content}
      </div>
    );
  };

  return (
    <>
      {/* 3 cards in a row if full screen (grid layout) */}
      <section id="projects" className="w-full py-16 bg-transparent scroll-mt-20">
        <div className="max-w-screen-xl mx-auto px-8">
          <img
            src={`${import.meta.env.BASE_URL}header.png`}
            alt="Projects Header"
            className="mx-auto mb-8 w-78"
          />
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {PROJECTS.map(renderCard)}
          </div>
        </div>
      </section>

      {/* Fullscreen video */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* backdrop inset-0 span the screen */}
          <div className="absolute inset-0 bg-opacity-75" onClick={() => setSelectedVideo(null)} />
          <div className="relative bg-gray-900 rounded-3xl shadow-2xl p-6 mx-4 max-w-4xl w-full">
            {/* Close button */}
            <button onClick={() => setSelectedVideo(null)} className="absolute top-3 right-3 text-3xl z-10">
              &times;
            </button>
            <video src={selectedVideo} controls autoPlay className="w-full max-h-[90vh]" />
          </div>
        </div>
      )}
    </>
  );
}
