import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleToDo, deleteToDo } from "../actions/index";

import './ToDoStyle.css'

const listDiv = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px',
  justifyContent: 'center'

}

const input = {
  display: 'flex',
  alignItems: 'center',
  
  justifyContent: 'center'

}


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
      <div >
         <form style={input}>
          <input
            
            name="newTodo"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add something ToDo....."
          />
          <button onClick={this.addToDo}>Add Todo</button>
          </form>

          <div>
          {this.props.todoList.map(item => (
            <div style={listDiv}>
              <h4
                className={`${item.completed ? "item-completed" : null}`}
                key={item.id}
                onClick={() => this.toggleToDo(item.id)}
              >
                {item.todoItem}
              </h4>
               <i onClick={() => this.deleteToDo(item.id)} class="far fa-trash-alt"></i>
            </div>
          ))}
        </div>
         
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