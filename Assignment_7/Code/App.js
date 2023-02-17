import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Banner from "./src/components/Banner/Banner";
import Header from "./src/components/Header/Header";
import Restaurant from "./src/components/Restaurant/Restaurant";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import PageNotFound from "./src/pages/PageNotFound/PageNotFound";
import About from "./src/pages/About/About  ";
import Contact from "./src/pages/Contact/Contact";
import RestaurantMenu from "./src/pages/RestaurantMenu/RestaurantMenu";
import Footer from "./src/components/Footer/Footer";
import Login from "./src/pages/Login/Login";

const App = () => {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );  
};

const appRouter = createBrowserRouter([
   
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <><Banner /><Restaurant /></>
      },{
        path: 'login',
        element: <Login />
      },
           
      {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/restaurant/:resId',
      element: <RestaurantMenu />
    },
  ],
  
},
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
