import { useOutletContext } from "react-router-dom";
import styles from "./GamePage.module.css";
import Card from "../components/Card";
import Hand from "../components/hand";
import { selectedTrump } from "../WebSocket/sendRequests";

const GamePage = () => {
  const { sendJsonMessage, userName, gameObject } = useOutletContext();

  if (!userName) location.pathname = ""; //redirect unAuthorized users

  const suits = ["♥", "♣", "♦", "♠"];

  const suitColor = ["red", "black", "red", "black"];

  return (
    <>
      {gameObject && 
        <div className={styles.container}>
          <div className={styles.scoreBoard}>
            {gameObject.trump && 
              <h1 style={{color:suitColor[suits.indexOf(gameObject.trump)]}}>Trump: {gameObject.trump}</h1>
            }
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
                {suits.map((suit, index) =>
                  <div key={suit} onClick={() => selectedTrump(suits[index], userName, sendJsonMessage)}>
                    <h2 style={{color: suitColor[index]}}>{suit}</h2>
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
            {gameObject.middle?.cards.map(card => 
              <Card key={card.value} card={card} showCard={true} active={false} isMiddleCard={true}/>
            )}
          </div>
        </div>
      }
    </>
  );
};

export default GamePage;