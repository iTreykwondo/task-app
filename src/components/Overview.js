import React, { Component } from "react";

export class Overview extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.task.map((item, index) => {
            return (
              <li key={index}>
                {index}. {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
