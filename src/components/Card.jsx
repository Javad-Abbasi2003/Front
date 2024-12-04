import styles from "./Card.module.css";

const Card = ({card, showCard, active, onClick, isMiddleCard=false}) => {
  const suits = ["♥", "♦", "♣", "♠"];
  const colors = ["Red", "Red", "black", "black"];

  const colorI = suits.indexOf(card.suit);
  const cardColor = colors[colorI];

  if(!showCard) {
    return(
      <div className={styles.container}>
        BackCard Image
      </div>
    )
  }

  

  return (
    <div style={{color: cardColor, cursor: active?"pointer": !isMiddleCard ?"not-allowed" : ""}} className={styles.container} onClick={() => active && onClick()}>
      {isMiddleCard && 
        <span className={styles.user}>{card.user}</span>
      }
      <div className={styles.value}>
        <p>{card.name}</p>
        <p>{card.suit}</p>
      </div>
      <h1 className={styles.suit}>{card.suit}</h1>
      <div className={styles.valueR}>
        <p>{card.name}</p>
        <p>{card.suit}</p>
      </div>
    </div>
  );
};

export default Card;