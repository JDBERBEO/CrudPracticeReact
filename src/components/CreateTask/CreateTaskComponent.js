import React, {useState, useEffect, useContext} from 'react'
import { Button, Form } from 'react-bootstrap'
import {TaskContext} from '../../context/TaskContext'

export const CreateTaskComponent = () => {

    const {task, setTask} = useContext(TaskContext)
    
    
    const [local, setLocal] = useState('')
    
    const handleOnChange = (e) => {
        const { value } = e.target
        setLocal( { id: task.length + 1, content: value })
        console.log(local)
        }
        
       
    const handleOnClick = (event) => {
            event.preventDefault()
            task.push()
            console.log('esto es local', local)
            setTask([...task, local])
            setLocal('')
        }
        
        console.log('tasks', task)
     

      

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
        </Form>
            
        </div>
    )
}
