import './App.css';
import Hand from './Hand';

function App() {
  const myHand = [
    {
      value: 'j',
      suit: 'spades',
    },
    {
      value: '6',
      suit: 'spades',
    },
    {
      value: 'k',
      suit: 'spades',
    },
    {
      value: 'k',
      suit: 'hearts',
    },
    {
      value: 'q',
      suit: 'spades',
    },
    {
      value: '1',
      suit: 'clubs',
    },
    {
      value: '4',
      suit: 'diamonds',
    },
    {
      value: '1',
      suit: 'spades',
    },
  ];
  return (
    <div className="App">
        <Hand cards={myHand} />
    </div>
  );
}

export default App;
