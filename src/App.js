import './App.css';
import Hand from './Hand';

import Deck from './objects/Deck.js';

function App() {
  const deck = new Deck();
  // Get 10 cards, for player in position 0, with 3 players in the game.
  const dealtCards = deck.deal(10,0,3);
  return (
    <div className="App">
      <Hand cards={dealtCards} />
    </div>
  );
}

export default App;
