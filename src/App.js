////////////////////////////////////////////////////////////////////////////////
// App /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Import... ///////////////////////////////////////////////////////////////////
// Libraries:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components:
import Nav from './components/Nav';
import Vocabulary from './components/vocab/Vocabulary';
import Build from './components/vocab/Build';
import Games from './components/games/Games';
import HinkyPinky from './components/games/HinkyPinky';
import HangMan from './components/games/HangMan';
import Fill from './components/games/Fill';
// Style:
import './App.css';
////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route 
            path="/" 
            element={<Vocabulary />}
          />
          <Route 
            path="/build"
            element={<Build />} 
          />
          <Route 
            path="/games"
            element={<Games />} 
          />
          <Route 
            path="/games/hinky-pinky"
            element={<HinkyPinky />} 
          />
          <Route 
            path="/games/hang-man"
            element={<HangMan />} 
          />
          <Route 
            path="/games/fill"
            element={<Fill />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
