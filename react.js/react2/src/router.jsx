import { createBrowserRouter } from "react-router";
import Home from "./Home";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
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
  }
]);
