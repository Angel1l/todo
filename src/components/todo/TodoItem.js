import React, { useContext } from 'react'
import PropTypes from 'prop-types' 
import Context from '../../context'


const styles = {
  li:{
  display: 'flex',
  justtifyContent: 'space-between',
  padding: '.5rem 1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '.5rem',
  alignItems: "center",
  },
  input:{
    marginRight: '.1rem'
  }
}

function TodoItem({ todo, index, onChange}) {
  const { removeTodo } = useContext(Context)
  const classes = []
  if (todo.completed) {
    classes.push('done')
  }

  return (
    <div style={styles.li}>
      <span className={classes.join(' ')}>

        <input 
        type="checkbox" 
        checked={todo.completed}
        style={styles.input} 
        onChange={() => onChange(todo.id)}  />

        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
    
    <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,   
  onChange: PropTypes.func.isRequired
}
export default TodoItem