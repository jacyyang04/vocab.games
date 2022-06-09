////////////////////////////////////////////////////////////////////////////////
// App /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Import... ///////////////////////////////////////////////////////////////////
// Libraries:
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import hotkeys from 'hotkeys-js';
import { getMWWordData } from './mwLibrary';
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

function App() {

  const [loading, setLoading] = useState(false);
  const [vocabulary, setVocabulary] = useState([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  // setAppHotkeys /////////////////////////////////////////////////////////////
  // Sets vocab.game's global hotkeys.
  const setAppHotkeys = () => {
    hotkeys('v', function(event, handler) {
      event.preventDefault(); 
      navigate('/');
    });
    hotkeys('b', function(event, handler) {
      event.preventDefault(); 
      navigate('/build');
    });
    hotkeys('shift+g', function(event, handler) {
      event.preventDefault();
      navigate('/games');
    });
    hotkeys('h', function(event, handler) {
      event.preventDefault(); 
      navigate('/games/hinky-pinky');
    });
    hotkeys('g', function(event, handler) {
      event.preventDefault(); 
      navigate('/games/hang-man');
    });
    hotkeys('f', function(event, handler) {
      event.preventDefault(); 
      navigate('/games/fill');
    });
  }

  useEffect(() => {
    setAppHotkeys();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Router>
          <Nav score={score} />
          <Loading />
        </Router>
      </div>
    )
  }

  return (
    <div className="App">
        <Nav score={score} />
        <Routes>
          <Route 
            path="/" 
            element={<Vocabulary vocabulary={vocabulary} setVocabulary={setVocabulary} score={score} setScore={setScore} />}
          />
          <Route 
            path="/build"
            element={<Build vocabulary={vocabulary} setVocabulary={setVocabulary} score={score} setScore={setScore} />} 
          />
          <Route 
            path="/games"
            element={<Games />} 
          />
          <Route 
            path="/games/hinky-pinky"
            element={<HinkyPinky vocabulary={vocabulary} setVocabulary={setVocabulary} score={score} setScore={setScore} />} 
          />
          <Route 
            path="/games/hang-man"
            element={<HangMan vocabulary={vocabulary} setVocabulary={setVocabulary} score={score} setScore={setScore} />} 
          />
          <Route 
            path="/games/fill"
            element={<Fill vocabulary={vocabulary} setVocabulary={setVocabulary} score={score} setScore={setScore} />} 
          />
        </Routes>
    </div>
  );
}

export default App;
