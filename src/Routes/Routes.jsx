import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import PillSplitter from "../pages/fun-projects/Pill/PillSpitter";
import FunLayout from "../Layout/FunLayout";
import MultipleWindowDraggingComponent from "../pages/fun-projects/window/Window"


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/fun",
      element: <FunLayout></FunLayout>,
    }
   
  ]);