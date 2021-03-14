import { Router } from 'react-router-dom'
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { TaskCompon } from '../components/TaskView'
import { Addpage } from '../Pages/Addpage'

export const MainRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/add" component={Addpage}/>
                    {/* <Route path="/edit" component={}/> */}
                    <Route path="/" component={Addpage}/>
                </Switch>
            </Router>
        </div>
    )
}
