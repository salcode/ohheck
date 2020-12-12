import shuffle from '../utilities/shuffle.js';

const isValidIndex = (index) => index >= 0 && index <= 52;

export default class Deck {
  constructor() {
    this.cards = shuffle(
      this._getUnshuffledDeck()
    );
  }

  getCards() {
    return this.cards;
  }

  /**
   * Deal from deck.
   *
   * @param {number} numCards       The number of cards to deal.
   * @param {number} playerPosition The zero indexed player position.
   * @param {number} playerCount    The number of players receiving cards.
   *
   * e.g. deal(10, 0, 10) will deal ten (10) cards to the first player (0) in a
   * game with five (5) players.
   */
  deal(numCards, playerPosition, playerCount) {
    const playerCards = [];
    for (let i=0; i<numCards; i++) {
      const index = i*playerCount+playerPosition;
      playerCards.push(
        this.getCard(index)
      );
    }
    return playerCards;
  }

  getCard(index) {
    if (!isValidIndex(index)) {
      throw Error(
        `Attempted to get card with bad index: ${index}`
      );
    }
    return this.cards[index];
  }

  _getUnshuffledDeck() {
    return [ 'hearts', 'clubs', 'diamonds', 'spades' ]
      .map(
        (suit) => [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          'j',
          'q',
          'k',
        ].map((value) =>
          ({
            suit,
            value,
          })
        )
      ).reduce(
        (accumulator, currentValue) =>
          accumulator.concat(currentValue)
      );
  }
}
