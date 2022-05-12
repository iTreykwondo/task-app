import React from "react";
import "../App.css";

export function Overview(props) {
  function deleteTask(name) {
    props.deleteTask(name);
  }

  return (
    <div className="tasks">
      <ul>
        {props.task.map((item, index) => {
          return (
            <li key={index}>
              {index}. {item}
              <button
                className="delete"
                onClick={() => {
                  deleteTask(item);
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

export default Overview;
