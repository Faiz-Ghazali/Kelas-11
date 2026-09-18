import { createBrowserRouter } from "react-router";
import Home from "./pages/Admin/Home";
import About from "./pages/Admin/About";
// import AppLayout from "./layouts/AppLayout";
import Santri from "./pages/Admin/Santri";
import SantriLayout from "./layouts/SantriLayout";
import SantriNilai from "./pages/Admin/Santri/SantriNilai";
import SantriAbsensi from "./pages/Admin/Santri/SantriAbsensi";
import SantriList from "./pages/Admin/Santri/SantriList";
import SantriDetail from "./pages/Admin/Santri/SantriDetail";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "santri",
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
            path: "list",
            children: [
              {
                index: true,
                element: <SantriList />,
              },
              {
                path: ":santri_id",
                element: <SantriDetail />,
              },
            ],
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
