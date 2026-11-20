
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import MainLayout from "./Layout/MainLayout";
import Blog from "./Pages/Blog";
import Who from "./Pages/Who";
import BlogPage from "./Pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogPage />,
      },
      {
        path: "who",
        element: <Who />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
