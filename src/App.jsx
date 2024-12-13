import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useWebSocket from 'react-use-websocket';
import messageHandler from './WebSocket/messageHandler';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [gameObject, setGameObject] = useState({});
  const [userName, setUserName] = useState("");
  const [roomCode, setRoomCode] = useState("");

  const navigate = useNavigate();

  const [hostIp, setHostIp] = useState("wss://hokmapi.abbasishavazi.ir:443");
  // const [hostIp, setHostIp] = useState("ws://localhost:3000");
  const WS_URL = hostIp;
  
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      share: false,
      shouldReconnect: () => true,
    },
  );
  
  useEffect(() => {
    if(lastJsonMessage) 
      messageHandler(lastJsonMessage, {userName, roomCode, gameObject, setGameObject, navigate});
  }, [lastJsonMessage]);

  return (
    <>
      <Outlet context={
        { setHostIp, sendJsonMessage, readyState,
          userName, setUserName, gameObject,
          setGameObject, roomCode, setRoomCode
        }}
      />
      <ToastContainer />
    </>
  );
};

export default App;