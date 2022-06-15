////////////////////////////////////////////////////////////////////////////////
// VocabularyCardExampleDefinitionList /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import VocabularyCardExampleDefinition from "./VocabularyCardExampleDefinition";
import { useState, useEffect } from "react";

function VocabularyCardExampleDefinitionList(vocabularyWord) {

  const [exampleDefinitions, setExampleDefinitions] = useState([]);

  useEffect(() => {
    let i = -1;
    console.log(vocabularyWord.vocabularyWord.getMWData());
    const definitions = vocabularyWord.vocabularyWord.getMWData().words.map((word) => {
      i++;
      const key = `VocabularyCardExampleDefinition-${i}`;
      return <VocabularyCardExampleDefinition key={key} type={word.type} definitions={word.definitions} />
    })
    setExampleDefinitions(definitions);
  }, []);


  return (
    <div className="VocabularyCardExampleDefinitionList">
      {exampleDefinitions}
    </div>
  );
}

export default VocabularyCardExampleDefinitionList;