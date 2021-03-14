import React from 'react'
import { CreateTaskComponent } from '../components/CreateTask/CreateTaskComponent'

export const Addpage = ({history}) => {
    return (
        <div>
            <CreateTaskComponent history={history}/>
        </div>
    )
}
