import React from "react"

class Result extends React.Component{
    render(){
        return (
            <p>Out of {this.props.numFlips} flips, there have been {this.props.heads} heads and {this.props.tails} tails</p>
        )
    }
}

export default Result