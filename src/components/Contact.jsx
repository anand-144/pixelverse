import PixelButton from "./PixelButton";
import PixelCard from "./PixelCard";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = contactCardsRef.current?.querySelectorAll(".contact-card");

      if (cards) {
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "steps(4)",
          scrollTrigger: {
            trigger: contactCardsRef.current,
            start: "top 85%",
          },
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 0.5,
          ease: "steps(5)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-neutral-800 border-[3px] border-black shadow-[3px_3px_0_#000] px-4 py-2 mb-4">
            <span className=" text-sm text-yellow-400">CONTACT</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            GET IN <span className="text-green-400">TOUCH</span>
          </h2>

          <p className=" opacity-80 max-w-2xl mx-auto mt-3">
            Have a question or want to work together? Drop us a message!
          </p>
        </div>

        {/* Contact Cards */}
        <div
          ref={contactCardsRef}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: Mail, label: "EMAIL", value: "hello@pixelverse.io" },
            { icon: MessageSquare, label: "DISCORD", value: "PixelVerse#0001" },
            { icon: Send, label: "TELEGRAM", value: "@pixelverse" },
          ].map((item) => (
            <div
              key={item.label}
              className="contact-card bg-neutral-800 border-[3px] border-black shadow-[4px_4px_0_#000] p-6 text-center hover:-translate-x-[2px] hover:-translate-y-[2px] transition-none cursor-pointer"
            >
              <item.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />

              <div className="font-bold text-sm mb-2">{item.label}</div>
              <div className=" text-sm opacity-70">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div ref={formRef}>
          <div className="bg-neutral-800 border-[3px] border-black shadow-[4px_4px_0_#000] p-6 max-w-2xl mx-auto">
            <form className="space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-xs">NAME</label>
                  <input
                    type="text"
                    className="w-full bg-neutral-900 text-white border-[3px] border-black shadow-[3px_3px_0_#000] p-3  text-sm focus:border-green-400 outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-bold text-xs">EMAIL</label>
                  <input
                    type="email"
                    className="w-full bg-neutral-900 text-white border-[3px] border-black shadow-[3px_3px_0_#000] p-3  text-sm focus:border-green-400 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="font-bold text-xs">SUBJECT</label>
                <input
                  type="text"
                  className="w-full bg-neutral-900 text-white border-[3px] border-black shadow-[3px_3px_0_#000] p-3  text-sm focus:border-green-400 outline-none"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-bold text-xs">MESSAGE</label>
                <textarea
                  rows="6"
                  className="w-full bg-neutral-900 text-white border-[3px] border-black shadow-[3px_3px_0_#000] p-3  text-sm focus:border-green-400 outline-none resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit */}
              <PixelButton className="w-full bg-green-500 text-black border-black shadow-[4px_4px_0_#000]">
                SEND MESSAGE
              </PixelButton>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
