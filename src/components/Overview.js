import React from "react"

export default class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.items = this.props.tasks.map(task => <li key={task.key}>{task.name}</li>)
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.items}
                </ul>
            </div>
        )
    }
}