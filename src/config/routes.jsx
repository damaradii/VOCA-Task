import { createBrowserRouter } from "react-router-dom";
import { Login, Task, UpdateProfile } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/task",
    element: <Task />,
  },
  {
    path: "/Update-profile",
    element: <UpdateProfile />,
  },
]);
