import React from "react";
import Overview from "./components/Overview";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [], counter: 0 }
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.input = React.createRef()
  }

  /*
  addTask = () => {
    console.log('addTask')
    let newTask = document.querySelector('input').value
    let newKey = newTask.slice(0,3) + Math.floor(Math.random() * 100000 + 0).toString()
    let newList = [...this.state.tasks, {name: newTask, key: newKey, count: this.state.counter, editing: false}]
    this.setState({
      tasks: newList,
      counter: this.state.counter + 1
    })
    console.log(this.state)
  }
  */

  addTask(name) {
    const key = name.slice(0,3) + Math.floor(Math.random() * 1000000 + 0).toString()
    this.setState({
      tasks: [...this.state.tasks, {name: name, key: key, count: this.state.counter, editing: false}],
      counter: this.state.counter + 1
    }, console.log('added task', this.state.tasks))
  }

  removeTask(key) {
    let arr = this.state.tasks
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === key) {
        arr.splice(i,1)
      }
    }
    this.setState({ tasks: arr }, console.log('removed task',this.state.tasks))
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" ref={this.input}></input>
          <button type="button" onClick={() => this.addTask(this.input.current.value)}>add task</button>
        </div>
        <Overview tasks={this.state.tasks} remove={this.removeTask} />
      </div>
    )
  }
}