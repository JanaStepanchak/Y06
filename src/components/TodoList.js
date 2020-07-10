import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos , toggleTodo, removeTodo }) => {
  return(
  <ul>
    {todos.map(todo => (
      <Todo 
       key={todo.id} 
       {...todo} 
       onChange={() => {
         console.log ('toggleTodo', todo.id);
       return (toggleTodo(todo.id))}}
       onClick={() =>{
        console.log ('removeTodo', todo.id);
        return (removeTodo(todo.id))}}
        />
    ))}
  </ul>
)}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}

export default TodoList