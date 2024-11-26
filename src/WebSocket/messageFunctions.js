import {errorToast} from "../helpers/showToast";

const newPlayer = (msg, states) => {
  const {navigate, gameObject, setGameObject} = states;
  const {userName, teams, users, userTeam} = msg;
  if(userName==states.userName) {
    navigate("/lobby", {replace: true});
    setGameObject({...gameObject, teams, users, userTeam});
  } else {
    setGameObject({...gameObject, teams, users});
  }
}

const gameStarted = (msg, states) => {
  const { gameObject, setGameObject, navigate } = states;
  const { trumper, hands } = msg;
  setGameObject({...gameObject, trumper, hands});
  navigate("/game", {replace: true});
}
const trumpSelected = (msg, states) => {
}
const cardPlayed = (msg, states) => {
}
const roundEnded = (msg, states) => {
}

// show warning toast and reload game
const gameReseted = () => {
  errorToast("Game was ReStarted by a user. reloading page...");
  setTimeout(() => {
    if (location.pathname == "/") {
      location.reload()
    } else {
      location.pathname = "";
    }
  }, 5000);
}

//Show a toast for errors recieved
const error = (msg) => {
  const {message} = msg;
  errorToast(message);
}


export {newPlayer, gameStarted, trumpSelected, cardPlayed, roundEnded, error, gameReseted};