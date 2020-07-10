import { ADD_TODO , TOGGLE_TODO, REMOVE } from '../constants'

const todos = (state = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
        case REMOVE:   
          return state.filter(todo => todo.id !== action.payload)    
      default:
        return state
    }
  }
  export default todos