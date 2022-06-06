////////////////////////////////////////////////////////////////////////////////
// Nav /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>
        vocab.games
      </h1>
      <ul>
        <li>
          <Link to="/">Vocabulary</Link>
          <ul>
            <li>
              <Link to="/build">Build</Link>
            </li>
            <li>
              Download
            </li>
            <li>
              Upload
            </li>
          </ul>
        </li>
        <li>
          <Link to="/games">Games</Link>
          <ul>
            <li>
              <Link to="/games/hinky-pinky">Hinky Pinky</Link>
            </li>
            <li>
              <Link to="/games/hang-man">Hang Man</Link>
            </li>
            <li>
              <Link to="/games/fill">Fill</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
