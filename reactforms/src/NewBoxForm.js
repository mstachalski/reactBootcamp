import React, { Component } from 'react';
import "./NewBoxForm.css"

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: "",
            height: "",
            color: ""
         }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        const value = e.target.value

        this.setState(prev => (
            {...prev, [name] : value}
        ))
    }

    handleClick(e){
        e.preventDefault();
        const {width, height, color} = this.state
        this.props.create(parseInt(width),  parseInt(height), color[0] === "#" ? color : "#" + color)

        this.setState({
            width: "",
            height: "",
            color: ""
        })
    }

    render() { 
        return (
            <form onSubmit={this.handleClick}>
                <input type="text" name="width" placeholder="box width" onChange={this.handleChange} value={this.state.width} required/>
                <input type="text" name="height" placeholder="box height" onChange={this.handleChange} value={this.state.height} required/>
                <input type="text" name="color" placeholder="color hexcode" onChange={this.handleChange} value={this.state.color} required/>
                <button type="submit">Create Box</button>
            </form>
          );
    }
}
 
export default NewBoxForm;