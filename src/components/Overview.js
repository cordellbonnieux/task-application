import React from "react"

export default class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tasks: props.tasks }
    }

    render() {
        return (
            <div>
                <ul>

                </ul>
            </div>
        )
    }
}