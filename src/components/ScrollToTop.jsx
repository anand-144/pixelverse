import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../components/Button";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8 z-50
        bg-green-500 text-black
        border-[3px] border-black
        shadow-[3px_3px_0_#000]
        w-12 h-12 flex items-center justify-center
        animate-pulse
      "
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}

export default ScrollToTop;
