import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Components/Error";
import Home from "../Pages/Home/Home";
import BuyerScreens from "../Pages/BuyerScreens/BuyerScreens";
import About from "../Pages/About/About";
import SearchResult from "../Pages/SearchResult/SearchResult";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buyerScreens",
        element: <BuyerScreens />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/searchResult",
        element: <SearchResult />,
      },
    ],
  },
]);

export default Router;
