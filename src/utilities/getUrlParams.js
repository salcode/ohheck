function getUrlParams() {
  const queryParams = new URLSearchParams(window.location.search);
  const urlInfo = {
    checksum: queryParams.get('name') ?? '',
    gameId: queryParams.get('id') ?? '',
    name: queryParams.get('name') ?? 'Player',
    numCardsEachRound:
      (queryParams.getAll('r') ?? []).map(
        (number) => parseInt(number, 10),
      ),
    playerIndex: (queryParams.get('player') ?? 1) - 1,
    totalPlayers: parseInt(
      queryParams.get('total') ?? 2,
      10
    ),
  };
  return urlInfo;
}

export default getUrlParams;
