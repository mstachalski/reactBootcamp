import React from "react"
import Result from "./Result"
import "./Coinflip.css"

const coinSides = ["heads", "tails"]

class Coinflip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentFace: "",
            numTails: 0,
            numHeads: 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        let side = Math.floor(Math.random() * coinSides.length);
        this.setState(s => {
            return side === 0 ? 
            { numHeads: s.numHeads + 1, currentFace: coinSides[side] } :
            { numTails: s.numTails + 1, currentFace: coinSides[side] }
        })
    }

    render() {
        let numFlips = this.state.numTails + this.state.numHeads;
        return (
            <>
                {
                    numFlips > 0 ? <img src={require(`./${this.state.currentFace}.png`)} /> : null
                }
                <button onClick={this.flipCoin}>Flip Coin</button>
                <Result numFlips={numFlips} heads={this.state.numHeads} tails={this.state.numTails} />
            </>
        )
    }
}

export default Coinflip