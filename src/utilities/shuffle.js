/**
 * Shuffle an array.
 *
 * See https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
const seedrandom = require('seedrandom');

function shuffle(array, seed) {
  const randomNumberGenerator = seedrandom(seed);
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(
      randomNumberGenerator()*currentIndex
    );
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default shuffle;
