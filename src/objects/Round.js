export default class Round {
  constructor(deck, numCardsPerHand, playerCount) {
    this.deck = deck;
    this.numCardsPerHand = numCardsPerHand;
    this.playerCount = playerCount;
  }

  getHand(playerIndex) {
    return this.deck.deal(
      this.numCardsPerHand,
      playerIndex,
      this.playerCount,
    );
  }
}
