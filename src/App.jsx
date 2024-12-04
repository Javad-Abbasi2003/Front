import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useWebSocket from 'react-use-websocket';
import messageHandler from './WebSocket/messageHandler';
import { resetGame } from './WebSocket/sendRequests';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [gameObject, setGameObject] = useState();
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const [hostIp, setHostIp] = useState(location.hostname);
  const WS_URL = `ws://${hostIp}:8000`;
  
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      share: false,
      shouldReconnect: () => true,
    },
  );
  
  useEffect(() => {
    if(lastJsonMessage) {
      console.log("lastJsonMessage: ", lastJsonMessage)
      messageHandler(lastJsonMessage, {userName, gameObject, setGameObject, navigate});
      console.log(gameObject)
    }
  }, [lastJsonMessage]);

  return (
    <>
      <button className='reset-btn' onClick={()=> resetGame(sendJsonMessage)}>R!</button>
      <Outlet context={{ setHostIp, sendJsonMessage, readyState, userName, setUserName, gameObject, setGameObject }} />
      <ToastContainer />
    </>
  )
}

export default App
