////////////////////////////////////////////////////////////////////////////////
// App /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Import... ///////////////////////////////////////////////////////////////////
// Libraries:
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components:
import Nav from './components/Nav';
import Loading from './components/Loading';
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

  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Loading />
        </Router>
      </div>
    )
  }

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
