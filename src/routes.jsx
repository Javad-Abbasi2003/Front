import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import LobbyPage from "./Pages/LobbyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      {path: "lobby", element: <LobbyPage />},
      {path: "game", element: <h1>GamePage</h1>}
    ]
  },
]);

export default router;
