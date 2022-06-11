import React from "react"

export default class Overview extends React.Component {    
    render() {
        const list = this.props.tasks.map(task => <li key={task.key}>{task.name}</li>)
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}