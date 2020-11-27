import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hand cards={myHand} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
