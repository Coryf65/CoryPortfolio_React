import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header'
import HeroImage from './screens/HeroImage/HeroImage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HeroImage />
    </div>
  );
}

export default App;
