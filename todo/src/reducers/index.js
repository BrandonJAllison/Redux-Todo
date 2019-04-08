    
import { ADD_TODO } from "../actions";


const initialState = {
  title: "Todo List",
  todoItems: [],
  completed: false,
};


function reducer(state = initialState, action) {
  console.log("Reducer", action);
  {
    switch (action.type) {
      case ADD_TODO:
        const newtodoItem = {
          todoItem: action.payload,
          id: Date.now(),
          completed: false
        };
        return {
          ...state,
          todoItems: [...state.todoItems, newtodoItem]
        };
      default:
        return state;
    }
  }
}

export default reducer;