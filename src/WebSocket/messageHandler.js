import { newPlayer, gameStarted, trumpSelected, cardPlayed, roundEnded, error, gameReseted, newGame } from "./messageFunctions";

const messageHandler = (message, states) => {
  switch (message.type) {
    case "new-player":
      newPlayer(message, states);
      break;
    case "game-started":
      gameStarted(message, states);
      break;
    case "trump-selected":
      trumpSelected(message, states);
      break;
    case "card-played":
      cardPlayed(message, states);
      break;
    case "round-ended":
      roundEnded(message, states);
      break;
    case "game-reseted":
      gameReseted();
      break;
    case "new-game":
      newGame(message, states);
      break;
    case "error":
      error(message);
      break;
    
    default:
      console.log("Unexpected WebSocket Message Recieved! \n Message: ", message);
      break;
  };
};

export default messageHandler;