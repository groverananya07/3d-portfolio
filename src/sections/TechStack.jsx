import React from 'react';
import { techStackIcons } from '../constants/index.js'
import TitleHeader from '../components/HeroModels/TitleHeader.jsx'
import TechIcon from '../components/HeroModels/Models/TechLogos/TechIcon.jsx'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
    useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding w-full overflow-hidden">
      <div className="w-full h-full md:px-10 px-5">
        
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />

        <div className="tech-grid w-full">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card card-border tech-card overflow-hidden group xl:rounded-[2rem] rounded-2xl relative"
            >
              <div className="tech-card-animated-bg" />

              {/* Added px-4 to give the sides breathing room, increased py-8 so it doesn't hug the top/bottom */}
              <div className="tech-card-content flex flex-col justify-between items-center relative z-10 h-full py-8 px-4">
                
                {/* FIXED: Added scale-90 to slightly shrink the 3D canvas so it fits perfectly inside the box */}
                <div className="tech-icon-wrapper w-full h-32 md:h-40 flex justify-center items-center pointer-events-auto cursor-grab active:cursor-grabbing scale-90">
                    <TechIcon model={icon} />
                </div>

                <div className="w-full flex justify-center mt-4">
                  <p className="text-lg md:text-xl font-semibold text-white-50 text-center whitespace-nowrap">
                    {icon.name}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TechStack;