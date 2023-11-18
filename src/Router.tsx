import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Study from "./pages/Study";
import Proj from "./pages/Proj";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/study",
        element: <Study />,
      },
      {
        path: "/project",
        element: <Proj />,
      },
    ],
  },
]);
export default router;
