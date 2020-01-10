import React, { Component } from 'react';

import "./Todo.css"

class Todo extends Component {

    render() {
        return (
            <div className="todo">
                <p id="taskText">{this.props.task}</p>
                <span id="taskControl">
                    <button className="editBtn">Edit</button>
                    <button className="delBtn">Delete</button>
                </span>

            </div>
        );
    }
}

export default Todo;