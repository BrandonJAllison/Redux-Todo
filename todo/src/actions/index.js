//actions

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO"

export const addTodo = todoItem => {
  console.log(todoItem);
  return {
    type: ADD_TODO,
    payload: todoItem
  };
};



export const toggleToDo = id => {
    console.log(id);
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const deleteToDo = () => {
    return {
      type: DELETE_TODO,
     
    };
  };


