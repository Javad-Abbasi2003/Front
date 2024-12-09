import React, { useState } from 'react';
import { signInUser } from '../WebSocket/sendRequests';
import { useOutletContext } from 'react-router-dom';
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { sendJsonMessage, readyState, setUserName, setHostIp } = useOutletContext();

  const [input, setInput] = useState("");
  const [ip, setIp] = useState("wss://hokmapi.abbasishavazi.ir:443");

  const ipColor = (readyState==1) ? "green" : (readyState==0) ? "gold" : "red";
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Hokm Lan</h1>
      <h3 className={styles.programmersHeader}>Programmers:</h3>
      <h4 className={styles.programmers}>MohammadJavad Abbasi</h4>
      <h4 className={styles.programmers}>Alireza Salimi</h4>
      <div className={styles.form}>
        <div className={styles.nameContainer}>
          <label>Host IP: </label>
          <input style={{color: ipColor, border: `${ipColor} 2px solid`}} type='text' value={ip} onChange={({target})=> setIp(target.value)} placeholder='127.0.0.1' />
          <button onClick={()=>setHostIp(ip)}>Set IP</button>
        </div>
        <div className={styles.nameContainer}>
          <label>User Name: </label>
          <input type='text' value={input} onChange={({target})=>target.value.length<=15 && setInput(target.value)} placeholder='User Name' />
        </div>
        <button className={styles.joinBtn} onClick={()=> (readyState==1) ? signInUser(input, sendJsonMessage, setUserName) : ""}>Join Game</button>
      </div>
    </div>
  );
};

export default HomePage;