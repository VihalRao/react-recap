import React from "react";

import FunctionalComponent from "./FunctionalComponent";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      dob: "12 -feb-1999",
      email: "vihal.vemula@popcornapps.com",
      phnum: 9515595704,
      x: false,
      enteredValue: "",
    };
  }

  handleEvent = () => {
    this.setState({ name: "123", x: true });
  };

  forceUpdateState = () => {
    this.forceUpdate();
  };

  changeEvent = (e) => {
    this.setState({ enteredValue: e.target.value });
  };

  render() {
    console.log("Component is re-rendered");
    return (
      <div>
        <center>
          <h2>Hello {this.state.name}</h2>
          <h3>Welcome To React</h3>
          <button onClick={this.handleEvent}>click To join</button>
        </center>

        {this.state.x && (
          <FunctionalComponent
            name={this.state.name}
            email={this.state.email}
            phnum={this.state.phnum}
          />
        )}

        <div>
          <center>
            <br />
            <button onClick={this.forceUpdateState}>ForceUpdate</button>
          </center>
        </div>

        <div>
          Enter The Input:
          <input type="text" onChange={this.changeEvent}></input>
          <h2>enteredValue:{this.state.enteredValue}</h2>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
