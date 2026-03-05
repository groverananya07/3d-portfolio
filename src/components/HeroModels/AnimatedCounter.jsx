import { useEffect, useRef, useState } from 'react';
import { counterItems } from '../../constants/index.js';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  // 1. State to track if the counter is actually on the screen
  const [isVisible, setIsVisible] = useState(false);
  
  // 2. A reference point to attach to our counter section
  const counterRef = useRef(null);

  // 3. The observer that watches the user's scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When 50% of the section is visible, flip the switch!
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 0.5 means it waits until it is 50% in view
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div className="counter-number text-white text-5xl font-bold mb-2">
              
              {/* 4. Only render the CountUp animation IF isVisible is true */}
              {isVisible ? (
                <CountUp 
                  start={0} 
                  end={item.value} 
                  duration={2.5} 
                  suffix={item.suffix} 
                />
              ) : (
                /* Fallback text before they scroll down */
                `0${item.suffix}`
              )}

            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter;