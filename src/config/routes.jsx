import { createBrowserRouter } from "react-router-dom";
import { Login, Task, UpdateProfile } from "../pages";
import { Button, TaskForm } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Task />,
  },
  {
    path: "/Update-profile",
    element: <UpdateProfile />,
  },
  {
    path: "/but",
    element: <TaskForm />,
  },
]);
