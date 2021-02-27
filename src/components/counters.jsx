import React, { Component } from "react";
import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.css";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <div>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
