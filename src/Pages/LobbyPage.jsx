import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./LobbyPage.module.css";
import { startGame } from "../WebSocket/sendRequests";

const LobbyPage = () => {
  const { sendJsonMessage, userName, roomCode, gameObject } = useOutletContext();

  if (!userName) location.pathname = ""; //redirect unAuthorized users

  return (
    <div className={styles.container}>
      <div>
        {gameObject?.teams?.map((team, index) =>
          <div key={index}>
            <h3>{gameObject.userTeam == index ? "Your" : "Enemy"} Team:</h3>
            {team.players.map((player,j) =>
              <p key={player} style={{color:(userName==player) ? "green" : ""}}>{j+1} : {player}</p>
            )}
          </div>
        )}
        <button onClick={() => startGame(sendJsonMessage, userName, roomCode)}>Start Game</button>
      </div>
    </div>
  );
};

export default LobbyPage;
