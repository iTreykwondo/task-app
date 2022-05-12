import { useState } from "react";
import "./App.css";
import Overview from "./components/Overview";

export function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  function onChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function addTask(e) {
    e.preventDefault();
    task.push(input);
    console.log(task);
    setInput("");
    document.querySelector("#task").value = "";
  }

  function deleteTask(name) {
    setTask(task.filter((el) => el !== name));
  }

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input
          onChange={onChange}
          type="text"
          name="task"
          id="task"
          placeholder="Enter a task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <Overview task={task} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
