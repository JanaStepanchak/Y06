import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const toggleTodo = id => {
return({
  type: 'TOGGLE_TODO',
  id
})}
  

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    // case VisibilityFilters.REMOVE:
    //   return  todos.filter(id => !id )
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => {
  return({
  todos: getVisibleTodos(state.todos , state.visibilityFilter)
})}

const mapDispatchToProps = dispatch =>  {
  return ({
  toggleTodo: id => dispatch(toggleTodo(id))
})}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)