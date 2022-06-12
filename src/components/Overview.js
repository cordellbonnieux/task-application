import React from "react"

export default class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = { banned: [], tasks: this.props.tasks }
        /*
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
        */
    }

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

    render() {
        const items = this.props.tasks // displays when props, though only editable when state?
        const list = items.map(task => {
            const name = task.editing ? 
                <input type="text" id={task.key}></input> : // here is the input
                <span>{task.name + '  (' + task.count + ')'}</span>

            const edit = task.editing ? 
                <button type="text" onClick={() => this.save(task.key)}>save</button> : 
                <button type="button" onClick={() => this.edit(task.key)}>edit</button>

            if (!this.state.banned.includes(task.key)) {
                return <li key={task.key}>
                    {name}
                    {edit}
                    <button type="button" onClick={() => this.delete(task.key)}>delete</button>
                </li>
            } else {
                return null
            }
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