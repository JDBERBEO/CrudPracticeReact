import React from 'react'
import { Form, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'


export const CreateTaskView = ({handleOnChange, handleOnClick}) => {
    return (
        <div>
           <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Crea la tarea:</Form.Label>
            <Form.Control type="text" placeholder="Enter task"  onChange={handleOnChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleOnClick}>
            Crear
        </Button>
        {/* <Link to='/movies' className='nav nav-link'>Cancel</Link> */}
        </Form> 
        </div>
    )
}
