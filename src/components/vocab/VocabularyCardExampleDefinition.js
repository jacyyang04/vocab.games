////////////////////////////////////////////////////////////////////////////////
// VocabularyCardExampleDefinition /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function VocabularyCardExampleDefinition(type, definitions) {

  const defs = definitions.map((def) => {
    return <li>{def}</li>;
  })

  return (
    <div className="VocabularyCardExampleDefinition">
      <h5>
        {type}
      </h5>
      <ul>
        {defs}
      </ul>
    </div>
  );
}

export default VocabularyCardExampleDefinition;