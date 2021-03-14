import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const CreateTaskView = ({handleOnChange, handleOnClick, value}) => {
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
        
        <Button variant="danger" type="submit" href="http://localhost:3000/">
            Cancelar
        </Button>
        
        </Form> 
        </div>
    )
}
