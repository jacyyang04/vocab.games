////////////////////////////////////////////////////////////////////////////////
// vocabularyClasses.js ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Classes for storing and updating vocabulary word data in vocab.games.

// VocabularyWord //////////////////////////////////////////////////////////////
// Primary class for storing a vocabulary word's data as the user
// edits and updates it.
class VocabularyWord {
  constructor(headword, mwData) {
    this.headword = headword;
    // [mwData] - [MWVocabularyWord] storing headword's relevant MW data.
    this.mwData = mwData;
    this.definitions = [];
    this.quotes = [];
    this.connections = [];
  }

  addDefinition(definition) {
    console.log(definition);
  }

  removeDefinition(definition) {
    console.log(definition);
  }

  getMWData() {
    return this.mwData;
  }
}

// MWVocabularyWord ////////////////////////////////////////////////////////////
// Stores formatted data from Merriam-Webster about a headword.
class MWVocabularyWord {
  constructor(headword, words) {
    this.headword = headword;
    // [words] - Array of [MWWord]s. 
    this.words = words;
  }
}

// MWWord //////////////////////////////////////////////////////////////////////
// Stores formatted data from Merriam-Webster about a word.
class MWWord {
  constructor(word, type, definitions, pronunciations) {
    this.word = word;
    this.type = type;
    this.definitions = definitions;
    // [pronunciations] - Array of [MWPronunciation]s. 
    this.pronunciations = pronunciations;
  }
}

// MWPronunciation /////////////////////////////////////////////////////////////
// Stores data from Merriam-Webster about a word's pronunciation.
class MWPronunciation {
  constructor(mwNotation) {
    this.mwNotation = mwNotation;
  }
  addMWAudioURL(mwAudioURL) {
    this.mwAudioURL = mwAudioURL;
  }
}

// MWVocabularyWord ////////////////////////////////////////////////////////////
// Stores suggested alternative words from Merriam-Webster.
class MWSuggestions {
  constructor(suggestions) {
    this.suggestions = suggestions;
  }
}

export {VocabularyWord, MWVocabularyWord, MWWord, MWPronunciation, MWSuggestions};