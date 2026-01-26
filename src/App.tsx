import { createBrowserRouter } from "react-router";
import Projects from "./pages/projects";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> 
  },
  {
    path: "/projects",
    element: <Projects/>
  }
]);

export { router };