import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header'
import HeroImage from './screens/HeroImage/HeroImage';
import AboutMe from './screens/aboutMe/AboutMe'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HeroImage />
      <AboutMe />
    </div>
  );
}

export default App;
