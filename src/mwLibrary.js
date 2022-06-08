////////////////////////////////////////////////////////////////////////////////
// mwLibrary ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Library for receiving and formatting/standardizing [WordData] from 
// Merriam-Webster/dictionaryapi.com.

function WordData(headword, words, isSuggestions) {
  this.headword = headword;
  this.words = words;
  this.isSuggestions = isSuggestions;
}

function WordSuggestions(suggestions, isSuggestions) {
  this.suggestions = suggestions;
  this.isSuggestions = isSuggestions;
}

function Word(word, type, definitions, pronunciations) {
  this.word = word;
  this.type = type;
  this.definitions = definitions;
  this.pronunciations = pronunciations;
}

function Pronunciation(mwNotation, mwAudioURL) {
  this.mwNotation = mwNotation;
  this.mwAudioURL = mwAudioURL;
}

// getMWWordData ///////////////////////////////////////////////////////////////
// Returns formatted [WordData] from dictionaryapi.com if [wordQuery] yields
// an exact result.
// Returns [WordSuggestions] with alternative queries if [wordQuery] yields
// inexact results.
const getMWWordData = async (wordQuery) => {
  let mwWordArray = await fetchMWWordArray(wordQuery);
  if (mwWordArrayIsSuggestions(mwWordArray)) {
    return new WordSuggestions(mwWordArray, true);
  } else {
    return new WordData(wordQuery, formatMWWordArray(mwWordArray), false);
  }
}

// wordDataNotFound ////////////////////////////////////////////////////////////
// Returns [true] if the given [wordData] [WordData] obj. has 0 words.
// Returns [false] otherwise.
const wordDataNotFound = (wordData) => {
  return wordData.words.length === 0;
}

// fetchMWWordArray ////////////////////////////////////////////////////////////
// Fetches a [mwWordArray] of objects containing word data from 
// dictionaryapi.com, given a [wordQuery] string.
const fetchMWWordArray = (wordQuery) => {
  console.log(`Fetching "${wordQuery}."`);
  const mwWordArray = fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${wordQuery}?key=${process.env.REACT_APP_DICTIONARY_KEY}`)
  .catch(() => {
    throw Error(`Cannot fetch "${wordQuery}." Ensure REACT_APP_DICTIONARY_KEY is present.`);
  })
  .then((fetchedResponse) => {
    return fetchedResponse.json();
  })
  return mwWordArray;
}

// mwWordArrayIsSuggestions ////////////////////////////////////////////////////
// Returns [true] if the given [mwWordArray] contains suggestions for 
// alternative spellings/words rather than word data.
// Returns [false] if the given [mwWordArray] contains word data.
const mwWordArrayIsSuggestions = (mwWordArray) => {
  return typeof mwWordArray[0] === "string";
}

// formatMWWordArray ///////////////////////////////////////////////////////////
// Returns a [formattedWordArray] given a [mwWordArray].
const formatMWWordArray = (mwWordArray) => {
  // Remove metadata,
  let formattedWordArray = removeMWMetadata(mwWordArray);
  // Format each word into a [Word].
  formattedWordArray = formattedWordArray.map(formatMWWord);
  return formattedWordArray;
}

// removeMWMetadata ////////////////////////////////////////////////////////////
const removeMWMetadata = (mwWordArray) => {
  return mwWordArray.filter(i => i.hasOwnProperty("hom"));
}

// formatMWWord ////////////////////////////////////////////////////////////////
// Returns a newly formatted [Word], given a [mwWord] obj. in Merriam-Webster
// format.
const formatMWWord = (mwWord) => {
  const word = mwWord.hwi.hw;
  const type = mwWord.fl;
  const definitions = mwWord.shortdef;
  let pronunciations = [];
  if (mwWord.hwi.hasOwnProperty("prs")) {
    pronunciations = formatMWPronunciations(mwWord.hwi.prs);
  }
  return new Word(word, type, definitions, pronunciations);
}

// formatPronunciations ////////////////////////////////////////////////////////
// Given a valid array of [pronunciations], returns a [formattedPronunciations]
// array.
const formatMWPronunciations = (pronunciations) => {
  const formattedPronunciations = pronunciations.map(pronunciation => {
    const mwNotation = pronunciation.mw;
    let formattedPronunciation = new Pronunciation(mwNotation);
    if (pronunciation.hasOwnProperty("sound")) {
      formattedPronunciation.mwAudioURL = 
        getMWAudioURL(pronunciation.sound.audio);
    }
    return formattedPronunciation;
  });
  return formattedPronunciations;
}

// getMWAudioURL ///////////////////////////////////////////////////////////////
// Returns the URL to a pronunciation's audio, given a valid [mwAudio] string
// from dictionaryapi.com.
const getMWAudioURL = (mwAudio) => {
  const firstChar = mwAudio[0];
  const bixDir = mwAudio.startsWith("bix");
  const ggDir = mwAudio.startsWith("gg");
  if (bixDir) {
    return `https://media.merriam-webster.com/audio/prons/en/us/wav/bix/${mwAudio}.wav`;
  } else if (ggDir) {
    return `https://media.merriam-webster.com/audio/prons/en/us/wav/gg/${mwAudio}.wav`;
  } else {
    return `https://media.merriam-webster.com/audio/prons/en/us/wav/${firstChar}/${mwAudio}.wav`;
  }
}

export {getMWWordData, wordDataNotFound};