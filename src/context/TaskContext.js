import React, {createContext, useState} from 'react'
import {posts} from '../utils/Dbtasks'
export const TaskContext = createContext()



export const TaskContextProvider = ({children}) => {
    const initialState = posts

    const [task, setTask] = useState(initialState)

    const taskValue = { task, setTask}
    return (
        <TaskContext.Provider value={taskValue}>
            {children}
        </TaskContext.Provider>
    )
}
