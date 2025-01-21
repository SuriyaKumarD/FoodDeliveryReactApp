import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import Profile from "./Profile";
import { Component } from "react";

const About2 = () => {
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

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About US:</h1>
        <h2>lorem25</h2>
        <Outlet />
        <ProfileClassComponent />
        {/* <Profile name={"Suriya.D"} /> */}
      </div>
    );
  }
}

export default About;
