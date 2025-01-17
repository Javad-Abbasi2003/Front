import {errorToast, greenToast, infoToast} from "../helpers/showToast";

const roomCreated = (msg, states) => {
  const {navigate, setGameObject, roomCode} = states;
  const {
    teams,
    userTeam,
    roomAdmin
  } = msg;

  navigate("/lobby", {replace: true});
  setGameObject({teams, userTeam, roomAdmin});

  greenToast(`Room ${roomCode} created successfully!`);
};

const joinedRoom = (msg, states) => {
  const {navigate, setGameObject} = states;
  const {
    teams,
    userTeam,
    roomAdmin
  } = msg;

  navigate("/lobby", {replace: true});
  setGameObject({teams, userTeam, roomAdmin});
};

const newUser = (msg, states) => {
  const { gameObject, setGameObject } = states;
  const {
    teams,
    userName
  } = msg;

  setGameObject({...gameObject, teams});
  infoToast(`${userName} joined room`);
};

const gameStarted = (msg, states) => {
  const { gameObject, setGameObject, navigate } = states;
  const {
    trumper,
    hand
  } = msg;

  const newGameObject = {
    ...gameObject,
    trumper,
    hand,
    // reseting values for new game
    winners: [],
    trump: "",
    userTurn: ""
  };
  newGameObject.teams[0].score = 0;
  newGameObject.teams[1].score = 0;

  setGameObject(newGameObject);
  navigate("/game", {replace: true});

  greenToast(trumper + " is the TRUMPER!");
};

const trumpSelected = (msg, states) => {
  const { gameObject, setGameObject } = states;
  const {
    trump,
    userTurn,
    hand
  } = msg;

  setGameObject({...gameObject, trump, userTurn, hand});

  greenToast(`Trump is ${trump}`);
};

const newHand = (msg, states) => {
  const { gameObject, setGameObject } = states;
  const {
    hand
  } = msg;

  setGameObject({...gameObject, hand});
};

const cardPlayed = (msg, states) => {
  const { userName, gameObject, setGameObject } = states;
  const {
    middle,
    userTurn
  } = msg;

  setGameObject({...gameObject, middle, userTurn});

  if(userName == userTurn) greenToast("It's your turn");
};

const roundEnded = (msg, states) => {
  const { userName, gameObject, setGameObject, navigate } = states;
  const {
    teams,
    userTurn,
    winners
  } = msg;

  setGameObject({
    ...gameObject,
    teams,
    middle: {cards: [], baseSuit: ""},
    userTurn,
    winners
  });

  if(userName == userTurn) {
    greenToast("You got the round!");
  } else {
    infoToast(`${userTurn} played the highest card`);
  };

  if(winners.length) navigate("/result", {replace: true});
};

const gameReseted = () => {
  // show warning toast and reload game
  errorToast("Game was ReStarted by Developer. reloading page...");

  setTimeout(() => {
    if (location.pathname == "/") {
      location.reload();
    } else {
      location.pathname = "";
    };
  }, 4000);// 4sec
};

const error = (msg) => {
  //Show a toast for errors recieved
  const {
    message,
    callback
  } = msg;

  errorToast(message);

  if (callback == "reset-app") location.pathname = "";
};


export { roomCreated, joinedRoom, newUser, gameStarted, trumpSelected, newHand, cardPlayed, roundEnded, error, gameReseted };