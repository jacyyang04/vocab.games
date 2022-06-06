# vocab.games

![Wireframe of vocab.games.](https://i.imgur.com/nwFkyXf.png)

Inform, reason, and persuade with precision and clarity by expanding your vocabulary! 

`vocab.games` is a suite of games and tools built from vocabulary-building best-practices.

## Vocabulary

**Build** your vocabulary in chunks of algorithmically generated, semi-related words, or choose specific words of personal interest (if you're a rebel like that).

**Download** your vocabulary as a JSON file. It's *your* vocabulary, after all.

**Upload** your vocabulary as a JSON file. IDGAF!

> Like any good game, `vocab.games` tracks your vocabulary metrics and calculates a score for you to assign personal meaning to and brag about to your friends.

## Games

Play **Hinky Pinky** to hone your synonym-searching skills through numero-syllabic restrictions!

Did you know that "evil buddy" is a hinky pinky of "bad dude?" That's like *5 points.*

<details>
  <summary>How about a hinkity pinkity of "bad dude?"</summary>
  *Sinister gentleman* or *villainous grandfather* both work. Each word should be 3 syllables and synonymous with "bad" or "dude."
</details>

**Fill** challenges your ability to fill-in-the-blank with just the right word.

Play **Hang Man** to develop your deductive reasoning and learn new words to add to your vocabulary.

## Dependencies

* ReactJS
* linguarobot.io
* dictionaryapi.com

## Tasks

### MVP (Wk. 1-2)

- [x] Basic navigation & nav.
- [x] Basic columnar layout.
- [ ] *Build* displays words with definitions & IPA notation.
- [ ] *Build* displays words with pronunciation audio.
- [ ] *Build* displays prompts when inputting word data.
- [ ] *Build* accepts and stores word data.
- [ ] *Build* allows removing word data.
- [ ] *Build* allows searching for specific words.
- [ ] *Build* allows random word selection.
- [ ] *Build* finds synonyms and related words automatically. 
- [ ] *Vocabulary* displays words & word data from *Build.*
- [ ] *Vocabulary* allows editing word data.
- [ ] *Score* increments.
- [ ] *Build* displays a new word when `RETURN` is pressed.
- [ ] *Build* opens a new word data field in the same data category when `TAB` is pressed.
- [ ] *Build* opens a new word data field in the next data category when `Q` is pressed.
- [ ] *Build* bolds lexemes.
- [ ] *Build* CSS.
- [ ] *Vocabulary* CSS.
- [ ] *Build* accessed when `B` is pressed.
- [ ] *Vocabulary* accessed when `V` is pressed.

### Download (Wk. 3)

- [ ] *Download* serves JSON file of user's vocabulary.
- [ ] Data persists somehow.

### Game: Hinky Pinky (Wk. 3)

- [ ] *Hinky Pinky* accessed when `H` is pressed.
- [ ] *Hinky Pinky* displays valid challenge phrases.
- [ ] *Hinky Pinky* checks response when `RETURN` is pressed.
- [ ] *Hinky Pinky* accepts valid responses.
- [ ] *Hinky Pinky* increments *Score.*
- [ ] *Hinky Pinky* CSS.

### Game: Fill (Bonus)

- [ ] *Fill* accessed when `F` is pressed.
- [ ] ...

### Game: Hang Man (Bonus)

- [ ] *Hang Man* accessed when `G` is pressed.
- [ ] ...

### Upload (Bonus)

- [ ] *Upload* accepts valid JSON.
- [ ] *Upload* rejects invalid JSON.
- [ ] *Upload* adds to user's vocabulary.

## Future Features

* "Morphology" section added to words, if I can find an API that breaks morphemes.
* *Settings,* with features like dark-mode and toggling tooltips/hints.