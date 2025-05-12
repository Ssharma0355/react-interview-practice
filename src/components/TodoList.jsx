import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
    const addTodo=()=>{
        if(input.trim === "") return; //if the input is empty and also space is not allowed due to .trim()
    const item ={
        id: todoList.length+1 ,
        text: input,
        completion:false
    }//there are three things required for the todo list 
        setTodoList(prev => [...prev, item]); //adding up in setTodoList array with spread operator 
        setInput("") //and making this as empty after clicking on the add button 
    }
    const toggleCompleted=(id)=>{
        setTodoList(todoList.map(t=>{
            if(t.id===id){ //finding which id should be checked and unchecked 
                return{
                ...t, // among the list 
                    completion: !t.completion //it will toggle the checked and unchecked 
            }
            }
            else
            return t;
        }))
    }
    const deleteTodo=(id)=>{
        setTodoList(todoList.filter(t => (t.id !== id)))
    }

  return (
    <div className="todolist-main">
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo} type="button">Add</button>
      <div>
        <ul>
          {todoList.map((t) => (
            <li key={t.id}>
                  <input type="checkbox" name="" id="" checked={t.completion} onChange={() => toggleCompleted(t.id)} />
                  <span className={t.completion ? "lineThrough":""}>{t.text}</span>
              <button onClick={()=>deleteTodo(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
