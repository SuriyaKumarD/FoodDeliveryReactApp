import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect is called!!!");
  });
  console.log("rendered!!!");
  return (
    <div>
      <h1>Profile FunctionAl Component!!</h1>
      <h1>Name:{props.name} </h1>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          setCount(1);
        }}
      ></button>
    </div>
  );
};

export default Profile;
