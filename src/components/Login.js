import { useContext, useState } from "react";
import UserContext from "../Utilis/UserContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { user, setCurrentUser } = useContext(UserContext);
  const [adminName, setadminName] = useState({
    name: user.name,
    email: user.email,
  });

  return (
    <div className="justify-center rounded-2xl items-center m-12 ml-auto mr-auto bg-cyan-800  w-[400px] h-[400px] drop-shadow-2xl shadow-2xl">
      <h1 className="font-bold m-10 p-5 justify-center items-center underline text-center text-amber-100">
        Welcome To Admin Login
      </h1>
      <div className="block bg-amber-100 justify-center items-center h-[200px] drop-shadow-2xl shadow-2xl">
        <div className="justify-center items-center p-3 m-10 mb-5">
          <label>Name : </label>
          <input
            className="border-1 rounded-s-sm p-1 mt-[10px] mb-1 justify-center items-center font-medium"
            value={adminName.name}
            name="Name"
            onChange={(event) => {
              setadminName({ name: event.target.value });
            }}
          ></input>
        </div>
        <div className="justify-center items-center p-3 m-10 mt-0">
          <label>Email : </label>
          <input
            className="border-1 rounded-s-sm p-1  justify-center items-center font-medium"
            value={adminName.email}
            onChange={(e) => {
              setadminName({ ...adminName, email: e.target.value });
            }}
          ></input>
        </div>
        <Link
          className="w-30 h-10 bg-amber-50 p-1.5 font-bold justify-center text-center items-center border-1 ml-[150px] mr-[150px] drop-shadow-2xl shadow-2xl"
          to="/"
          onClick={(e) => {
            setCurrentUser({ name: adminName.name, email: adminName.email });
          }}
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default Login;
