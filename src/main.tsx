import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/router-training/HomePage.tsx";
import ProfilePage from "./components/router-training/ProfilePage.tsx";
import ProfilesPage from "./components/router-training/ProfilesPage.tsx";
import NotFoundPage from "./components/router-training/NotFoundPage.tsx";
import TodoPage from "./components/TodoPage/TodoPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: `/profiles/:profileId`,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/todo-list",
    element: <TodoPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
