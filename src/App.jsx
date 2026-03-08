import NavBar from './components/HeroModels/NavBar.jsx';
import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import LogoSection from './components/HeroModels/LogoShowcase.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import TechStack from './sections/TechStack.jsx';
import About from './components/HeroModels/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

// NEW FEATURE IMPORTS
import { Loader } from '@react-three/drei'; 
import CustomCursor from './components/CustomCursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

const App = () => {
  return (
    <main className="relative">
      <CustomCursor />
      <ScrollProgress />
      
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <About />
      <Contact />
      <Footer />
      
      {/* 3D Loading Screen */}
      <Loader />
    </main>
  )
}

export default App;
