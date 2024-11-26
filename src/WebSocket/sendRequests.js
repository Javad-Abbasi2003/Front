const signInUser = (userName, sendJsonMessage, setUserName) => {
  setUserName(userName);
  sendJsonMessage({ type: "add-player", payload: {userName} });
};

const resetGame = (sendJsonMessage) => {
  sendJsonMessage({ type: "reset-game" });
};

const StartGame = (sendJsonMessage) => {
  sendJsonMessage({ type: "start-game" });
};

const playCard = (card, sendJsonMessage) => {
  sendJsonMessage({
    type: "play-card",
    payload: {
      playedCard: card
    }
  });
};

const selectedTrump = (trump, userName, sendJsonMessage) => {
  sendJsonMessage({
    type: "select-trump",
    payload: {
      newTrump: trump,
      userName
    }
  });
}

const newGame = (sendJsonMessage) => {
  sendJsonMessage({
    type: "new-game"
  })
}

export { signInUser, resetGame, StartGame, playCard, selectedTrump, newGame };
