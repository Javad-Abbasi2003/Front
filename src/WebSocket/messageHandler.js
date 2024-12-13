import { roomCreated, joinedRoom, newUser, gameStarted, trumpSelected, newHand, cardPlayed, roundEnded, error, gameReseted, notify, userLeft, userDisconnected, reconnected } from "./messageFunctions";

const messageHandler = (message, states) => {
  switch (message.type) {
    case "room-created":
      roomCreated(message, states);
      break;
    case "join-successful":
      joinedRoom(message, states);
      break;
    case "new-user":
      newUser(message, states);
      break;
    case "game-started":
      gameStarted(message, states);
      break;
    case "trump-selected":
      trumpSelected(message, states);
      break;
    case "new-hand":
      newHand(message, states);
      break;
    case "card-played":
      cardPlayed(message, states);
      break;
    case "round-ended":
      roundEnded(message, states);
      break;
    case "user-left":
      userLeft(message, states);
      break;
    case "user-disconnected":
      userDisconnected(message);
      break;
    case "reconnected":
      reconnected(message, states);
      break;
    case "game-reseted":
      gameReseted();
      break;
    case "error":
      error(message);
      break;
    case "notify":
      notify(message);
      break;

    default:
      console.log("Unexpected WebSocket Message Recieved! \n Message: ", message);
      break;
  };
};

export default messageHandler;