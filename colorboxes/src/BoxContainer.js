import React from "react"
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
            boxColors: []
        }
        this.changeBoxColor = this.createNewBoxColor.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    componentDidMount() {
        for (let i = 0; i < this.props.numBoxes; i++) {
            this.setState(s => {
                const newBoxColor = this.createNewBoxColor()
                return ({
                    boxColors: [...s.boxColors, newBoxColor]
                })
            })
        }
    }

    createNewBoxColor() {
        return this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
    }

    changeColor(target) {
        this.setState(s => {
            const boxColors = s.boxColors.map((item, index) => {
                if (index === target) {
                    return this.createNewBoxColor()
                } else {
                    return item
                }
            })

            return {
                boxColors
            }
        })
    }

    render() {
        const boxArr = [];
        console.log(this.state.boxColors)
        return (
            <div className="boxContainer">
                {this.state.boxColors.map((boxColor, index) => {
                    return (<ColoredBox key={index} color={boxColor} changeBoxColor={this.changeColor} id={index} />)
                })}
            </div>
        )
    }
}

export default BoxContainer