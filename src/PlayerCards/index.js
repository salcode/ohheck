/**
 * Render all of a players hands.
 */
import Hand from '../Hand';

function PlayerCards(props) {
  const {
    hands,
  } = props;
  return (
    hands.map(
      (hand, i) =>
        <div key={i}>
          <strong>Round {i+1}</strong>
          <Hand cards={hand} />
          <hr />
        </div>
    )
  );
}

export default PlayerCards;
