import React from "react"
import "./ColoredBox.css"

class ColoredBox extends React.Component {

    render(){
        return(
            <div className="coloredBox" style={{backgroundColor: this.props.color}} onClick={() => {
                this.props.changeBoxColor(this.props.id)
            }}>
            </div> 
        )
    }
}

export default ColoredBox