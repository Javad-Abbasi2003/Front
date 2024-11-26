import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import LobbyPage from "./Pages/LobbyPage";
import GamePage from "./Pages/GamePage";
import GameOverPage from "./Pages/GameOverPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      {path: "lobby", element: <LobbyPage />},
      {path: "game", element: <GamePage />},
      {path: "result", element: <GameOverPage />}
    ]
  },
]);

export default router;
