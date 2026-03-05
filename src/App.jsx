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

const App = () => {
  return (
    <main className="relative">
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
    </main>
  )
}

export default App;