import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import PillSplitter from "../pages/Pill/PillSpitter";
import FunLayout from "../Layout/FunLayout";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/fun",
      element: <FunLayout></FunLayout>,
    },
  ]);