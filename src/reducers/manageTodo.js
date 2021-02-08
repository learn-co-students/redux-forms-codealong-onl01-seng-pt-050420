export default function manageTodo(state = {
  todos: [
    { todo: 'buy groceries' },
    { todo: 'watch netflix' },
  ]
}, action) {

  switch (action.type) {

    case "ADD_TODO":  
      console.log({todos: [...state.todos, action.payload]})
      return {todos: [...state.todos, action.payload]}

    default:
      return state; 
  }  
}
