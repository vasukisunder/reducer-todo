import React, { useState } from 'react';

export default function TodoForm(props) {
    const [newTask, setNewTask] = useState('');

  const handleChanges = e => {
    setNewTask(e.target.value);
}

const createNewItem = e => {
    e.preventDefault();
    props.dispatch({type: 'add_task', payload: newTask});
    setNewTask("");
}

const clearCompleted = e => {
    e.preventDefault();
    props.dispatch({type: 'clear'});
}

return (
    <div>
        <form >
              <input 
                  type = 'text' 
                  name = 'newTask'
                  value = {newTask}
                  onChange = {handleChanges}
                  />
              <button onClick = {createNewItem}> Add Task</button>  
              <button onClick = {clearCompleted}>Clear Completed</button>    
                </form>
      </div>
)

}