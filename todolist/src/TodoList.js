import React, { Component } from 'react';
import uuid from "uuid"

import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }

        this.addTask = this.addTask.bind(this)
    }

    addTask(newTask){
        this.setState(prev => ({
            tasks: [...prev.tasks, newTask]
        }))
    }

    render() {
        return (
            <div className="TodoList">
                <h1 id="heading">
                    Todo List!
                </h1>
                <p id="subTitle">A Simple React Todo List App.</p>
                <hr />
                {this.state.tasks.map(item => {
                    const id = uuid()
                    return <Todo task={item} key={id} id={id} />
                })}
                <NewTodoForm addTask={this.addTask}/>
            </div>

        );
    }
}

export default TodoList;