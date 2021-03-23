import React, { Component } from "react";

export default class suji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  counterIncrease() {
    debugger;
    // this.state.counter = this.state.counter + 1;
    this.setState({ counter: this.state.counter + 1 });
  }
  counterDecrease() {
    this.setState({ counter: this.state.counter - 1 });
  }
//  counterMultiplication(){
//      this.setState({counter: this.state.counter*2});
//  }
  render() {
    debugger;
    return (
      <div>
        {this.state.counter}{" "}
        <button onClick={() => this.counterIncrease()}>Counter ++</button>
        <button onClick={() => this.counterDecrease()}>Counter--</button>
        {/* <button onClick={()=>this.counterMultiplication()}>Counter*</button> */}
      </div>
    );
  }
}
