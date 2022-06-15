////////////////////////////////////////////////////////////////////////////////
// VocabularyCardExampleDefinitionList /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import VocabularyCardExampleDefinition from "./VocabularyCardExampleDefinition";
import { useState } from "react";
import { VocabularyWord } from "../../classes/vocabularyClasses";

function VocabularyCardExampleDefinitionList(vocabularyWord) {

  const [exampleDefinitions, setExampleDefinitions] = useState([]);

  console.log(vocabularyWord.vocabularyWord.getMWData());
  // vocabularyWord.getMWData();

  // const definitions = vocabularyWord.getMWData().definitions.map((word) => {
  //   return <VocabularyCardExampleDefinition type={word.type} definitions={word.definitions} />
  // })
  // setExampleDefinitions(definitions);
  return (
    <div className="VocabularyCardExampleDefinitionList">
      {/* {exampleDefinitions} */}
    </div>
  );
}

export default VocabularyCardExampleDefinitionList;