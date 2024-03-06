import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RootLayout from "./components/Layouts/RootLayout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import Contact from "./components/Pages/Contact";
import Pages from "./components/Pages/Pages";
import Product from "./components/Pages/Product";
import Shop from "./components/Pages/Shop";
import Search from "./components/Pages/Search";

import ProductImg from "./images/product-img.png";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "./store/product-context";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faFontAwesome);

const products = [
  {
    title:
      "Luxury Solar System Spiral Raindrop Chandelier For Foyer and Entryway",
    description:
      "Luxury Solar System Spiral Raindrop Chandelier For Foyer and Entryway",
    img: ProductImg,
    price: "55,000",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    id: "root",
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:item",
        element: <Product />,
      },
      {
        path: "/pages/:page",
        element: <Pages />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/search/:product",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  const { changeProductData } = useContext(ProductContext);

  changeProductData(products);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
