import { useOutletContext } from "react-router-dom";
import styles from "./GamePage.module.css";
import Card from "../components/Card";
import Hand from "../components/hand";
import { selectTrump } from "../WebSocket/sendRequests";

const GamePage = () => {
  const { sendJsonMessage, userName, roomCode, gameObject } = useOutletContext();

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
            <div style={{color:"green"}}>
              <span>
                Your Score:{gameObject.teams[gameObject.userTeam].score}
              </span>
              <span>
                Total:{gameObject.teams[gameObject.userTeam].totalScore}
              </span>
            </div>
            <div>
              <span>
                Enemy Score:{gameObject.teams[gameObject.userTeam ? 0 : 1].score}
              </span>
              <span>
                Total:{gameObject.teams[gameObject.userTeam ? 0 : 1].totalScore}
              </span>
            </div>
          </div>
          <div className={styles.hands}>
            {gameObject.hand &&
              <>
                <Hand
                  side="B" cards={gameObject.hand}
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
                  <div key={suit} onClick={() => selectTrump(suits[index], userName, roomCode, sendJsonMessage)}>
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