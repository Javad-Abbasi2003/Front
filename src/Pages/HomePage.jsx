import React, { useState } from 'react';
import { createRoom, joinRoom } from '../WebSocket/sendRequests';
import { useOutletContext } from 'react-router-dom';
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { sendJsonMessage, readyState, setUserName, setRoomCode, setHostIp } = useOutletContext();

  const [userNameInput, setUserNameInput] = useState("");
  const [roomCodeInput, setRoomCodeInput] = useState("");
  const [ip, setIp] = useState("wss://hokmapi.abbasishavazi.ir:443");
  // const [ip, setIp] = useState("ws://localhost:3000");

  const ipColor = (readyState==1) ? "green" : (readyState==0) ? "gold" : "red";
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Hokm Lan</h1>
      <h3 className={styles.programmersHeader}>Programmers:</h3>
      <h4 className={styles.programmers}>MohammadJavad Abbasi</h4>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <label style={{color: ipColor}}>Host IP: </label>
          <input style={{color: ipColor, border: `${ipColor} 2px solid`}} type='text' value={ip} onChange={({target})=> setIp(target.value)} placeholder='127.0.0.1' />
          <button onClick={()=>setHostIp(ip)}>Set IP</button>
        </div>
        <div className={styles.inputContainer}>
          <label>User Name: </label>
          <input type='text' value={userNameInput} onChange={({target})=>target.value.length<=15 && setUserNameInput(target.value)} placeholder='User Name' />
        </div>
        <div className={styles.inputContainer}>
          <label>Room Code: </label>
          <input type='text' value={roomCodeInput} onChange={({target})=>target.value.length<=16 && setRoomCodeInput(target.value)} placeholder='Room Code' />
        </div>
        <div className={styles.joinBtns}>
          <button onClick={()=> (readyState==1) ? joinRoom(userNameInput, roomCodeInput, sendJsonMessage, setUserName, setRoomCode) : ""}>
            Join Room
          </button>
          <button onClick={()=> (readyState==1) ? createRoom(userNameInput, roomCodeInput, sendJsonMessage, setUserName, setRoomCode) : ""}>
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;