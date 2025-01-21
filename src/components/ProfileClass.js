import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor is called!!");
  }
  componentDidMount() {
    console.log("API calls happens here in Class component!!!");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!!!");
  }
  render() {
    console.log("rendered component!!!");
    return (
      <div>
        <h1> Profile Class Component!!!</h1>
        <h2>Count:{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        ></button>
      </div>
    );
  }
}

export default Profile;
