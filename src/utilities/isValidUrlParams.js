const objectHash = require("object-hash");

function isValidUrlParams(obj, hashKey) {
  const {
    numCardsEachRound,
    playerIndex,
    totalPlayers,
  } = obj;

  const objHashed = objectHash(obj);

  if (hashKey !== objHashed.substr(0, 8)) {
    console.log(
      'The key for the URL parameters is not valid',
    );
    return false;
  }


  if (
    playerIndex < 0 ||
    playerIndex >= totalPlayers
  ) {
    console.error(
      'playerIndex is outside of range',
      {
        playerIndex,
        totalPlayers,
      },
    );
    return false;
  }

  if (!numCardsEachRound.length) {
    console.error(
      'No rounds of cards are set to be dealt',
      {
        numCardsEachRound,
      }
    );
    return false;
  }

  if (
    ! numCardsEachRound
      .slice(-1)
      .every(
        (numCards) => numCards * totalPlayers <= 52
      )
  ) {
    console.error(
      'The last round requires too many cards',
      {
        numCards: numCardsEachRound[
          numCardsEachRound.length - 1
        ],
        totalPlayers,
      }
    );
    return false;
  }

  if (
    ! numCardsEachRound
      .slice(0,-1).every(
        (numCards) =>
          (numCards * totalPlayers + 1) < 52
      )
  ) {
    console.error(
      'At least one round requires too many cards',
      {
        numCardsEachRound,
        totalPlayers,
      },
    );
    return false;
  }

  return true;
}

export default isValidUrlParams;
