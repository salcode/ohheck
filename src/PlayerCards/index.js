/**
 * Render all of a players hands.
 */
import Hand from '../Hand';

function PlayerCards(props) {
  const {
    playerIndex,
    rounds,
  } = props;
  return (
    rounds.map(
      (round, i) =>
        <div key={i}>
          <strong>Round {i+1}</strong>
          <Hand cards={round.getHand(playerIndex)} />
          <hr />
        </div>
    )
  );
}

export default PlayerCards;
