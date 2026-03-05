import { logoIconsList } from "../../constants/index.js";

const LogoShowcase = () => {
  return (
    <section className="md:my-24 my-12 w-full flex flex-col justify-center items-center border-y border-white/10 py-10 bg-black/20">
      
      {/* Optional tiny label above the names */}
      <p className="text-xs md:text-sm text-white-50 opacity-40 uppercase tracking-[0.3em] mb-8">
        Professional Experience
      </p>

      {/* The 3 Names perfectly centered */}
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-40 px-5">
        {logoIconsList.map((icon, index) => (
          <h3 
            key={index} 
            // text-lg keeps it small, tracking-widest spaces the letters out elegantly
            className="text-base md:text-lg font-medium uppercase tracking-widest text-white-50 opacity-50 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            {icon.name}
          </h3>
        ))}
      </div>
      
    </section>
  );
};

export default LogoShowcase;