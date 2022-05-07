import React, { Component } from "react";

export class Overview extends Component {
  deleteTask(name) {
    this.props.deleteTask(name);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.task.map((item, index) => {
            return (
              <li key={index}>
                {index}. {item}
                <button
                  onClick={() => {
                    this.deleteTask(item);
                  }}
                >
                  Delete Task
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
