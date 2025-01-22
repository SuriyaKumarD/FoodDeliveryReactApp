import sonucompanylogo from "../../assets/sonucompanylogo.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../Utilis/useIsOnline";
const Header = () => {
  console.log("Header Render");
  let btnName = "Login";
  const [reactLoginBtn, setReactLoginBtn] = useState("Login");

  useEffect(() => {
    console.log("UseEffect is Called!!!");
  }, []);

  const isOnline = useIsOnline();
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
          <li>
            <Link to="/instamart">Instamart</Link>
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
          <h1>{isOnline ? "✅" : "🥱"}</h1>
        </ul>
      </div>
    </div>
  );
};

export default Header;
