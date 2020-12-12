import Card from '../Card';

const cardValueCompare = (a, b) => {
  const firstToLast = [
    '1',
    'k',
    'q',
    'j',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
  ];

  const aIndex = firstToLast.indexOf(a.value);
  const bIndex = firstToLast.indexOf(b.value);

  if (aIndex < bIndex) { return -1; }
  if (aIndex > bIndex) { return 1; }
  return 0;
}

const cardCompare = (a, b) => {
  const firstToLast = [
    'spades',
    'diamonds',
    'clubs',
    'hearts',
  ];

  const aIndex = firstToLast.indexOf(a.suit);
  const bIndex = firstToLast.indexOf(b.suit);

  if (aIndex < bIndex) { return -1; }
  if (aIndex > bIndex) { return 1; }
  return cardValueCompare(a, b);
}

function Hand(props) {
  const {
    cards = [],
  } = props;
  if (! cards.length) {
    return <div>No cards</div>;
  }
  return <ul className="hand">
    {cards
      .sort(cardCompare)
      .map(
      (card) =>
        <li key={`${card.value}${card.suit}`}>
          <Card
            className='card'
            suit={card.suit}
            value={card.value}
          />
        </li>
    )}
  </ul>
}


export default Hand;
