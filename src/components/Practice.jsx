import React, { useState } from 'react'
import "./TodoList.css"

function Practice() {
    const [input, setInput] = useState("");
   
    const [todoList,setTodoList] = useState([
       
    ])
    const addTodoList= (e)=>{

        if(input.trim === "") return;
        const value = 
            {
                id:todoList.length+1,
                text:input.trim(),
                completed:false
            }
        setTodoList(prev => [...prev, value]);
        setInput("");
    }
    const toggle=(id)=>{
        setTodoList(todoList.map(t=>{
            if(t.id===id){
                return{
                    ...t,
                    completed:!t.completed
                }
            }
            else 
            return t;
        }))
    }
    const deletetodo =(id)=>{
     setTodoList(todoList.filter(t=>(t.id !== id)))

    }

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addTodoList}>add</button>
      <ul>
        {
        todoList.map((t)=>

            <li key={t.id}>
                <input type="checkbox" name="" id="" chacked={t.completed} onChange={()=>toggle(t.id)} />
                <span className={t.completed ?"lineThrough": "" }>{t.text}</span>
                <button onClick={()=>deletetodo(t.id)}>Delete</button>
             </li>
        
        )
        }

      </ul>

      {/* <div>
              <input type="text" value={employee} onChange={(e)=>setEmployee(e.target.value)}/>
        <button>Add employee</button>

        <ul>
            {employeeList.map(t=>
                <li>
                    
                    {t.name}</li>
                )}

        </ul>
      </div> */}
    </div>
  )
}

export default Practice
