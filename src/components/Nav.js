////////////////////////////////////////////////////////////////////////////////
// Nav /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Score from './Score';

function Nav({score}) {
  return (
    <nav>
      <h1>
        vocab.games
      </h1>
      <ul>
        <li>
          <Link to="/"><FontAwesomeIcon icon={solid("book")} /> Vocabulary</Link>
          <ul>
            <li>
              <Link to="/build"><p>Build</p></Link>
            </li>
            <li>
              <p>Download</p>
            </li>
            <li>
              <p>Upload</p>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/games"><FontAwesomeIcon icon={solid("shapes")} /> Games</Link>
          <ul>
            <li>
              <Link to="/games/hinky-pinky"><p>Hinky Pinky</p></Link>
            </li>
            <li>
              <Link to="/games/hang-man"><p>Hang Man</p></Link>
            </li>
            <li>
              <Link to="/games/fill"><p>Fill</p></Link>
            </li>
          </ul>
        </li>
      </ul>
      <Score score={score} />
    </nav>
  );
}

export default Nav;
