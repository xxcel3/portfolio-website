import { StarBackground } from "@/components/StarBackground";
import { useNavigate }    from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="
      relative
      min-h-screen
      flex items-center justify-center
      bg-background
      overflow-hidden
    ">
      {/* stars behind everything */}
      <StarBackground />

      {/* wrapper for your PC graphic */}
      <div className="relative z-10 w-full max-w-6xl">
        <img
          src="/PC.png"
          alt="Computer graphic (click to enter)"
          onClick={() => navigate("/home")}
          className="
            w-full
            h-auto
            object-contain
            cursor-pointer

            transition-transform transition-filter duration-300 ease-in-out
            hover:scale-105        /* gently grow on hover */
            hover:brightness-105   /* brighten on hover */
          "
        />
      </div>
    </div>
  );
};
