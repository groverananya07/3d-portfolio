import React from 'react';
import TitleHeader from './TitleHeader.jsx';
import { aboutMe } from '../../constants/index.js';

const About = () => {
  return (
    <section
      id="about"
      className="section-padding overflow-hidden w-full scroll-mt-24"
    >
      <div className="w-full h-full md:px-10 px-5">
        
        <TitleHeader
          title="About Me"
          sub="⭐ Background & Details"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-6xl mx-auto">
          {aboutMe.map((item, index) => (
            <div 
              key={index}
              className="card card-border p-8 md:p-10 rounded-2xl flex flex-col justify-center relative group"
            >
              <div className="tech-card-animated-bg opacity-0 group-hover:opacity-10" />
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10">
                {item.title}
              </h3>
              
              <p className="text-white-50 leading-relaxed relative z-10 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;