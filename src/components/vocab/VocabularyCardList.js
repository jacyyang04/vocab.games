////////////////////////////////////////////////////////////////////////////////
// VocabularyCardList //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import VocabularyCard from "./VocabularyCard";
import {VocabularyWord} from "../../classes/vocabularyClasses";

function VocabularyCardList({ sessionVocabularyData }) {

  let i = -1;
  const vocabularyCardList = sessionVocabularyData.map((sessionVocabularyWordData) => {
    i++;
    const vocabularyCardKey = `VocabularyCard-${i}-${sessionVocabularyWordData.headword}`
    return <VocabularyCard 
      key={vocabularyCardKey}
      id={vocabularyCardKey}
      vocabularyWord={sessionVocabularyWordData}
    />
  })

  return (
    <div className="VocabularyCardList">
      {vocabularyCardList}
    </div>
  );
}

export default VocabularyCardList;