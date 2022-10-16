import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // name: "Gourav"
      count: 0
    };
    console.log("constructor");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // ye componentDidUpdate wala run nhi karega kyuki ise run karane ke liye hame state ya props me update krna hi pdta hai otherwise ye run hi nhi hota
    // yha ye prevState.count old wale count ko bhi sath me lega and the
    console.log("componentDidUpdate", prevState.count, this.state.count);
    if (prevState.count === this.state.count) {
      alert("count already Equal");
    }
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h4> hello {this.state.count}</h4>
        {/* <h4> hello {this.state.name}</h4> */}
        {/* <h5>compount-Did-Update-LifeCycleMethod </h5> */}
        {/* ye button ko click krte hi componentDidUpdate call hoga kyuki hamne yha state ko update kiya hai  or componentDidUpdate ki yhi condition hoti hai */}
        {/* <button onClick={() => this.setState({ name: "mittal" })}>
          update
        </button> */}

        <button onClick={() => this.setState({ count: 1 })}>update</button>
      </div>
    );
  }
}
