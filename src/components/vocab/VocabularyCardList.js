////////////////////////////////////////////////////////////////////////////////
// VocabularyCardList //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import VocabularyCard from "./VocabularyCard";

function VocabularyCardList({ vocabularyData }) {

  const vocabularyCardList = vocabularyData.map((vocabularyWord) => {
    return <VocabularyCard 
      key={vocabularyWord.headword}
      id={vocabularyWord.headword}
      vocabularyWord={vocabularyWord}
    />
  })

  return (
    <div className="VocabularyCardList">
      {vocabularyCardList}
    </div>
  );
}

export default VocabularyCardList;