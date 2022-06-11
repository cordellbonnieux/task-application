import React from "react";
import Overview from "./components/Overview";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [] }
  }

  addTask = () => {
    let newTask = document.querySelector('input').value
    let newKey = newTask.slice(0,3) + Math.floor(Math.random() * 1000 + 0).toString()
    let newList = [...this.state.tasks, {name: newTask, key: newKey}]
    this.setState({
      tasks: newList
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text"></input>
          <button type="button" onClick={this.addTask}>add task</button>
        </div>
        <Overview tasks={this.state.tasks} />
      </div>
    )
  }
}