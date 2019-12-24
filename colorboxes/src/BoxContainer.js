import React from "react"
import uuid from "uuid"
import ColoredBox from "./ColoredBox"


import "./BoxContainer.css"

class BoxContainer extends React.Component {
    static defaultProps = {
        colors: ["#47a209", "#6845cf", "#79921e", "#21a4b4", "#5ada4d", "#3e629e", "#8a97e2", "#fdceac", "#0778b5", "#d25033", "#f72485", "#61500c","#db0747", "#F47C7C", "#A1DE93"],
        numBoxes: 18
    }

    constructor(props) {
        super(props)

        this.state = {
            boxColors: Array.from({length: this.props.numBoxes}, () => this.createNewBoxColor())
        }

        //Method binding
        this.changeBoxColor = this.createNewBoxColor.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    createNewBoxColor(currentColor) {
        let newColor;
        //Assure that the new color is not the same as the old one
        do {
            newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
        } while (newColor === currentColor)
        return newColor
    }

    changeColor(target) {
        this.setState(s => {
            const boxColors = s.boxColors.map((color, index) => {
                if (index === target) {
                    return this.createNewBoxColor(color)
                } else {
                    return color
                }
            })

            return {
                boxColors
            }
        })
    }

    render() {
        console.log(this.props.children)
        return (
            <div className="boxContainer">
                {this.state.boxColors.map((boxColor, index) => {
                    return (<ColoredBox key={uuid()} color={boxColor} changeBoxColor={this.changeColor} id={index} />)
                })}
            </div>
        )
    }
}

export default BoxContainer