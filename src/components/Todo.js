import React from 'react'
import PropTypes from 'prop-types'  

const Todo = ({ onChange, onClick, completed, text }) => (

  <div  style={{
    display: 'flex',
    width: '60%',    
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#f3f3f3',   
    }}>
  <div    
    style={{
      color:  completed ? '#008080' : '#000',
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input type="checkbox" onChange={onChange}></input>
    {text}</div>    

    <button
       onClick={onClick}
       style={{ color: '#ff00ff' }}>
      delete
      </button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo