import { SHOW_ALL , SET_VISIBILITY_FILTER , REMOVE} from '../constants'

const VisibilityFilters = {
  SHOW_ALL: SHOW_ALL
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
   console.log("visibilityFilter", action);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action
    case REMOVE:   
       return state.filter(todo => todo.id !== action.payload)   
    default:
      return state
  }
}

export default visibilityFilter