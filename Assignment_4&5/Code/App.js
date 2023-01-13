import React from "react";
import ReactDOM from "react-dom/client";
import Banner from "./src/components/Banner/Banner";
import Header from "./src/components/Header/Header";
import Meals from "./src/components/Meals/Meals";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Meals />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
