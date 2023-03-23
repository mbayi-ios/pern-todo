import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:9000/todos")
            const jsonData = await response.json() 
            //console.log(jsonData)
            setTodos(jsonData)

        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() =>{
        getTodos();
    }, []);

    //console.log(todos)

    return (
        <Fragment>
            <table class="table mt-5">
    <thead>
      <tr>
        <th>description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      

      {todos.map(todo => (
         <tr>
            <td>{todo.description}</td>
            <td>Edit</td>
            <td>Delete</td>
         </tr>
      ))}
     
    </tbody>
  </table>
        </Fragment>
    ) 
}

export default ListTodos;