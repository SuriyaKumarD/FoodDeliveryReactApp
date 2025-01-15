import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About US:</h1>
      <h2>lorem25</h2>
      <Outlet />
      <ProfileClassComponent />
      {/* <Profile name={"Suriya.D"} /> */}
    </div>
  );
};
export default About;
