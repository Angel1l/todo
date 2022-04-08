import React, {useState} from "react";
import PropTypes from 'prop-types';
import { clear } from "@testing-library/user-event/dist/clear";

function useInputValue(defaultValue = '') {
    const [value, setValuse] = useState(defaultValue)


    return {
        bind: {
            value,
            onChange: event => setValuse(event.target.value) 
        },
          clear: () => setValuse(''),
          value: () => value
    }   
}


function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
            
        }
    }
    return(
        <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo