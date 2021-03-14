import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'

import {TaskContext} from '../../context/TaskContext'
import { CreateTaskView } from './CreateTaskView'

 

export const CreateTaskComponent = ({ history }) => {
    
 
    const {task, setTask} = useContext(TaskContext)
    
    
    const [local, setLocal] = useState('')
    
    const handleOnChange = (e) => {
        const { value } = e.target
        setLocal( { id: task.length + 1, content: value })
        console.log(local)
        }
        
       
    const handleOnClick = (event) => {
            event.preventDefault()
            task.push(local)
            console.log('esto es local', local)
            setTask([...task])
            localStorage.setItem('tasks', task.length !== 0 ? JSON.stringify(task) : [])
            setLocal('')
            history.push('/')
        }
        
        console.log('tasks', task)

    return (
        <div>
            <CreateTaskView 
            handleOnChange={handleOnChange}
            handleOnClick={handleOnClick} 
            value={task}/>
        </div>
    )
}
