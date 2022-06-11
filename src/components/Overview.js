import React from "react"

export default class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = { banned: [] }
    }

    delete = (key) => {
        this.setState({
            banned: [...this.state.banned, key]
        })
    }

    render() {
        const list = this.props.tasks.map(task => {
            if (!this.state.banned.includes(task.key)) {
                return <li key={task.key}>
                    {task.name + '  (' + task.count + ')'}
                    <button type="button" onClick={() => this.delete(task.key)}>delete item</button>
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