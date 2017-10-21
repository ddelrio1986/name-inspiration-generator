#! /usr/bin/env node

const fs = require('fs');
const rndSong = require('rnd-song');
const yargs = require('yargs').argv;

const nameLength = Math.floor((Math.random() * 12) + 6);
const home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
const path = home + '/.inspireme-key';

if (yargs.wordcount > 0) {
  nameLength = parseInt(yargs.wordcount);
}

let apikey = '';
if (fs.existsSync(path)) {
  apikey = fs.readFileSync(path, 'utf8');
} else {
  console.log('You need to set your API key with the command: inspireme-addkey --key ADDYOURKEYHERE');
  process.exit(1);
}

const reversed = yargs.reversed;
const options = {
  api_key: apikey,
  snippet: true,
  language: 'en'
};

rndSong(options, (err, res) => {
  if (!err) {
    let snippet = res.snippet.snippet_body;
    snippet = snippet.replace(/[^a-zA-Z]/g, '').toLowerCase();

    if (reversed) snippet = snippet.split('').reverse().join('');

    const start = Math.floor(Math.random() * ((snippet.length - 1) - nameLength));

    const end = ((start + 1) + nameLength > snippet.length)
      ? snippet.length - start
      : start + nameLength;

    console.log(snippet.substring(start, end));
  }
});
