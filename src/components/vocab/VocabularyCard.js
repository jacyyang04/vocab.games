////////////////////////////////////////////////////////////////////////////////
// VocabularyCard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function VocabularyCard({ id, vocabularyWord }) {

  const clsPromptHidden = "prompt hidden";
  const clsPromptShown = "prompt";

  const [defPromptClasses, setDefPromptClasses] = useState(clsPromptHidden);
  const [quoPromptClasses, setQuoPromptClasses] = useState(clsPromptHidden);
  const [conPromptClasses, setConPromptClasses] = useState(clsPromptHidden);

  const definitionFocused = () => {
    setDefPromptClasses(clsPromptShown);
    setQuoPromptClasses(clsPromptHidden);
    setConPromptClasses(clsPromptHidden);
  }
  const quotesFocused = () => {
    setQuoPromptClasses(clsPromptShown);
    setDefPromptClasses(clsPromptHidden);
    setConPromptClasses(clsPromptHidden);
  }
  const connectionsFocused = () => {
    setConPromptClasses(clsPromptShown);
    setDefPromptClasses(clsPromptHidden);
    setQuoPromptClasses(clsPromptHidden);
  }

  const dictionaryDefinitions = () => {
    
  }

  return (
    <div className="VocabularyCard" id={id}>

      <h3>
        <FontAwesomeIcon icon={solid('user-secret')} rotation={180} />{vocabularyWord.headword}
      </h3>


      <p className="VocabularyCardDictionary">
      </p>

      <h4>
        Definitions
      </h4>
      <p className={defPromptClasses}>Write your own definitions.</p>
      <ul>
        <li><FontAwesomeIcon icon={solid('user-secret')} rotation={180} listItem={true} /><input onFocus={definitionFocused} type="text"></input></li>
      </ul>

      <h4>
        Quotes
      </h4>
      <p className={quoPromptClasses}>How would you use this word?</p>
      <ul>
        <li><input onFocus={quotesFocused} type="text"></input></li>
      </ul>

      <h4>
        Connections
      </h4>
      <p className={conPromptClasses}>Connections.</p>
      <ul>
        <li><input onFocus={connectionsFocused} type="text"></input></li>
      </ul>

    </div>
  );
}

export default VocabularyCard;