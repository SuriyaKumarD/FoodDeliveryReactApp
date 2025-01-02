import sonucompanylogo from "../../assets/sonucompanylogo.jpg";

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

export default Header;
