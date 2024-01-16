import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Proj from "./pages/Proj";
import AddPost from "./pages/AddPost";
import Admin from "./pages/Admin";

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
        path: "/project",
        element: <Proj />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/post",
        element: <AddPost />,
      },
    ],
  },
]);
export default router;
