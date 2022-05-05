import { Component } from "react";
import "./App.css";
import Overview from "./components/Overview";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: [],
      input: "",
    };

    this.addTask = this.addTask.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ input: e.target.value });
  }

  addTask(e) {
    const { task, input } = this.state;
    e.preventDefault();
    task.push(input);
    console.log(task);
    this.setState({ input: "" });
    document.querySelector("#task").value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input
            onChange={this.onChange}
            type="text"
            name="task"
            id="task"
            placeholder="Enter a task"
            required
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview task={this.state.task} />
      </div>
    );
  }
}

export default App;
