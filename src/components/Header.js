import sonucompanylogo from "../../assets/sonucompanylogo.jpg";
import { useState } from "react";
const Header = () => {
  console.log("Header Render");
  let btnName = "Login";
  const [reactLoginBtn, setReactLoginBtn] = useState("Login");

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
          <button
            className="loginbtn"
            onClick={() => {
              reactLoginBtn == "Login"
                ? setReactLoginBtn("Logout")
                : setReactLoginBtn("Login");
            }}
          >
            {reactLoginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
