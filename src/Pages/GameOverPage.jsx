import { useOutletContext } from "react-router-dom";
import styles from "./GameOverPage.module.css";

const GameOverPage = () => {
  const { sendJsonMessage, userName, gameObject } = useOutletContext();

  

  return (
    <div className={styles.container}>
      {gameObject?.winners.includes(userName) ?
        <h1 style={{color: "green"}}>!!! YOU WON !!!</h1>
      :
        <h1 style={{color: "red"}}>!!! YOU LOST !!!</h1>
      }
    </div>
  );
};

export default GameOverPage;