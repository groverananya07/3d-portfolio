import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center the cursor perfectly
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // GSAP quickTo is highly optimized for mouse tracking
    const xMove = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yMove = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    const handleMouseMove = (e) => {
      xMove(e.clientX);
      yMove(e.clientY);
    };

    // Make the cursor react when hovering over clickable things
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, input, textarea")) {
        gsap.to(cursor, { 
          scale: 1.5, 
          backgroundColor: "#ffffff", 
          mixBlendMode: "difference", 
          duration: 0.2 
        });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, input, textarea")) {
        gsap.to(cursor, { 
          scale: 1, 
          backgroundColor: "transparent", 
          mixBlendMode: "normal",
          duration: 0.2 
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[99999] hidden md:block"
    />
  );
};

export default CustomCursor;
