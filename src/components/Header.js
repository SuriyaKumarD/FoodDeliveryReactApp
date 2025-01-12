import sonucompanylogo from "../../assets/sonucompanylogo.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  console.log("Header Render");
  let btnName = "Login";
  const [reactLoginBtn, setReactLoginBtn] = useState("Login");

  useEffect(() => {
    console.log("UseEffect is Called!!!");
  }, []);

  return (
    <div className="header">
      <div className="logodiv">
        <img className="logo" alt="sonucompanylogo" src={sonucompanylogo}></img>
      </div>
      <div className="navitems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
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
