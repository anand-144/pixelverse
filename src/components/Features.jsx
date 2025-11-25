import speedIcon from "../assets/icon-speed.png";
import securityIcon from "../assets/icon-security.png";
import qualityIcon from "../assets/icon-quality.png";
import achievementIcon from "../assets/icon-achievement.png";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".feature-card");

      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "steps(6)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        });

        cards.forEach((card) => {
          const icon = card.querySelector(".feature-icon");

          if (icon) {
            gsap.to(icon, {
              y: -8,
              duration: 0.4,
              repeat: -1,
              yoyo: true,
              ease: "steps(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
              },
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: speedIcon,
      title: "LIGHTNING FAST",
      description:
        "Optimized performance with retro aesthetics. Load times that'll make you feel like you're playing on an NES.",
    },
    {
      icon: securityIcon,
      title: "SECURE VAULT",
      description:
        "Military-grade encryption wrapped in pixel perfection. Your data is safer than a Game Boy in a protective case.",
    },
    {
      icon: qualityIcon,
      title: "PREMIUM QUALITY",
      description:
        "Handcrafted pixel-perfect components. Every element designed with the attention of a speedrunner.",
    },
    {
      icon: achievementIcon,
      title: "ACHIEVEMENTS",
      description:
        "Unlock new features and capabilities. Progress through your journey like collecting 8-bit trophies.",
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">

          <div className="inline-block bg-neutral-800 border-[3px] border-black shadow-[3px_3px_0_#000] px-4 py-2 mb-4">
            <span className=" text-sm text-yellow-400">FEATURES</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            POWERED BY <span className="text-green-400">PIXELS</span>
          </h2>

          <p className=" text-sm opacity-70 max-w-2xl mx-auto">
            Discover the features that make PixelVerse the ultimate retro-modern experience.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card bg-neutral-800 border-[3px] border-black shadow-[4px_4px_0_#000] p-6 transition-none hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer"
            >
              <div className="space-y-4">

                {/* Icon */}
                <div className="feature-icon w-16 h-16 border-[3px] border-black shadow-[4px_4px_0_#000] bg-neutral-900 p-2 relative overflow-hidden">
                  <img
                    src={f.icon}
                    alt={f.title}
                    className="w-full h-full object-contain relative z-10"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold">{f.title}</h3>

                {/* Description */}
                <p className=" text-sm opacity-70 leading-relaxed">
                  {f.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
