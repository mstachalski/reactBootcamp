import React, { Component } from 'react';

import "./NewTodoForm.css"

class NewTodoForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            task: ""
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
        this.props.addTask(this.state.task)
        this.setState({ task: "" })
    }

    render() {
        return (

            <form onSubmit={this.handleTaskSubmit}>

                <label htmlFor="task">
                    New Todo
                </label>
                <div className="formContainer">
                    <input id="task" name="task" type="text" placeholder="New Task" value={this.state.task} onChange={this.handleInputChange} required/>
                    <button type="submit" id="addBtn">Add Todo</button>
                </div >
            </form>


        );
    }
}

export default NewTodoForm;