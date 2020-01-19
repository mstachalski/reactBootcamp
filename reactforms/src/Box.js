import React, { Component } from 'react';

class Box extends Component {
    render() { 
        const style = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.color,
            marginBottom: 8
        }

        return (
            <div style={style}></div>
        );
    }
}
 
export default Box;