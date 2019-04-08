import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; 
import { Provider } from "react-redux"; 

import reducer from "./reducers";

import "./index.css";
import ToDoApp from './components/ToDo'

const store = createStore(reducer); 


ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById("root")
);