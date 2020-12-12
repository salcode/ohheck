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
      )
    );
  }
  return (
    <div className="App">
      <div>{name} ({gameId})</div>
      <PlayerCards
        hands={rounds.map(
          (round) => round.getHand(playerIndex)
        )}
      />
    </div>
  );
}

export default App;
