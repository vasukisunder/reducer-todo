import React, { useState, useReducer } from 'react';import './App.css';
import TodoList from "./TodoList";
import { initialState, reducer } from "./reducers/reducer";
import TodoForm from "./TodoForm";


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

 
  

  return (
    <div className = "App">
      <h1>Todo List</h1>
      <div >
        <TodoList todos = {state.todos} dispatch = {dispatch}/>
        <TodoForm dispatch = {dispatch} />
      </div>
  
      
    </div>
  );
}

export default App;
