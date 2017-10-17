# name-inspiration-generator

A name inspiration generator based off of random song lyric snippets.

To start using this program, you will need to have Node.js installed and have a developer.musixmatch.com API key (https://developer.musixmatch.com). You will need to replace the REPLACE-ME placeholder in the index.js file with the api key. The program takes in two optional arguments.
The first is the length of the name (Default is between 6 - 12) and then whether it is reversed or not (Default is true).
You can pass true or false into each of these arguments if you need to specify them.

Example (variable length with default reversal)

```
node index.js 
```

Example (fixed length with default reversal)

```
node index.js 5
```

Example (fixed length with set to no reversal)

```
node index.js 5 false
