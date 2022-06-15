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
* [HotKeys.js](https://github.com/jaywcjlove/hotkeys)
* [Merriam-Webster's Collegiate® Dictionary with Audio](https://dictionaryapi.com/products/api-collegiate-dictionary)
* [Merriam-Webster's Collegiate® Thesaurus](https://dictionaryapi.com/products/api-collegiate-thesaurus)

## What's Complete

The *Build* page can be searched for words valid to the Merriam-Webster dictionary, and will suggest alternative words if no word is found but adjacent-enough words are.

Hotkeys work.

`console.log` reports data having to do with searched words in the `sessionVocabulary`.

At the moment no dictionary definitions display, and users cannot add their own vocabulary data (definitions, quotes, connections) yet.