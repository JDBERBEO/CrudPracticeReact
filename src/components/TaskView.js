import Button from 'react-bootstrap/Button'
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


export const TaskView = ({tas}) => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>{tas.content}
                <Button variant="success">Edit</Button>
                <Button variant="danger">Delete</Button>
                </ListGroup.Item>
            </ListGroup>
            
        </div>
    )
}


