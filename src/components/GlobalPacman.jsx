// src/components/GlobalPacman.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Volume2, VolumeX } from "lucide-react";
import pacmanChase from "../assets/pac-man.gif";

const wakaSound = new Audio("/sounds/Waka.mp3");
wakaSound.loop = true;

function GlobalPacman() {
  const pacRef = useRef(null);
  const soundPlayed = useRef(false);
  const [muted, setMuted] = useState(true); // start muted

  useEffect(() => {
    const pac = pacRef.current;

    // initial pacman position
    gsap.set(pac, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    // enable sound AFTER interaction
    function enableSound() {
      if (!soundPlayed.current) {
        wakaSound.play().catch(() => { });
        soundPlayed.current = true;
      }

      window.removeEventListener("click", enableSound);
      window.removeEventListener("keydown", enableSound);
    }

    window.addEventListener("click", enableSound);
    window.addEventListener("keydown", enableSound);

    // roam animation
    function roam() {
      const x = gsap.utils.random(0, window.innerWidth - 60);
      const y = gsap.utils.random(0, window.innerHeight - 60);

      gsap.to(pac, {
        x,
        y,
        duration: gsap.utils.random(4, 8),
        ease: "power1.inOut",
        onStart: () => {
          const currentX = pac.getBoundingClientRect().x;
          pac.style.transform = x > currentX ? "scaleX(1)" : "scaleX(-1)";
        },
        onComplete: roam,
      });
    }

    roam();

    return () => {
      wakaSound.pause();
      window.removeEventListener("click", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

  // Toggle sound
  const toggleMute = () => {
    if (!soundPlayed.current) {
      wakaSound.play().catch(() => { });
      soundPlayed.current = true;
    }

    if (muted) {
      wakaSound.muted = false;
    } else {
      wakaSound.muted = true;
    }
    setMuted(!muted);
  };

  return (
    <>
      {/* Pac-Man */}
      <img
        ref={pacRef}
        src={pacmanChase}
        className="fixed w-14 h-14 pointer-events-none z-[99999]"
        style={{ imageRendering: "pixelated" }}
        alt="Pacman roaming"
      />

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        className="
    fixed bottom-24 right-8 
    z-[99999] p-3 rounded-lg 
    bg-black/70 border border-yellow-400 
    hover:bg-black/90 transition 
    text-yellow-300 
    shadow-lg shadow-yellow-400/30
    backdrop-blur-sm
  "
      >
        {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>
    </>
  );
}

export default GlobalPacman;
