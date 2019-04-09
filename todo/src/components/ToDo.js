import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleToDo, deleteToDo } from "../actions/index";

import './ToDoStyle.css'

const listDiv = {
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  justifyContent: 'center'

}

const mainDiv = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
  justifyContent: 'center'

}
const icon = {
  margin: '0 10px'
}

const input ={
  borderRadius: '15px',
  padding: '10px',
  marginRight: '10px',
  border: '.5px solid black',
  boxShadow: '0 0 5px #333'

}

const button ={
  padding: '5px',
  borderRadius: '10px',
  color: '#61DAFB',
  background: 'white',
  border: '1px solid #61DAFB ',
  boxShadow: '0 0 5px #333'

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
         <form style={mainDiv}>
          <input
            style={input}
            name="newTodo"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add something ToDo....."
          />
          <button style={button} onClick={this.addToDo}>Add Todo</button>
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
               <i style={icon} onClick={() => this.deleteToDo(item.id)} class="far fa-trash-alt"></i>
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