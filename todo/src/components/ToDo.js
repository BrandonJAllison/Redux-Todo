import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleToDo, deleteToDo } from "../actions/index";

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

  deleteToDo = id => {
    this.props.deleteToDo(id);
  };

  
  

  render() {
    return (
      <div>
          <div className="TodoList">
          {this.props.todoList.map(item => (
            <div className="todo-item">
              <h4
                className={`${item.completed ? "item-completed" : null}`}
                key={item.id}
                onClick={() => this.toggleToDo(item.id)}
              >
                {item.todoItem}
              </h4>
              <h4 onClick={() => this.deleteToDo(item.id)}>x</h4>
            </div>
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
  { addTodo, toggleToDo, deleteToDo }
)(ToDoApp);