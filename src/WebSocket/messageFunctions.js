import {errorToast} from "../helpers/showToast";

const newPlayer = (msg, states) => {
  const {navigate, gameObject, setGameObject} = states;
  const {userName, teams, users} = msg;
  if(userName==states.userName) {
    navigate("/game", {replace: true});
    setGameObject({...gameObject, teams, users});
  }
}

const gameStarted = (msg) => {
}
const trumpSelected = (msg) => {
}
const cardPlayed = (msg) => {
}
const roundEnded = (msg) => {
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