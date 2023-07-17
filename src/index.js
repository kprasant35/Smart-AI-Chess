import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from  "./Title";
import ClickToMove from "./clickToMove"
import Button from "./Button";
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <Title />
      <Outlet />
      {/* <ClickToMove  /> */}
      {/* <Button text="Play AI" /> */}
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <App />, // show component for particular path
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Button text="Play AI" route="playAI" />,
      },
      {
        path: "/playAI",
        element: <ClickToMove  />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
