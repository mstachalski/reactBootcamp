import React from "react"

class AlphaButtons extends React.Component {

    render() {
        return (
            <button
                value={this.props.ltr}
                onClick={this.props.handleGuess}
                disabled={this.props.disabled}
            >
                {this.props.ltr}
            </button>
        )
    }
}

export default AlphaButtons