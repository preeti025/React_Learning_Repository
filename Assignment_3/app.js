import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Assets/logo.png";
import userImg from "./Assets/user.png";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo image" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="search"></input>
      </div>  
      <div className="user-icon">
        <img src={userImg} alt="user-image" />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
