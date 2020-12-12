export default class Round {
  constructor(
    deck,
    numCardsPerHand,
    playerCount,
    hasTrump = true,
  ) {
    this.deck = deck;
    this.numCardsPerHand = numCardsPerHand;
    this.playerCount = playerCount;
    this.hasTrump = hasTrump;
  }

  getHand(playerIndex) {
    return this.deck.deal(
      this.numCardsPerHand,
      playerIndex,
      this.playerCount,
    );
  }

  getTrumpCardAsString() {
    if (!this.hasTrump) {
      return 'no';
    }
    const trumpCard = this.deck.getCard(
      this.numCardsPerHand * this.playerCount
    );
    return `${trumpCard.value} ${trumpCard.suit}`;
  }
}
