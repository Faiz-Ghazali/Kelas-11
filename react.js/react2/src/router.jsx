import { createBrowserRouter } from "react-router";
import Home from "./ReactRouter/Home";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
import NotFound from "./ReactRouter/NotFound";
import Profile from "./ReactRouter/Profile";
import ProfileDetail from "./ReactRouter/ProfileDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/:id",
    element: <ProfileDetail />,
  }
]);
