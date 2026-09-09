import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./layouts/AppLayout";
import Santri from "./pages/Santri";
import SantriLayout from "./layouts/SantriLayout";
import SantriNilai from "./pages/Santri/SantriNilai";
import SantriAbsensi from "./pages/Santri/SantriAbsensi";
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
        element: <SantriLayout />,
        children: [
          {
            index: true,
            element: <Santri />,
          },
          {
            path: "nilai",
            element: <SantriNilai />,
          },
          {
            path: "absensi",
            element: <SantriAbsensi />,
          },
        ],
      },
    ],
  },
]);
export default router;
