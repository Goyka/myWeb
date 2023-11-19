import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Study from "./pages/Study";
import Proj from "./pages/Proj";
import Admin from "./pages/Admin";
import AddPost from "./pages/AddPost";

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
