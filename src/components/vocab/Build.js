////////////////////////////////////////////////////////////////////////////////
// Build ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { getMWWordData, wordDataNotFound } from "../../mwLibrary";
import hotkeys from "hotkeys-js";
import { useHotkeys } from "react-hotkeys-hook";

function Build() {

  const eleSearchbar = document.getElementById("searchbar");

  const msgEmpty = "Search for a word.";
  const msgNotFound = "Word not found.";

  const clsSearchbarValid = "";
  const clsSearchbarError = "error";
  const clsSearchbarMessageHidden = "searchbar-message hidden";
  const clsSearchbarMessageShown = "searchbar-message";
  const clsSuggestionsHidden = "suggestions hidden";
  const clsSuggestionsShown = "suggestions";

  const [searchbarMessage, setSearchbarMessage] = useState(msgEmpty);
  const [searchbarMessageClasses, setSearchbarMessageClasses] = useState(clsSearchbarMessageHidden);
  const [searchbarClasses, setSearchbarClasses] = useState(clsSearchbarValid);

  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsClasses, setSuggestionsClasses] = useState(clsSuggestionsHidden);

  const [words, setWords] = useState([]);

  useHotkeys('/', () => {
    const searchbar = document.getElementById("searchbar");
    searchbar.focus();
  }, {
    filterPreventDefault: true
  });

  // wordSearch ////////////////////////////////////////////////////////////////
  const wordSearch = async (event) => {
    // Prevent browser refresh.
    event.preventDefault();
    const wordSearched = event.target[0].value;
    const searchbarEmpty = (wordSearched === "");
    if (!searchbarEmpty) {
      const wordData = await getMWWordData(wordSearched);
      console.log(wordData);
      if (wordData.isSuggestions) {
        showSuggestions(wordData.suggestions);
      } else if (wordDataNotFound(wordData)) {
        searchError(msgNotFound);
      } else {
        searchValid();
      }
    } else {
      searchError(msgEmpty);
    }
  }

  // showSuggestions ///////////////////////////////////////////////////////////
  const showSuggestions = (wdSuggestions) => {
    setSuggestions(wdSuggestions.map((wdSuggestion) => {
      return <li key={wdSuggestion}>${wdSuggestion}</li>
    }));
    setSuggestionsClasses(clsSuggestionsShown);
  }

  // filterWordArray ///////////////////////////////////////////////////////////
  // Returns a filtered word array with just homographs.
  const filterWordArray = (rawWordArray) => {
    let filteredWordArray = rawWordArray.filter(i => i.hasOwnProperty("hom"));
    return filteredWordArray;
  }

  // displayVocabularyCard /////////////////////////////////////////////////////
  const displayVocabularyCard = () => {
    
  }

  // validSearch ///////////////////////////////////////////////////////////////
  const searchValid = () => {
    setSearchbarClasses(clsSearchbarValid);
    setSearchbarMessageClasses(clsSearchbarMessageHidden);
    setSuggestionsClasses(clsSuggestionsHidden);
  }

  // searchError ///////////////////////////////////////////////////////////////
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
        <input id="searchbar" className={searchbarClasses} type="text"></input>
        <button type="submit">Search</button>
      </form>
      <div className={searchbarMessageClasses}>
        <p>{searchbarMessage}</p> 
      </div>
      <div className={suggestionsClasses}>
        <ul>
          {suggestions}
        </ul>
      </div>
    </div>
  );
}

export default Build;