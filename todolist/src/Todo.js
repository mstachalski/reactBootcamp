import React, { Component } from 'react';

import ToDoForm from './TodoForm'
import "./Todo.css"
import TodoForm from './TodoForm';

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inEdit : false,
            finished: false
        }

        this.todoRef = React.createRef()

        this.startEdit = this.startEdit.bind(this)
        this.finishEdit = this.finishEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    startEdit(){
        this.setState({inEdit: true})
    }

    finishEdit(task){
        this.props.edit({text: task, id: this.props.id})        
        this.setState({inEdit:false})
    }

    handleDelete(){
        const todoDiv = this.todoRef.current
        todoDiv.classList.toggle("finished")
        setTimeout(()=>this.props.delete(this.props.id), 500)
    }

    toggleCompletion(){
        this.setState( prev => ({finished: !prev.finished}))
    }

    render() {
        return (
            !this.state.inEdit ? 
            <div className="todo" ref={this.todoRef}>
                <p id="taskText" onClick={this.toggleCompletion} style={{textDecoration: this.state.finished ? "line-through" : ""}}>{this.props.task}</p>
                <span id="taskControl">
                    <button className="editBtn" onClick={this.startEdit}>Edit</button>
                    <button className="delBtn" onClick={this.handleDelete}>Delete</button>
                </span>
            </div> :

            <div className="todo">
                <TodoForm formAction={this.finishEdit} actionText={"Submit"} formHeading={"Edit Todo"} initialValue={this.props.task} id={this.props.id}/>
            </div>
        );
    }
}

export default Todo;