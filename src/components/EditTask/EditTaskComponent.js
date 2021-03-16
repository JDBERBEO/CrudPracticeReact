import React, { useContext, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import {TaskContext} from '../../context/TaskContext'



export const EditTaskComponent = () => {
    
    let { id } = useParams()
  

    const {task, setTask } = useContext(TaskContext) 

    // let initialState = task.filter(tas => {  
        //         if (tas.id === id){
        //               console.log(task) //aquí está el
        //          //    console.log(tas.id)
        //          //    setUpdateTask(tas.content) 
                    
        //         }})
//     const [updateTask, setUpdateTask] = useState('initialState')

// //     const hho = task.filter(tas => {  
// //         if (tas.id === id){
// //               console.log(task) //aquí está el
// //          //    console.log(tas.id)
// //          //    setUpdateTask(tas.content) 
            
// //         }})

//    useEffect(() => {
       
      
//    }, [hho])
        
    // console.log(updateTask)

    //1 recibimos los tasks
    //2 sacar el content de la task con id
    //3 ese debe ser el initial state
    //4 el nuevo state será la tarea modificada 
    //5 
   
    return (
        <div>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Edita la tarea:</Form.Label>
            <Form.Control type="text" placeholder="Enter task"/>
        </Form.Group>
        
        <Button variant="primary" type="submit" >
            Guardar
        </Button>
        
        <Button variant="danger" type="submit" href="http://localhost:3000/">
            Cancelar
        </Button>
        
        </Form> 
        </div>
    )
}
