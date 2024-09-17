import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodosForm } from "./NewTodosForm"
import { TodoList } from "./TodoList"
export default function App(){
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("ITEM")
    if(savedTodos == null) return []
    return JSON.parse(savedTodos)
    
  })

  useEffect(()=>{
    localStorage.setItem("ITEM" , JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(currentTodos => {
      return [...currentTodos, 
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
   
  
  return <>
  <NewTodosForm onSubmit={addTodo} />
    <h1 className="header">ToDo list</h1>
   <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </> 
}