import React, {useContext, useState} from 'react'
import {TaskContext} from '../context/TaskContext'
import { TaskView } from '../components/TaskView'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const TaskComponent = () => {

    const {task, setTask } = useContext(TaskContext)


    return (
        <div>
            {/* localStorage.setItem('tasks', task.length !== 0 ? JSON.stringify(task) : [])  */}
            <Link to="/add">
            <Button variant="primary" size="lg" block>Create task</Button>
            </Link>
            {task.map((tas) => (
                <TaskView 
                key={tas.id}
                tas= {tas}/>  
            ))}
        </div>
    )
}
