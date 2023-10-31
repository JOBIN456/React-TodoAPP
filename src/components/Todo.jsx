import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import "./css/todo.css"
import Todoitem from "./todoitem";
let count=0;
const Todo = () => {
    const[todos,settodos]=useState([]);
    const inputref=useRef(null);
    const add=()=>{
        settodos([...todos,{no:count++,text:inputref.current.value,display:""}]);
        inputref.current.value="";
        localStorage.setItem("todos_count",count)

    }

 useEffect(()=>{
  settodos(JSON.parse(localStorage.getItem("todos")));
  count=localStorage.getItem("todos_count");
 },[])   
useEffect(()=>{
    
    setTimeout(()=>{
      console.log(todos);
      localStorage.setItem("todos",JSON.stringify(todos));
    },100)
},[todos])
  return (
    <div className="todo">
        <div className="todo-header">To-Do-List</div>
      <div class="todo-add">
        <input ref={inputref} type="text" placeholder="Add Your Task" className="todo-input"></input>
        <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item,index)=>
        {
            return<Todoitem key={index} settodos={settodos} no={item.no} display={item.display} text={item.text}/>

        })}
      </div>
    </div>
  )
}

export default Todo
