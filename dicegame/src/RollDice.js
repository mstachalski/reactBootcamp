import React from "react"
import Die from "./Die"
import "./RollDice.css"

class RollDice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first: "one",
            second: "one",
            animation: false
        }
        this.rollDice = this.rollDice.bind(this);
    }

    static defaultProps = {
        numbers: ["one", "two", "three", "four", "five", "six"]
    }

    rollDice() {
        const firstDie = Math.floor(Math.random() * 5) + 1
        const secondDie = Math.floor(Math.random() * 5) + 1

        this.setState({
            first: this.props.numbers[firstDie],
            second: this.props.numbers[secondDie]
        })

        this.animateDice()

    }

    animateDice(){
        this.setState({
            animation: true
        })    

        setTimeout(() => {
            this.setState({animation: false})
        }, 1000)
    }

    render() {
        return (
            <>
                <div className="dice">
                    <Die number={this.state.first} animation={this.state.animation}/>
                    <Die number={this.state.second} animation={this.state.animation}/>
                </div>
                <button onClick={this.rollDice} disabled={this.state.animation}>{this.state.animation? "Please Wait" : "Roll Dice!"}</button>
            </>
        )
    }
}

export default RollDice