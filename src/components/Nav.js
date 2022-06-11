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
          <Link to="/"><p><FontAwesomeIcon icon={solid("book")} fixedWidth /> Vocabulary</p></Link>
        </li>
        <li>
          <Link to="/build"><p>Build</p></Link>
        </li>
        <li>
          <p>Download</p>
        </li>
        <li>
          <p>Upload</p>
        </li>
        <li>
          <Link to="/games"><p><FontAwesomeIcon icon={solid("shapes")} fixedWidth /> Games</p></Link>
        </li>
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
      <Score score={score} />
    </nav>
  );
}

export default Nav;
