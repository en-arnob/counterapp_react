import React, { Component } from "react";

export default class Counter extends Component {

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-dark btn-sm">
          Increment
        </button>
        {this.getDecreaseBtn()}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderList()} */}
      </div>
    );
  }

  //   renderList() {
  //     if (this.state.listItems.length === 0)
  //       return <p className="text-danger">No elements in list</p>;
  //     return (
  //       <ul>
  //         {this.state.listItems.map((item, index) => (
  //           <li key={index}>{`${index + 1}. ${item}`}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? "Zero" : this.props.counter.count;
  }
  getBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    return (badgeClass += this.props.counter.count === 0 ? "warning" : "primary");
  }
  getDecreaseBtn() {
    if (this.props.counter.count !== 0) {
      return (
        <button
          onClick={()=> this.props.onDecrement())}
          className="btn btn-success m-2 btn-sm"
        >
          Decrease
        </button>
      );
    }
  }
  
}
