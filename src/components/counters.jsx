import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props; //Destructuring Arguments
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            /* 
            value={counter.value}
            id={counter.id}
            */
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
