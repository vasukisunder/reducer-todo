
 export const initialState = {
     todos: [
    {
        item: 'Learn about reducers', 
        completed: false,
        id: 3892987589
    }, 
    {
        item: 'Complete todo list assignment',
        completed: false,
        id: 3892987582
    },
]};

 export const reducer = (state, action) => {
     switch(action.type) {
         case 'add_task': 
         return {
             ...state, 
             todos: [
                 ...state.todos,
                 {
                     item: action.payload,
                     completed: false,
                     id: Date.now()
                 }
             ]
         };
         case 'toggle': 
             return {
                 ...state,
                 todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {...todo, completed: !todo.completed}
                    }
                    else {
                        return todo;
                    }
                 })
             };

         case 'clear': 
             return {
                 ...state, 
                 todos: state.todos.filter(todo => todo.completed!== true)
             };
     }
    
};

