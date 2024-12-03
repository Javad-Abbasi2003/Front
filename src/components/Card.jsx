import styles from "./Card.module.css";

const Card = ({card, showCard, active, onClick, isMiddleCard=false}) => {
  const suits = ["♥", "♦", "♣", "♠"];
  const colors = ["Red", "Blue", "Green", "Yellow"];

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
    <div style={{backgroundColor: cardColor, cursor: active?"pointer": !isMiddleCard ?"not-allowed" : ""}} className={styles.container} onClick={() => active && onClick()}>
      {isMiddleCard && 
        <span className={styles.user}>{card.user}</span>
      }
      <div className={styles.value}>
        <p>{card.name}</p>
      </div>
      <h1 className={styles.suit}>{card.name}</h1>
      <div  className={styles.valueR}>
        <p>{card.name}</p>
      </div>
    </div>
  );
};

export default Card;