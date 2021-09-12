import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 50
              },
              "size": {
                  "value": 2
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
	}} />
    </div>
  );
}

export default App;
