import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 99 },
      { id: 4, value: 3 },
    ],
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <button
          onClick={this.handleReset}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(item => (
          <Counter key={item.id} onDelete={this.handleDelete} counter={item} />
        ))}
      </div>
    );
  }
}
