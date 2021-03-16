import Button from 'react-bootstrap/Button'
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'


export const TaskView = ({tas}) => {
    let editRoutes= `/edit/${tas.id}`
    console.log(editRoutes)
    return (
        <div>         
            <ListGroup>
                <ListGroup.Item>{tas.content}
                <strong>{tas.id}</strong>

                <Link to = {editRoutes}>
                <Button variant="success" >Edit</Button>
                </Link>
                <Button variant="danger">Delete</Button>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}


