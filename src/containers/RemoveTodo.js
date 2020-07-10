import React from 'react'
import { connect } from 'react-redux'

const RemoveTodo = ({ dispatch }) => {

 const removeTodo = id => ({
  type: 'REMOVE',
  id
})

  return (
      <div>
        <button onClick={e => {
          e.preventDefault()
          // dispatch(deleteTodo())

          console.log(dispatch(removeTodo()));
        }}>delete</button>
      </div>
  )
}

export default connect()(RemoveTodo)