import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header'
import HeroImage from './screens/heroImage/HeroImage';
import AboutMe from './screens/aboutMe/AboutMe'
import TechLogos from './screens/techLogos/TechLogos'
import Portfolio from './screens/portfolio/Portfolio'
import ContactForm from './screens/contactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HeroImage />
      <AboutMe />
      <TechLogos />
      <Portfolio />
      <ContactForm />
    </div>
  );
}

export default App;
