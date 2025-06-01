// src/pages/Home.jsx

import { StarBackground } from "@/components/StarBackground";
import { useNavigate }    from "react-router-dom";

export const Home = ({ audioRef }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;       // restart from the top
      audio.volume      = 0.5;     
      audio.play().catch((e) => {  // plays once pc monitor is clicked
        console.error("Play failed:", e);
      });
    }
    navigate("/home");
  };

  return (
    <div className="
      relative
      min-h-screen
      flex items-center justify-center
      bg-background
      overflow-hidden
    ">
      {/* animated stars */}
      <StarBackground />

      {/* clickable monitor graphic */}
      <div className="relative z-10 w-full max-w-6xl">
        <img
          src={`${import.meta.env.BASE_URL}/PC.png`}
          alt="Computer graphic (click to enter)"
          className="
            w-full
            h-auto
            object-contain
            cursor-pointer

            transition-transform transition-filter duration-300 ease-in-out
            hover:scale-105        /* gently grow on hover */
            hover:brightness-105   /* brighten on hover */
          "
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
