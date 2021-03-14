
import React from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TaskComponent } from '../components/TaskComponent'

import { Addpage } from '../Pages/Addpage'

export const MainRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/add" component={Addpage}/>
                    {/* <Route path="/edit" component={}/> */}
                    <Route path="/" component={TaskComponent}/>
                </Switch>
            </Router>
        </div>
    )
}
