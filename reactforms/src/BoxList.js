import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm'
import Box from "./Box"

class BoxList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boxes: []
        }

        this.createBox = this.createBox.bind(this)
    }

    createBox(width, height, color) {
        this.setState(prev => ({
            boxes: [...prev.boxes, { width, height, color }]
        }))
    }

    render() {
        return (
            <div>
                <NewBoxForm create={this.createBox} />
                {this.state.boxes.map(item => {
                    return <Box width={item.width} height={item.height} color={item.color} key={item.color} />
                })}
            </div>
        );
    }
}

export default BoxList;