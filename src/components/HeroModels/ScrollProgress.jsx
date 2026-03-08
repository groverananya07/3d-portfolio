import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  useEffect(() => {
    gsap.to(".progress-bar", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      }
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[99999] pointer-events-none origin-left bg-gradient-to-r from-[#62e0ff] via-[#fd5c79] to-[#6d45ce] scale-x-0 progress-bar" />
  );
};

export default ScrollProgress;