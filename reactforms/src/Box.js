import React, { Component } from 'react';

class Box extends Component {
    render() { 
        const style = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.color,
            marginBottom: 8
        }

        console.log(this.props.width)
        return (
            <div style={style}></div>
        );
    }
}
 
export default Box;