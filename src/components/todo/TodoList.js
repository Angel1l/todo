import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'


function TodoList(props) {
  return (
    <div>
       {props.todos.map((todo, index) => {
           return <TodoItem 
           todo={todo} 
           key={todo.id} 
           index ={index} 
           onChange={props.onToggle}
           />
       })}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList;