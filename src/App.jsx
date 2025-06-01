import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MainPage }   from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";

export default function App() {
  const audioRef = useRef(null);

  return (
    <>
      {/* looping audio starts when .play() is called */}
      <audio ref={audioRef} src="/music/bg-music.mp3" loop />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home audioRef={audioRef} />} />
          <Route path="/home" element={<MainPage audioRef={audioRef} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}