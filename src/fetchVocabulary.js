////////////////////////////////////////////////////////////////////////////////
// fetchVocabulary /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

console.log(`${process.env.REACT_APP_THESAURUS_KEY}`);

const fetchWord = (word) => {
  console.log(`Fetching "${word}."`);
  const query = fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_DICTIONARY_KEY}`)
  .catch(() => {
    throw Error(`Cannot fetch "${word}." Ensure REACT_APP_DICTIONARY_KEY is present.`);
  })
  .then((fetchedResponse) => {
    console.log(fetchedResponse);
    return fetchedResponse.json();
  })
  .then((jsonifiedResponse) => {
    console.log(jsonifiedResponse);
  })
}

export {fetchWord};