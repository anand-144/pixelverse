import { Github, Twitter, Youtube } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import pacman2 from "../assets/pacman2.svg";


function Footer() {
  const currentYear = new Date().getFullYear();
  const logoRef = useRef(null);

  // Logo bounce animation
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

  return (
    <footer className="bg-neutral-900 border-t-[4px] border-black py-12 text-white">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="space-y-4">
            <div ref={logoRef} className="flex items-center gap-2">
              <div className="logo-box w-8 h-8 bg-green-500 border-[3px] border-black shadow-[3px_3px_0_#000] flex items-center justify-center">
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

            <p className=" text-sm opacity-70">
              Where retro meets modern. Built with pixels and passion.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-xs mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Docs", "Changelog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className=" text-sm opacity-70 hover:text-green-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-xs mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className=" text-sm opacity-70 hover:text-green-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-xs mb-4">LEGAL</h3>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Cookies", "Licenses"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className=" text-sm opacity-70 hover:text-green-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[4px] bg-black mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className=" text-sm opacity-70">
            © {currentYear} PixelVerse.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[Github, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-neutral-800 border-[3px] border-black shadow-[3px_3px_0_#000] hover:bg-green-500 hover:text-black"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
