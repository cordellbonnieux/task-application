import React from "react";
import Overview from "./components/Overview";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: []}
  }

  addTask() {
    let newTask = document.querySelector('input').value
    this.setState(oldTasks => ({
      tasks: [...oldTasks, newTask]
    }))
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text"></input>
          <button onClick={this.addTask}>add task</button>
        </div>
        <Overview tasks={this.state.tasks} />
      </div>
    )
  }
}