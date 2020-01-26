const bitap = require('bitap');
const songs = require('../songDB');
const Base64 = require('js-base64');
const base64Chars =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890=.';

module.exports = function(app) {
  app.post('/search', function(req, res) {
    const { notes } = req.body;
    // console.log(notes);
    const query = notes
      .reduce(
        (a, b, i) => (i + 1 < notes.length ? [...a, b - notes[i + 1] + 31] : a),
        []
      )
      .map(number => base64Chars[number])
      .join('');

    // validate interval length
    if (2 >= query.length && query.length >= 8)
      return res
        .status(400)
        .send('Query must be between 3 and 7 notes')
        .end();

    // console.log(query);

    const results = songs
      .filter(song => bitap(song.intervals, query, 2).length)
      .slice(0, 10)
      .map(song => ({
        title: song.name,
        composer: song.composer
      }));

    // console.log(results);
    res.json(results);
  });
};
