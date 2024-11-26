import { useOutletContext } from "react-router-dom";
import styles from "./GamePage.module.css";
import Card from "../components/Card";
import Hand from "../components/hand";
import { selectedTrump } from "../WebSocket/sendRequests";
// import {trumpSelected} from "../WebSocket/messageFunctions";

const GamePage = () => {
  const { sendJsonMessage, userName, gameObject } = useOutletContext();

  if (!userName) location.pathname = ""; //redirect unAuthorized users

  const suits = ["♥", "♦", "♣", "♠"];

  return (
    <>
      {gameObject && 
        <div className={styles.container}>
          <div>
          <h2>ScoreBoard:</h2>
          <p>Your Team: {gameObject.teams[gameObject.userTeam].score}</p>
          <p>Enemy Team: {gameObject.teams[gameObject.userTeam ? 0 : 1].score}</p>
          </div>
          <div className={styles.hands}>
            {gameObject.hands &&
              <>
                <Hand
                side="B" cards={gameObject.hands[userName]}
                userName={userName} showCard={true}
                active={gameObject.userTurn == userName}
                />
                {/* <div>your Ally Hand</div>
                
                <div>Enemy Hands</div>
                <div>Enemy Hands</div> */}
              </>
            }
          </div>
          
          {/* show select trump if its not selected yet and user is trumper */}
          {!gameObject.trump && gameObject.trumper == userName ?
            <div className={styles.trumpsContainer}>
              <h1>select Trump: </h1>
              <div>
                {suits.map(suit =>
                  <div key={suit} onClick={() => selectedTrump(suit, userName, sendJsonMessage)}>
                    <h2>{suit}</h2>
                  </div>
                )}
              </div>
            </div>
            :
            <>
              {!gameObject.trump &&
                <div className={styles.waitForTrump}>
                Wait for Trumper to Trump!
                </div>
              }
            </>
          }
          
          <div className={styles.middle}>
          {gameObject.middle?.cards?.map(card=> {
            <Card card={card} showCard={true} active={false}/>
          })}
          </div>
        </div>
      }
    </>
  );
};

export default GamePage;