const fs = require('fs');
const parseMidi = require('midi-file').parseMidi;

const prelude = fs.readFileSync('./songs/cs1-1pre.mid');

const parsed = parseMidi(prelude);

const base64Chars =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890=.';

// console.log(parsed.tracks[1]);

const values = parsed.tracks[1]
  .filter(note => note.noteNumber)
  .map(note => note.noteNumber);

const output = values
  .reduce(
    (a, b, i, arr) => (i + 1 < arr.length ? [...a, b - arr[i + 1] + 31] : a),
    []
  )
  .map(number => base64Chars[number])
  .join('');

console.log(output);
