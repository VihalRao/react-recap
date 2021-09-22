import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: true, name: "Welcome", willMount: "", willUpdate: "" };
  }

  del = () => {
    this.setState({ x: false });
  };

  componentWillMount() {
    this.setState({ willMount: "Component Will MOUNT" });
    console.log("Component Will MOUNT");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "Welcome to React (componentDidMount)" });
    }, 5000);
    console.log("Component Did Mount");
  }

  componentWillUpdate() {
    console.log("Component Will Update");
  }

  componentDidUpdate(prevState) {
    if (prevState.name !== this.state.name) {
      document.getElementById("didUpdate").innerHTML = "Component did Update";
    }
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    let header;
    if (this.state.x) {
      header = <Child />;
    }
    return (
      <div>
        <center>
          {header}
          {this.state.willMount}

          <h3>{this.state.name}</h3>
          <p id="didUpdate"></p>
          <button type="button" onClick={this.del}>
            Delete Above element
          </button>
        </center>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("component willUnMount");
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

export default LifeCycle;
