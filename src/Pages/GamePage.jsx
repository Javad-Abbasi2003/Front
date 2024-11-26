import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./GamePage.module.css";

const GamePage = () => {
  const { sendJsonMessage, userName, gameObject } = useOutletContext();

  if (!userName) location.pathname = ""; //redirect unAuthorized users

  return <div className={styles.container}>
    <div className={styles.hands}></div>
    <div>
      <div>
        users
      </div>
      <button>Start Game</button>
    </div>
  </div>;
};

export default GamePage;
