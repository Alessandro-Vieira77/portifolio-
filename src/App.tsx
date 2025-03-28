import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { TechStack } from "./pages/TechStack/TechStack";
import { Projects } from "./pages/Projects/Projects";
import { Contacts } from "./pages/Contacts/Contacts";
import { Layout } from "./pages/components/layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/techstack",
        element: <TechStack />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export { router };
