import React from "react";
import ReactDOM from "react-dom/client";
import Banner from "./src/components/Banner/Banner";
import Header from "./src/components/Header/Header";
import Restaurant from "./src/components/Restaurant/Restaurant";

const App = () => {
  return (
    <>
      
      <Header />
      <Banner />
      <Restaurant />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
