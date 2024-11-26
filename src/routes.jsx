import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import LobbyPage from "./Pages/LobbyPage";
import GamePage from "./Pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      {path: "lobby", element: <LobbyPage />},
      {path: "game", element: <GamePage/>}
    ]
  },
]);

export default router;
