import React, { Component } from 'react';
import uuid from "uuid"
import store from "store2"

import Todo from "./Todo"
import TodoForm from "./TodoForm"

import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: store.get("tasks") || []
        }

        this.addTask = this.addTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    addTask(newTaskText){
        const newTask = {text: newTaskText, id: uuid()}
        this.setState(prev => ({
            tasks: [...prev.tasks, newTask]
        }))

        if(store.has("tasks")) {
            store.add("tasks", newTask)
        } else {
            store.set("tasks", [newTask])
        }
    }


    //editedTask: Object {text, id}
    editTask(editedTask){
        const taskIndex = this.state.tasks.findIndex(task => task.id === editedTask.id)
        this.setState(prev => ({
            tasks : [...prev.tasks.slice(0, taskIndex), editedTask, ...prev.tasks.slice(taskIndex+1,)]
        }), ()=> store.set("tasks", this.state.tasks))
    }

    deleteTask(taskId) {
        const taskIndex = this.state.tasks.findIndex(task => task.id === taskId)
        this.setState(prev => ({
            tasks : [...prev.tasks.slice(0, taskIndex), ...prev.tasks.slice(taskIndex+1,)]
        }),() => store.set("tasks", this.state.tasks))
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
                    return <Todo task={item.text} key={item.id} id={item.id} edit={this.editTask} delete={this.deleteTask} />
                })}
                <TodoForm formAction={this.addTask} actionText={"Add"} formHeading={"New ToDo"} initialValue={""}/>
            </div>

        );
    }
}

export default TodoList;