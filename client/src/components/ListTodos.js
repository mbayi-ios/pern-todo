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

    //delete todo
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:9000/todos/${id}`, {
                method: "DELETE"
            });
             //console.log(deleteTodo)
             setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <table className="table mt-5">
    <thead>
      <tr>
        <th>description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      

      {todos.map(todo => (
         <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td>Edit</td>
            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
         </tr>
      ))}
     
    </tbody>
  </table>
        </Fragment>
    ) 
}

export default ListTodos;