import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../pages/layouts/DefaultLayout";
import { Post } from "../pages/Post";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Post />
      }
    ]
  }
])