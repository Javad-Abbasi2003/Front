import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./LobbyPage.module.css";
import { StartGame } from "../WebSocket/sendRequests";

const LobbyPage = () => {
  const { sendJsonMessage, userName, gameObject } = useOutletContext();

  if (!userName) location.pathname = ""; //redirect unAuthorized users

  return <div className={styles.container}>
    <div className={styles.hands}></div>
    <div>
      <div>
        <h3>Users:</h3>
        {gameObject?.users.map((user, index) =>
          <p key={user}>{index+1} : {user}</p>
        )}
      </div>
      {gameObject?.teams.map((team, index) =>
        <div key={index}>
          <h3>{gameObject.userTeam == index ? "Your" : "Enemy"} Team:</h3>
          {team.players.map((player,j) =>
            <p key={player}>{j+1} : {player}</p>
          )}
        </div>
      )}
      <button onClick={() => StartGame(sendJsonMessage)}>Start Game</button>
    </div>
  </div>;
};

export default LobbyPage;
