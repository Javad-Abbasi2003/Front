import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import GamePage from "./Pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      {path: "game", element: <GamePage />}
    ]
  },
]);

export default router;
