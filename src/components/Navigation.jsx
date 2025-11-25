import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import PixelButton from "./PixelButton";
import { gsap } from "gsap";
import pacman2 from "../assets/pacman2.svg";


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current.querySelector(".logo-box"), {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "steps(3)",
      });
    }
  }, []);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.from(mobileMenuRef.current.children, {
        x: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "steps(3)",
      });
    }
  }, [isOpen]);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "FEATURES", href: "#features" },
    { label: "PRICING", href: "#pricing" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b-[4px] border-black shadow-[4px_4px_0_#000]">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-2">
            <div
              className="logo-box w-8 h-8 bg-green-500 border-[3px] border-black shadow-[3px_3px_0_#000] flex items-center justify-center"
            >
              <img
                src={pacman2}
                className="w-5 h-5 pointer-events-none"
                style={{ imageRendering: "pixelated" }}
                alt="Pacman Logo"
              />
            </div>

            <span className=" text-sm font-bold text-green-500">
              PIXELVERSE
            </span>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className=" text-sm text-white hover:text-green-500"
              >
                {item.label}
              </a>
            ))}

            <PixelButton
              size="sm"
              className="bg-green-500 text-black border-[3px] border-black shadow-[3px_3px_0_#000]"
            >
              START
            </PixelButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 border-[3px] border-black bg-neutral-800 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div ref={mobileMenuRef} className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className=" text-sm text-white py-2 px-4 bg-neutral-800 border-[3px] border-black hover:bg-green-500 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <PixelButton
                size="sm"
                className="mt-2 bg-green-500 text-black border-[3px] border-black shadow-[3px_3px_0_#000]"
              >
                START
              </PixelButton>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navigation;
