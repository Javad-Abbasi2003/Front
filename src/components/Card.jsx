import styles from "./Card.module.css";

const Card = ({card, showCard, active, onClick}) => {
  const cardColor = (card.suit=="♥")||(card.suit=="♦") ? "red" : "black";

  if(!showCard) {
    return(
      <div className={styles.container}>
        BackCard Image
      </div>
    )
  }

  return (
    <div style={{color: cardColor, cursor: active?"pointer":"not-allowed"}} className={styles.container} onClick={() => active && onClick()}>
      <div className={styles.value}>
        <p>{card.name}</p>
        <p>{card.suit}</p>
      </div>
      <h1 className={styles.suit}>{card.suit}</h1>
      <div  className={styles.valueR}>
        <p>{card.name}</p>
        <p>{card.suit}</p>
      </div>
    </div>
  );
};

export default Card;