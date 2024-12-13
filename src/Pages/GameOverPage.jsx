import { useOutletContext } from "react-router-dom";
import styles from "./GameOverPage.module.css";
import { newGame } from "../WebSocket/sendRequests";

const GameOverPage = () => {
  const { sendJsonMessage, userName, roomCode, gameObject } = useOutletContext();

  if (!userName) location.pathname = ""; //redirect unAuthorized users

  if(gameObject.winners.length == 0) return(
    <h1>ReStarting...</h1>
  )

  return (
    <div className={styles.container}>
      {gameObject?.winners.includes(userName) ?
        <>
          <h1 style={{color: "green"}}>!!! YOU WON !!!</h1>
          <h1>Team score: {gameObject.teams[gameObject.userTeams].totalScore}</h1>
        </>
      :
        <h1 style={{color: "red"}}>!!! YOU LOST !!!</h1>
      }
      <button onClick={() => newGame(userName, roomCode, sendJsonMessage)}>start again</button>
    </div>
  );
};

export default GameOverPage;