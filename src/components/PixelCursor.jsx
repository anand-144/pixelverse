import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function PixelCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: "steps(2)",
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
        ease: "steps(1)",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.1,
        ease: "steps(1)",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        hidden md:block 
        fixed 
        w-4 h-4 
        bg-green-500 
        border-[3px] border-black 
        shadow-[3px_3px_0_#000]
        pointer-events-none 
        z-[9999] 
        mix-blend-difference
      "
      style={{ imageRendering: "pixelated" }}
    />
  );
}

export default PixelCursor;
