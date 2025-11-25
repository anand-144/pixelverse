import { Check } from "lucide-react";
import PixelButton from "./PixelButton";
import PixelCard from "./PixelCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Pricing() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const glowBadgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".pricing-card");

      // Card entrance animation
      if (cards) {
        gsap.from(cards, {
          scale: 0.8,
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.2,
          ease: "steps(5)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ⭐ POP EFFECT + GLOW EFFECT FOR POPULAR BADGE
      if (glowBadgeRef.current) {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.to(glowBadgeRef.current, {
          scale: 1.15,
          y: -6,
          boxShadow:
            "0 0 50px #00FF5A, 0 0 80px #00FF5A, inset 0 0 35px #00FF5A",
          duration: 0.4,
          ease: "steps(4)",
        }).to(glowBadgeRef.current, {
          scale: 1,
          y: 0,
          boxShadow:
            "0 0 30px #00FF5A, 0 0 50px #00FF5A, inset 0 0 20px #00FF5A",
          duration: 0.4,
          ease: "steps(4)",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: "BASIC",
      price: "$9",
      period: "/month",
      description: "Perfect for pixel enthusiasts starting their journey",
      features: ["5 Projects", "10GB Storage", "Basic Support", "Pixel Templates", "Community Access"],
      variant: "outline",
      popular: false,
    },
    {
      name: "PRO",
      price: "$29",
      period: "/month",
      description: "For serious pixel artists and developers",
      features: [
        "Unlimited Projects",
        "100GB Storage",
        "Priority Support",
        "Premium Templates",
        "Advanced Features",
        "API Access",
      ],
      variant: "pixel",
      popular: true,
    },
    {
      name: "ULTIMATE",
      price: "$99",
      period: "/month",
      description: "Enterprise-grade pixel power",
      features: [
        "Everything in Pro",
        "Unlimited Storage",
        "24/7 Support",
        "Custom Templates",
        "White Label",
        "Dedicated Manager",
      ],
      variant: "gold",
      popular: false,
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-neutral-800 border-[4px] border-black shadow-[3px_3px_0_#000] px-4 py-2 mb-4">
            <span className=" text-sm text-yellow-400">PRICING</span>
          </div>

          <h2 className="text-3xl md:text-4xl text-white">
            CHOOSE YOUR <span className="text-green-500">LEVEL</span>
          </h2>

          <p className=" text-neutral-400 max-w-2xl mx-auto">
            Select the perfect plan for your pixel journey. All plans include our core features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PixelCard
              key={plan.name}
              variant={plan.popular ? "glow" : "hover"}
              className="pricing-card relative flex flex-col bg-neutral-800 border-[4px] border-black shadow-[4px_4px_0_#000]"
            >

              {/* ⭐ POPULAR Badge */}
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 -translate-x-1/2">
                  <div
                    ref={glowBadgeRef}
                    className="
                      bg-green-500
                      border-[4px] border-black
                      px-4 py-1
                      shadow-[4px_4px_0_#000]
                      pixel-glow-box
                    "
                  >
                    <span className=" text-xs text-black">POPULAR</span>
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="space-y-6 flex-1 flex flex-col">

                <div>
                  <h3 className=" text-xl text-white mb-2">{plan.name}</h3>
                  <p className=" text-sm text-neutral-400">{plan.description}</p>
                </div>

                <div className="flex items-end gap-2">
                  <span className=" text-4xl text-green-500">{plan.price}</span>
                  <span className=" text-neutral-400 pb-1">{plan.period}</span>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className=" text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <PixelButton
                  size="lg"
                  className="
                    w-full mt-auto
                    bg-green-500 text-black
                    border-[3px] border-black
                    shadow-[3px_3px_0_#000]
                  "
                >
                  SELECT {plan.name}
                </PixelButton>

              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
