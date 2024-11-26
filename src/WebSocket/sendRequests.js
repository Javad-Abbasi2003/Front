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

export { signInUser, resetGame, StartGame };
