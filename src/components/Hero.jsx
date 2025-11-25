import PixelButton from "./PixelButton";
import heroBg from "../assets/hero-pixel-bg.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Pac-Man floating SVGs
import pacman1 from "../assets/pacman1.svg";
import pacman2 from "../assets/pacman2.svg";
import pacman3 from "../assets/pacman3.svg";
import pacman4 from "../assets/pacman4.svg";

function Hero() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const floatingPixelsRef = useRef(null);
  const bgRef = useRef(null);
  const startBtnRef = useRef(null); // ⭐ ONLY Start Button Glow

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* PARALLAX BG */
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* SOFT GLOW ON START BUTTON ONLY */
      if (startBtnRef.current) {
        gsap.to(startBtnRef.current, {
          boxShadow: "0 0 25px #00FF5A, 0 0 50px #00FF5A",
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "power1.inOut",
        });
      }

      /* FLOATING PACMEN */
      const floaties =
        floatingPixelsRef.current?.querySelectorAll(".floating-pixel");
      floaties?.forEach((el, i) => {
        gsap.to(el, {
          y: "random(-20,20)",
          x: "random(-20,20)",
          repeat: -1,
          yoyo: true,
          duration: 2 + i * 0.5,
          ease: "steps(4)",
        });
      });

      /* HERO INTRO */
      const tl = gsap.timeline({ defaults: { ease: "steps(6)" } });

      tl.from(badgeRef.current, { scale: 0, duration: 0.4 })
        .from(titleRef.current.children, { opacity: 0, y: 30, stagger: 0.2 })
        .from(subtitleRef.current, { opacity: 0, y: 20 })
        .from(buttonsRef.current.children, {
          opacity: 0,
          scale: 0,
          stagger: 0.15,
        })
        .from(statsRef.current.children, {
          opacity: 0,
          y: 20,
          stagger: 0.1,
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-neutral-900"
    >
      {/* BG */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          imageRendering: "pixelated",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950/90" />

      {/* Floating Pac-Men */}
      <div ref={floatingPixelsRef} className="absolute inset-0 pointer-events-none">
        <img src={pacman1} className="floating-pixel absolute top-20 left-10 w-10" />
        <img src={pacman2} className="floating-pixel absolute top-40 right-20 w-10" />
        <img src={pacman3} className="floating-pixel absolute bottom-40 left-28 w-10" />
        <img src={pacman4} className="floating-pixel absolute bottom-24 right-32 w-10" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center space-y-8">
        {/* Badge */}
        <div ref={badgeRef} className="inline-block">
          <div className="flex items-center gap-2 bg-neutral-800 border-[4px] border-black shadow-[4px_4px_0_#000] px-4 py-2">
            <Sparkles className="w-4 h-4 text-green-500" />
            <span className="font-bold text-xs text-green-500">NEW RELEASE</span>
          </div>
        </div>

        {/* Title */}
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white space-y-2">
          <span className="block md:text-8xl">WELCOME TO</span>
          <span className="block text-green-300 glow-text">PIXELVERSE</span>
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-lg text-gray-300 max-w-2xl mx-auto ">
          Where retro gaming aesthetics meet modern web design.
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">

          {/* ⭐ START BUTTON WITH ONLY GLOW */}
          <PixelButton
            ref={startBtnRef}
            size="lg"
            className="group bg-green-500 border-[3px] border-black shadow-[4px_4px_0_#000] text-black"
          >
            START NOW
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </PixelButton>

          <PixelButton
            size="lg"
            className="border-[3px] border-black shadow-[4px_4px_0_#000] bg-neutral-900 text-white"
          >
            LEARN MORE
          </PixelButton>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
          {[
            { value: "10K+", label: "USERS" },
            { value: "99%", label: "UPTIME" },
            { value: "24/7", label: "SUPPORT" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-800 border-[4px] border-black shadow-[4px_4px_0_#000] p-4"
            >
              <div className="text-xl font-bold text-green-500">{stat.value}</div>
              <div className="text-xs text-gray-400 ">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
