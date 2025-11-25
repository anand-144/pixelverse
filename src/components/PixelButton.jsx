import { useRef, useEffect } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";

function PixelButton({ children, ...props }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const button = btnRef.current;
    if (!button) return;

    const enter = () =>
      gsap.to(button, { x: -2, y: -2, duration: 0.1, ease: "steps(1)" });

    const leave = () =>
      gsap.to(button, { x: 0, y: 0, duration: 0.1, ease: "steps(1)" });

    const down = () =>
      gsap.to(button, { x: 2, y: 2, duration: 0.05, ease: "steps(1)" });

    const up = () =>
      gsap.to(button, { x: -2, y: -2, duration: 0.05, ease: "steps(1)" });

    button.addEventListener("mouseenter", enter);
    button.addEventListener("mouseleave", leave);
    button.addEventListener("mousedown", down);
    button.addEventListener("mouseup", up);

    return () => {
      button.removeEventListener("mouseenter", enter);
      button.removeEventListener("mouseleave", leave);
      button.removeEventListener("mousedown", down);
      button.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <Button ref={btnRef} {...props}>
      {children}
    </Button>
  );
}

export default PixelButton;
