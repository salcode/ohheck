import './App.css';
import PlayerCards from './PlayerCards';

import Deck from './objects/Deck.js';
import Round from './objects/Round.js';

import getUrlParams from './utilities/getUrlParams.js';
import isValidUrlParams from './utilities/isValidUrlParams.js';

function App() {
  const urlParams = getUrlParams();
  const hashkey = new URLSearchParams(window.location.search).get('key') ?? '';
  if (!isValidUrlParams(urlParams, hashkey)) {
    return (
      <div className="App">
        <h1>Invalid Game Information</h1>
      </div>
    );
  }
  const {
    gameId,
    name,
    numCardsEachRound,
    playerIndex,
    totalPlayers,
  } = urlParams;
  const rounds = [];
  const numRounds = numCardsEachRound.length;
  for (let i=0; i<numRounds; i++) {
    rounds.push(
      new Round(
        new Deck(gameId, i),
        numCardsEachRound[i],
        totalPlayers,
        i + 1 < numRounds
      )
    );
  }
  return (
    <div className="App">
      <div className="user-name-and-game-id">{name} (Player: {playerIndex+1} | Game: {gameId})</div>
      <PlayerCards
        rounds={rounds}
        playerIndex={playerIndex}
      />
    </div>
  );
}

export default App;
