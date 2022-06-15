////////////////////////////////////////////////////////////////////////////////
// mwLibrary ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Library for receiving and formatting/standardizing [WordData] from 
// Merriam-Webster/dictionaryapi.com.

import { MWVocabularyWord, MWWord, MWPronunciation, MWSuggestions } from "../classes/vocabularyClasses";

// getMWWordData ///////////////////////////////////////////////////////////////
// Returns formatted [MWVocabularyWord] from dictionaryapi.com if [wordQuery]
// yields an exact result.
// Returns [MWSuggestions] with alternative queries if [wordQuery] yields
// inexact results.
const getMWWordData = async (wordQuery) => {
  let mwWordArray = await fetchMWWordArray(wordQuery);
  // If MW returned [mwWordArray] of suggestions, return a [MWSuggestions] with
  // suggestions.
  if (mwWordArrayIsSuggestions(mwWordArray)) {
    return new MWSuggestions(mwWordArray);
  // If MW returned [mwWordArray] of words, 
  } else {
    return new MWVocabularyWord(wordQuery, formatMWWordArray(mwWordArray));
  }
}

// wordDataNotFound ////////////////////////////////////////////////////////////
// Returns [true] if the given [MWVocabularyWord] [mwVocabularyWord] has 0 
// words.
// Returns [false] otherwise.
const wordDataNotFound = (mwVocabularyWord) => {
  return mwVocabularyWord.words.length === 0;
}

// fetchMWWordArray ////////////////////////////////////////////////////////////
// Fetches a [mwWordArray] of objects containing word data from 
// dictionaryapi.com, given a [wordQuery] string.
const fetchMWWordArray = (wordQuery) => {
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
// Filters out excess MW metadata (data that doesn't have a "hom" property).
const removeMWMetadata = (mwWordArray) => {
  return mwWordArray.filter(i => i.hasOwnProperty("hom"));
}

// formatMWWord ////////////////////////////////////////////////////////////////
// Returns a newly formatted [MWWord], given a [mwWord] obj. in Merriam-Webster
// format.
const formatMWWord = (mwWord) => {
  const word = mwWord.hwi.hw;
  const type = mwWord.fl;
  const definitions = mwWord.shortdef;
  let pronunciations = [];
  if (mwWord.hwi.hasOwnProperty("prs")) {
    pronunciations = formatMWPronunciations(mwWord.hwi.prs);
  }
  return new MWWord(word, type, definitions, pronunciations);
}

// formatMWPronunciations //////////////////////////////////////////////////////
// Given a valid array of [pronunciations], returns a [formattedPronunciations]
// array.
const formatMWPronunciations = (pronunciations) => {
  const mwPronunciations = pronunciations.map(pronunciation => {
    const mwNotation = pronunciation.mw;
    let mwPronunciation = new MWPronunciation(mwNotation);
    if (pronunciation.hasOwnProperty("sound")) {
      mwPronunciation.addMWAudioURL(pronunciation.sound.audio);
    }
    return mwPronunciation;
  });
  return mwPronunciations;
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