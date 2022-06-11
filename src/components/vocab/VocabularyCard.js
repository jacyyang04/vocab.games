////////////////////////////////////////////////////////////////////////////////
// VocabularyCard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function VocabularyCard({ id, vocabularyWordMWData }) {

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

  let textareas = document.querySelectorAll(".textarea");
  const hiddenTextarea = document.createElement("div");
  hiddenTextarea.classList.add(".textarea");
  let content = null;

  for (let textarea of textareas) {
    (function(textarea) {
        // On input into a [textarea]...
        textarea.addEventListener('input', function() {
        console.log("test");
        // Append [hiddenTextArea] div as a child to the [textarea],
        textarea.parentNode.appendChild(hiddenTextarea);
        textarea.style.resize = 'none';
        // This removes scrollbars
        textarea.style.overflow = 'hidden';
        // Grab the content and clone over into hiddenTextarea.
        content = textarea.value;
        content = content.replace(/\n/g, '<br>');
        hiddenTextarea.innerHTML = content + '<br style="line-height: 3px;">';
        // Make [hiddenTextarea] hidden but [display: block] to read the height.
        hiddenTextarea.style.visibility = 'hidden';
        hiddenTextarea.style.display = 'block';
        // Set [textarea]'s height to the same as the [hiddenTextarea].
        textarea.style.height = hiddenTextarea.offsetHeight + 'px';
        // Hide [hiddenTextarea].
        hiddenTextarea.style.visibility = 'visible';
        hiddenTextarea.style.display = 'none';
      });
    })(textarea);
  }

  return (
    <div className="VocabularyCard" id={id}>

      <h3>
        {vocabularyWordMWData.headword} <span className="delete-card"><FontAwesomeIcon icon={solid('x')} /></span>
      </h3>


      <p className="VocabularyCardDictionary">
      </p>

      <section className="VocabularyCardDefinitions">
        <h4>
          Definitions
        </h4>
        <p className={defPromptClasses}>Write your own definitions.</p>
        <ul>
          <li><textarea className="textarea" onFocus={definitionFocused}></textarea></li>
        </ul>
      </section>

      <section className="VocabularyCardQuotes">
        <h4>
          Quotes
        </h4>
        <p className={quoPromptClasses}>How would you use this word?</p>
        <ul>
          <li><textarea className="textarea" onFocus={quotesFocused}></textarea></li>
        </ul>
      </section>

      <section className="VocabularyCardConnections">
        <h4>
          Connections
        </h4>
        <p className={conPromptClasses}>Connections.</p>
        <ul>
          <li><textarea className="textarea" onFocus={connectionsFocused}></textarea></li>
        </ul>
      </section>

    </div>
  );
}

export default VocabularyCard;