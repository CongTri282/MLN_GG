import "./App.css";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Theory from "./pages/Theory/Theory";
import Game from "./pages/Game/Game";
import Result from "./pages/Result/Result";
import AIUsage from "./pages/AIUsage/AIUsage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "theory", element: <Theory /> },
      { path: "game", element: <Home /> },
      { path: "in-game", element: <Game /> },
      { path: "result", element: <Result /> },
      { path: "ai-usage", element: <AIUsage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
