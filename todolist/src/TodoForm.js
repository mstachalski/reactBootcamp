import React, { Component } from 'react';

import "./TodoForm.css"

class TodoForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            task: this.props.initialValue
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this)
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.value

        this.setState({
            task: value
        })
    }

    handleTaskSubmit(e) {
        e.preventDefault()
        this.props.formAction(this.state.task)
        this.setState({ task: "" })
    }

    render() {
        return (

            <form onSubmit={this.handleTaskSubmit}>

                <label htmlFor="task">
                    {this.props.formHeading}
                </label>
                <div className="formContainer">
                    <input id="task" name="task" type="text" placeholder="New Task" value={this.state.task} onChange={this.handleInputChange} required/>
                    <button type="submit" id="addBtn">{this.props.actionText}</button>
                </div >
            </form>


        );
    }
}

export default TodoForm;