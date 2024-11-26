import Card from './Card';
import { playCard } from '../WebSocket/sendRequests';
import styles from "./Hand.module.css";
import { useOutletContext } from 'react-router-dom';

const Hand = ({side, cards, userName, showCard, active}) => {
  const { sendJsonMessage } = useOutletContext();

  let css;
  switch(side) {
    case "B":
      css= {bottom:"-50px", left: "50%", transform: "translateX(-50%)"}
      break;
    case "T":
      css= {top:"-50px", left: "50%", transform: "translateX(-50%) rotate(180deg)"}
      break;
    case "L":
      css = {left:"-50px", top:"50%", transform: "translateY(-50%) rotate(90deg)"}
      break;
    case "R":
      css = {right:"-50px", top:"50%", transform: "translateY(-50%) rotate(-90deg)"}
      break;
  };

  return (
    <div className={styles.container} style={css}>
      <h2 className={styles.userName}>{userName}</h2>
      <div className={styles.cards}>
        {cards.map(card =>
          <Card
          key={card.value+card.suit} card={card}
          showCard={showCard} active={active}
          onClick={() => playCard({...card, user: userName}, sendJsonMessage)}
          />
        )}
      </div>
    </div>
  );
};

export default Hand;