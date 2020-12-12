import './App.css';
import PlayerCards from './PlayerCards';

import Deck from './objects/Deck.js';

function App() {
  const cardsForEachHand = [
    9, 9, 9, 6,
  ];
  const hands = [];
  const numHands = cardsForEachHand.length;
  for (let i=0; i<numHands; i++) {
    const deck = new Deck(),
      numCards = cardsForEachHand[i],
      playerPosition = 0,
      playerCount = 5;

    hands.push(
      deck.deal(numCards, playerPosition, playerCount)
    );
  }
  return (
    <div className="App">
      <PlayerCards hands={hands} />
    </div>
  );
}

export default App;
