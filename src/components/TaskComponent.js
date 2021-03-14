import React, {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import { TaskView } from '../components/TaskView'
import { Button } from 'react-bootstrap'


export const TaskComponent = () => {

    const {task, setTask } = useContext(TaskContext)

    return (
        <div>
            <Button variant="primary" size="lg" block href='http://localhost:3000/add'>Create task</Button>
            {task.map((tas) => (
                <TaskView 
                key={tas.id}
                tas= {tas}/>  
            ))}
        </div>
    )
}
