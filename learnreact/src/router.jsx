import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./layouts/AppLayout";
import Santri from "./pages/Santri";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/santri",
        element: <Santri />,
      },
    ],
  },
]);
export default router;
