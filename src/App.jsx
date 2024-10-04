import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Products from "./pages/Products";
import User from "./pages/User";
import Overview from "./pages/Overview";
import Sales from "./pages/Sales";
import Error from "./pages/Error";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
