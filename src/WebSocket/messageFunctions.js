import {errorToast, greenToast} from "../helpers/showToast";

const newPlayer = (msg, states) => {
  const {navigate, gameObject, setGameObject} = states;
  const {userName, teams, users, userTeam} = msg;
  if(userName==states.userName) {
    navigate("/lobby", {replace: true});
    setGameObject({...gameObject, teams, users, userTeam});
  } else {
    setGameObject({...gameObject, teams, users});
  };
};

const gameStarted = (msg, states) => {
  const { userName, gameObject, setGameObject, navigate } = states;
  const { trumper, hands } = msg;
  if(gameObject.users.includes(userName)) {
    greenToast(trumper + " is the TRUMPER!");
    setGameObject({...gameObject, trumper, hands});
    navigate("/game", {replace: true});
  }
};

const trumpSelected = (msg, states) => {
  const { userName, gameObject, setGameObject } = states;
  const { trump, userTurn, hands } = msg;

  setGameObject({...gameObject, trump, userTurn, hands});

  greenToast(`Trump is ${trump}`);
};

const cardPlayed = (msg, states) => {
  const { userName, gameObject, setGameObject } = states;
  const { userTurn, middle, hands } = msg;

  setGameObject({...gameObject, userTurn, middle, hands});

  if(userName == userTurn) greenToast("It's your turn");
};

const roundEnded = (msg, states) => {
};

// show warning toast and reload game
const gameReseted = () => {
  errorToast("Game was ReStarted by a user. reloading page...");
  setTimeout(() => {
    if (location.pathname == "/") {
      location.reload()
    } else {
      location.pathname = "";
    }
  }, 1000);
};

//Show a toast for errors recieved
const error = (msg) => {
  const {message} = msg;
  errorToast(message);
};


export {newPlayer, gameStarted, trumpSelected, cardPlayed, roundEnded, error, gameReseted};