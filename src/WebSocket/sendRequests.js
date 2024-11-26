const signInUser = (userName, sendJsonMessage, setUserName) => {
  setUserName(userName);
  sendJsonMessage({ type: "add-player", payload: {userName} });
};

const resetGame = (sendJsonMessage) => {
  sendJsonMessage({ type: "reset-game" });
}

export { signInUser, resetGame };
