// src/components/GlobalPacman.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import pacmanChase from "../assets/pac-man.gif";

const wakaSound = new Audio("/sounds/waka.mp3");
wakaSound.loop = true;

function GlobalPacman() {
  const pacRef = useRef(null);

  useEffect(() => {
    const pac = pacRef.current;

    // initial position
    gsap.set(pac, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    wakaSound.play();

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

    return () => wakaSound.pause();
  }, []);

  return (
    <img
      ref={pacRef}
      src={pacmanChase}
      className="fixed w-14 h-14 pointer-events-none z-[99999]"
      style={{ imageRendering: "pixelated" }}
      alt="Pacman roaming"
    />
  );
}

export default GlobalPacman;
