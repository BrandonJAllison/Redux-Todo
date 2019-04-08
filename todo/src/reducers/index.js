    
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";


const initialState = {
  title: "Todo List",
  todoItems: [],
  completed: false,
  id: ''
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
  
        case TOGGLE_TODO:
          return {
            ...state,
            todoItems: state.todoItems.map(item =>
              item.id === action.payload
                ? { ...item, completed: !item.completed }
                : item
            )
          };

          case DELETE_TODO:
          
         

      default:
        return state;
    }
  }
}

export default reducer;