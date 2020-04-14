import React, { useState, useReducer } from 'react';
import initialState from './reducers/reducer';
import reducer from "./reducers/reducer";
import Todo from "./Todo"

export default function TodoList (props) {

   


    return (
        <div>
           {props.todos.map(task => {
               return <Todo task = {task} dispatch = {props.dispatch} />
           })}
        </div>
    )
}
