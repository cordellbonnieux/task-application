import React from "react"

export default class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tasks: this.props.tasks }
        this.remove = this.props.remove
    }

    /*
    delete = (key) => {
        this.setState({
            banned: [...this.state.banned, key]
        })
    }

    edit = (key) => {
        let arr = this.state.tasks
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].key === key) {
                arr[i].editing = true
                this.setState({
                    tasks: arr
                })
            }
        }
    }

    // passing name as param does not work
    save = (key) => {
        let name = null   //this needs to be input.value
        let arr = this.state.tasks
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].key === key) {
                arr[i].name = name
                arr[i].editing = false 
                this.setState({
                    tasks: arr
                })
            }
        }
    }
    */

    render() {
         // displays when props, though only editable when state?
        const list = this.state.tasks.map(task => {
            const n = task.editing ? 
                <input type="text" id={task.key}></input> : // here is the input
                <span>{task.name + '  (' + task.count + ')'}</span>

            const e = task.editing ? 
                <button type="text" onClick={() => this.save(task.key)}>save</button> : 
                <button type="button" onClick={() => this.edit(task.key)}>edit</button>


            return <li key={task.key}>
                {n}
                {e}
                <button type="button" onClick={() => this.remove(task.key)}>delete</button>
            </li>
        })
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}