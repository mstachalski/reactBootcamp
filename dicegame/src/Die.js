import React from "react"
import "./Die.css"

class Die extends React.Component {
    render() {

        return (
            <i className={`fas fa-dice-${this.props.number} ${this.props.animation ? "shaking" : null}`}></i>
        )
    }
}

export default Die