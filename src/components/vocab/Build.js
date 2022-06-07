////////////////////////////////////////////////////////////////////////////////
// Build ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { fetchWord } from "../../fetchVocabulary";
import hotkeys from "hotkeys-js";
import { useHotkeys } from "react-hotkeys-hook";

function Build() {

  const searchbar = document.getElementById("searchbar");
  const [searchbarMessageClasses, setSearchbarMessageClasses] = useState("searchbar-message hidden");
  const [searchbarClasses, setSearchbarClasses] = useState("");
  const [words, setWords] = useState([]);

  useHotkeys('/', () => {
    const searchbar = document.getElementById("searchbar");
    searchbar.focus();
  }, {
    filterPreventDefault: true
  });

  // wordSearch ////////////////////////////////////////////////////////////////
  const wordSearch = (event) => {
    // Prevent browser refresh.
    event.preventDefault();
    const wordSearched = event.target[0].value;
    const wordSearchedExists = (!(wordSearched === ""));
    // Fetch if [wordSearchedExists],
    if (wordSearchedExists) {
      validSearch();
      const word = fetchWord(wordSearched);
      console.log(word);
    // and if it's empty, display error.
    } else {
      invalidSearch();
    }
  }

  // displayVocabularyCard /////////////////////////////////////////////////////
  const displayVocabularyCard = () => {
    
  }

  // validSearch ///////////////////////////////////////////////////////////////
  const validSearch = () => {
    setSearchbarMessageClasses("searchbar-message hidden");
    setSearchbarClasses("");
  }

  // invalidSearch /////////////////////////////////////////////////////////////
  const invalidSearch = () => {
    setSearchbarMessageClasses("searchbar-message");
    setSearchbarClasses("error");
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
        Search for a word.  
      </div>
    </div>
  );
}

export default Build;