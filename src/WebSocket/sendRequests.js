const createRoom = (userName, roomCodeInput, sendJsonMessage, setUserName, setRoomCode) => {
  setUserName(userName);
  setRoomCode(roomCodeInput);

  sendJsonMessage({
    type: "new-room",
    payload: {
      userName,
      roomCode: roomCodeInput
    }
  });
};

const joinRoom = (userName, roomCodeInput, sendJsonMessage, setUserName, setRoomCode) => {
  setUserName(userName);
  setRoomCode(roomCodeInput);
  
  sendJsonMessage({
    type: "join-room",
    payload: {
      userName,
      roomCode: roomCodeInput
    }
  });
};

const startGame = (sendJsonMessage, userName, roomCode) => {
  sendJsonMessage({
    type: "start-game",
    payload: {
      userName,
      roomCode
    }
  });
};

const selectTrump = (trump, userName, roomCode, sendJsonMessage) => {
  sendJsonMessage({
    type: "select-trump",
    payload: {
      newTrump: trump,
      userName,
      roomCode
    }
  });
};

const playCard = (card, roomCode, sendJsonMessage) => {
  sendJsonMessage({
    type: "play-card",
    payload: {
      playedCard: card,
      roomCode
    }
  });
};

const newGame = (userName, roomCode, sendJsonMessage) => {
  sendJsonMessage({
    type: "new-game",
    payload: {
      userName,
      roomCode
    }
  });
};

export { createRoom, joinRoom, startGame, playCard, selectTrump, newGame };
