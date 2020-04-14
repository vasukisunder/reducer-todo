import React from 'react';

export default function Todo (props) {

    return (
        <div>
            <h2 onClick = {() => props.dispatch({type: "toggle", payload: props.task })}>{props.task.item} </h2>
            <p>{props.task.completed ? "complete" : "incomplete" }</p>
        </div>
    )
   
}