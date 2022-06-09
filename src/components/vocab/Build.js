////////////////////////////////////////////////////////////////////////////////
// Build ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { getMWWordData, wordDataNotFound } from "../../mwLibrary";
import hotkeys from "hotkeys-js";
import { useHotkeys } from "react-hotkeys-hook";
import VocabularyCardList from "./VocabularyCardList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- i

function Build() {

  // Messages:
  const msgEmpty = "Search for a word.";
  const msgNotFound = "Word not found.";
  const msgSuggestions = "Word not found. Did you mean any of these words?"

  // CSS classes:
  const clsSearchbarValid = "";
  const clsSearchbarError = "error";
  const clsSearchbarMessageHidden = "searchbar-message hidden";
  const clsSearchbarMessageShown = "searchbar-message";
  const clsSuggestionsHidden = "suggestions hidden";
  const clsSuggestionsShown = "suggestions";

  // Hooks:
  const [searchbarMessage, setSearchbarMessage] = useState(msgEmpty);
  const [searchbarMessageClasses, setSearchbarMessageClasses] = useState(clsSearchbarMessageHidden);
  const [searchbarClasses, setSearchbarClasses] = useState(clsSearchbarValid);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsClasses, setSuggestionsClasses] = useState(clsSuggestionsHidden);
  const [sessionVocabularyData, setSessionVocabularyData] = useState([]);

  // Hotkeys:
  useHotkeys('/', () => {
    const searchbar = document.getElementById("searchbar");
    searchbar.focus();
  }, {
    filterPreventDefault: true
  });

  let textareas = document.querySelectorAll(".textarea");
  const hiddenTextarea = document.createElement("div");
  let content = null;

  // Apply common [.textarea] styling to [hiddenTextArea].
  hiddenTextarea.classList.add(".textarea");

  for(let textarea of textareas) {
    (function(textarea) {
      // On input into a [textarea]...
      textarea.addEventListener('input', function() {
        // Append [.hiddenTextArea] div as a child to the [textarea],
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

  // wordSearch ////////////////////////////////////////////////////////////////
  const wordSearch = async (event) => {
    // Prevent browser refresh.
    event.preventDefault();
    const wordSearched = event.target[0].value;
    const searchbarEmpty = (wordSearched === "");
    if (!searchbarEmpty) {
      const wordData = await getMWWordData(wordSearched);
      // Show suggestions if suggestions are returned,
      if (wordData.isSuggestions) {
        searchSuggestions(wordData.suggestions);
      // Show error message if [wordData] is not found,
      } else if (wordDataNotFound(wordData)) {
        searchError(msgNotFound);
      // Show results if [wordData] is found.
      } else {
        searchValid(wordData);
      }
    } else {
      searchError(msgEmpty);
    }
  }

  // showSuggestions ///////////////////////////////////////////////////////////
  const searchSuggestions = (wdSuggestions) => {
    setSuggestions(wdSuggestions.map((wdSuggestion) => {
      return <li key={wdSuggestion}>{wdSuggestion}</li>
    }));
    // Show searchbar message:
    setSearchbarMessage(msgSuggestions);
    setSearchbarMessageClasses(clsSearchbarMessageShown);
    // Show suggestions:
    setSuggestionsClasses(clsSuggestionsShown);
  }

  // searchValid ///////////////////////////////////////////////////////////////
  // 
  const searchValid = (wordData) => {
    setSessionVocabularyData([...sessionVocabularyData, wordData]);
    console.log(sessionVocabularyData);
    setSearchbarClasses(clsSearchbarValid);
    setSearchbarMessageClasses(clsSearchbarMessageHidden);
    setSuggestionsClasses(clsSuggestionsHidden);
  }

  // searchError ///////////////////////////////////////////////////////////////
  // Displays the received [errorMessage] beneath the searchbar.
  const searchError = (errorMessage) => {
    setSearchbarMessage(errorMessage);
    setSearchbarMessageClasses(clsSearchbarMessageShown);
    setSearchbarClasses(clsSearchbarError);
    setSuggestionsClasses(clsSuggestionsHidden);
  }

  return (
    <div className="Build">
      <h2>
        Build
      </h2>
      <form className="VocabularySearchBar" onSubmit={wordSearch}>
        <input 
          id="searchbar" 
          className={searchbarClasses} 
          type="text"
          placeholder="Search for a word.">
        </input>
        <button type="submit"><FontAwesomeIcon icon={solid('magnifying-glass')} /></button>
      </form>
      <div className={searchbarMessageClasses}>
        <p>{searchbarMessage}</p> 
      </div>
      <div className={suggestionsClasses}>
        <ul>
          {suggestions}
        </ul>
      </div>
      <VocabularyCardList vocabularyData={sessionVocabularyData} />
    </div>
  );
}

export default Build;