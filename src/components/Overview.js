import React from "react"

export default class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = { banned: [], tasks: this.props.tasks }
    }

    delete = (key) => {
        this.setState({
            banned: [...this.state.banned, key]
        })
    }

    edit = (key) => {
        for (let i = 0; i < this.state.tasks.length; i++) {
            if (this.state.tasks[i].key === key) {
                let arr = this.state.tasks
                arr[i].editing = true
                this.setState({
                    tasks: arr
                })
            }
        }
    }

    save = (key) => {

    }

    render() {
        const list = this.state.tasks.map(task => {

            const name = task.editing ? 
                <input type="text" id={task.key}></input> : 
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