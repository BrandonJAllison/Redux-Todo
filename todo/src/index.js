import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; 
import { Provider } from "react-redux"; 

import reducer from "./reducers";

import "./index.css";
import ToDo from './components/ToDo'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 


ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  document.getElementById("root")
);