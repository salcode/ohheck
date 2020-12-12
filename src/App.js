import './App.css';
import PlayerCards from './PlayerCards';

import Deck from './objects/Deck.js';
import Round from './objects/Round.js';

const getUrlInfo = () => ({
  checksum: '123',
  name: 'Corvita',
  numCardsEachRound: [2, 3, 4, 5, 5],
  playerIndex: 1,
  gameId: 'abc123',
  totalPlayers: 2,
});

function App() {
  const {
    gameId,
    name,
    numCardsEachRound,
    playerIndex,
    totalPlayers,
  } = getUrlInfo();
  const rounds = [];
  const numRounds = numCardsEachRound.length;
  for (let i=0; i<numRounds; i++) {
    rounds.push(
      new Round(
        new Deck(gameId),
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
