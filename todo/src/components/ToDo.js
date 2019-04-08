import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";


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
    console.log(this.state.newTodo);
  };

  render() {
    return (
      <div>
        <div className="TodoList">
          {this.props.todoList.map(item => (
            <h3>{item.todoItem}</h3>
          ))}
        </div>
        <input
          name="newTodo"
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add something ToDo....."
        />
        <button onClick={this.addToDo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoItems
});

export default connect(
  mapStateToProps,
  { addTodo }
)(ToDoApp);