import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/products/Products";
import Basket from "../components/bascet/Basket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
]);
