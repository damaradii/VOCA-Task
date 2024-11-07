import { createBrowserRouter } from "react-router-dom";
import { Login, Task, UpdateProfile } from "../pages";
import { Button, TaskForm, Upload } from "../components";

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
