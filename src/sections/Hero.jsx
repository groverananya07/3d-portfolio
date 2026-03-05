import { words } from "../constants";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from "../components/HeroModels/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
    )
  })  

  // Handles smooth scrolling to the metrics section
  const handleScroll = () => {
    const counterSection = document.getElementById('counter');
    if (counterSection) {
      counterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout min-h-screen flex items-center pt-20 pb-10">
        
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center lg:w-1/2 md:w-full w-screen md:px-20 px-5 relative z-20">
            <div className="flex flex-col gap-7">
                <div className="hero-text">
                  <h1 className="heading-line">
                    Shaping
                    <span className="slide">
                      <span className="wrapper">
                        {words.map((word, index) => (
                          <span key={index} className="flex items-center md:gap-3 gap-1">
                            <img
                              src={word.imgPath}
                              alt={word.text}
                              className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white object-contain"
                            />
                            <span>{word.text}</span>
                          </span>
                        ))}
                      </span>
                    </span>
                  </h1>
                  <h1 className="whitespace-nowrap">into Real Projects</h1>
                  <h1 className="whitespace-nowrap">that Deliver Results</h1>
                </div>
                
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none"> 
                Hi, I'm Ananya, a developer based in India with a passion for code.
              </p>
              
              {/* FIX: Replaced custom Button component with a fully styled HTML button */}
              <button 
                onClick={handleScroll} 
                className="w-fit cursor-pointer relative z-30 pointer-events-auto transition-transform hover:scale-105 mt-5 px-8 py-4 bg-[#e2e8f0] text-black text-base font-bold rounded-lg hover:bg-white flex items-center gap-2"
              >
                SEE MY WORK
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>

      </div>
      
      {/* METRICS COUNTER SECTION */}
      <div className="relative w-full z-20 py-10 bg-black/50">
        <AnimatedCounter />
      </div>

    </section>
  )
}

export default Hero;