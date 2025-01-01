import React from "react";
import ReactDOM from "react-dom/client";
import sonucompanylogo from "./assets/sonucompanylogo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logodiv">
        <img className="logo" alt="sonucompanylogo" src={sonucompanylogo}></img>
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCards = () => {
  return (
    <div className="RestroCards">
      <div>
        <img
          className="foodLogo"
          src="https://dukaan.b-cdn.net/700x700/webp/media/277ccce6-baa0-42c7-858c-422bda91ca93.png"
          alt="foodimg"
        ></img>
      </div>
      <h3>Samskruthi Grand</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="restro-container">
        <RestroCards />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div id="appLayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
