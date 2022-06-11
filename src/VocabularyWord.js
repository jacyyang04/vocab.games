class VocabularyWord {
  constructor(headword, mwData) {
    this.headword = headword;
    this.definitions = [];
    this.quotes = [];
    this.connections = [];
    this.mwData = mwData;
  }

  addDefinition(definition) {
    console.log(definition);
  }

  removeDefinition(definition) {
    console.log(definition);
  }

}