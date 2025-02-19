import sonucompanylogo from "../../assets/sonucompanylogo.jpg";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../Utilis/useIsOnline";
import UserContext from "../Utilis/UserContext";
const Header = () => {
  console.log("Header Render");
  let btnName = "Login";
  const [reactLoginBtn, setReactLoginBtn] = useState("Login");
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("UseEffect is Called!!!");
  }, []);

  const isOnline = useIsOnline();
  return (
    <div className="header flex justify-between bg-fuchsia-100 shadow-amber-100 drop-shadow-xl shadow-2xl">
      <div className="logodiv">
        <img
          className="logo w-20"
          alt="sonucompanylogo"
          src={sonucompanylogo}
        ></img>
      </div>
      <div className="navitems p-0.5 m-1">
        <ul className="flex ">
          <li className="m-1 px-1 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="m-1 px-1 hover:font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="m-1 px-1 hover:font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-1 px-1 hover:font-bold">
            <Link>Cart</Link>
          </li>
          <li className="m-1 px-1 hover:font-bold">
            <Link to="/instamart">Instamart</Link>
          </li>
          <div>
            <span className="p-1 m-2 text-blue-950 font-bold ">
              Hi {user.name}✌️
            </span>
            <span className="block font-bold  text-blue-950 ">
              {user.email}
            </span>
          </div>

          <button
            className="loginbtn m-1 px-1"
            onClick={() => {
              reactLoginBtn == "Login"
                ? setReactLoginBtn("Logout")
                : setReactLoginBtn("Login");
              reactLoginBtn == "Login";
            }}
          >
            {reactLoginBtn}
          </button>
          <h1 className="m-1 px-1">{isOnline ? "✅" : "🥱"}</h1>
          <Link to="/login">👽</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
