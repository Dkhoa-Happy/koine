import HomePage from "./pages/home";
import MovieManagement from "./pages/movie-management";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.scss";
import Login from "./pages/login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/movie-management",
      element: <MovieManagement />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
