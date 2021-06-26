import React from "react";
import "./index.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleUp(e) {
    this.setState({ value: this.state.value + 1 });
  }
  handleDown(e) {
    this.setState({ value: this.state.value - 1 });
  }
  render() {
    return (
      <section>
        <p>{this.state.value}</p>
        <div>
          <button onClick={(e) => this.handleUp(e)}>+</button>
          <button onClick={(e) => this.handleDown(e)}>-</button>
        </div>
      </section>
    );
  }
}

export default Counter;
