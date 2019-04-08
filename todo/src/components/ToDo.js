import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleToDo, deleteTodo } from "../actions/index";

import './ToDoStyle.css'

class ToDoApp extends Component {
  state = {
    newTodo: ""
  };

  handleChanges = event => {
    this.setState({ newTodo: event.target.value });
  };

  addToDo = event=> {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    })
    console.log(this.state.newTodo);
  };

  toggleToDo = id => {
    this.props.toggleToDo(id);
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  
  

  render() {
    return (
      <div>
         <div className="TodoList">
          {this.props.todoList.map(item => (
            <h1
              className={`${item.completed ? "item-completed" : null}`}
              key={item.id}
              onClick={() => this.toggleToDo(item.id)}
            >
              {item.todoItem}
            </h1>
          ))}
        </div>
        <form>
        <input
          name="newTodo"
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add something ToDo....."
        />
        <button onClick={this.addToDo}>Add Todo</button>
        
        </form>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoItems
});

export default connect(
  mapStateToProps,
  { addTodo, toggleToDo, deleteTodo }
)(ToDoApp);