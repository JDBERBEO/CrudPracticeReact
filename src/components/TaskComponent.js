import React, {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import { TaskView } from '../components/TaskView'


export const TaskComponent = () => {

    const {task, setTask } = useContext(TaskContext)

    return (
        <div>
            {task.map((tas) => (
                <TaskView 
                key={tas.id}
                tas= {tas}/>
               
            ))}
        
        </div>
    )
}
