import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export default function Form({input, setInput, todos, setTodos, editTodo, setEditTodo}) {
 const onInputChange = (e) => {
    setInput(e.target.value);
 }

 const updateTodo = (newTitle, id) => {
    setTodos(todos.map((item) => {
        if(item.id === id){
            return {
                ...item,
                title: newTitle, 
            }
        }
        return item;
    }));
    setEditTodo(null);
    setInput("");
 }

 useEffect(() => {
    if(editTodo){
        setInput(editTodo.title);
    }else{
        setInput("");
    }
 }, [editTodo, setInput])

 const onFormSubmit = (e) => {
    e.preventDefault();

    if(editTodo){
        //edit
        updateTodo(input, editTodo.id);
        console.log("edit")
    }else{
        //add
        setTodos([...todos, {
            id: uuidv4(),
            title: input,
            completed: false
        }])
        setInput("");
        console.log("add");
    }
 }

 console.log(todos, "todos")
 console.log(editTodo, "editTodos");

 return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter a Todo..." className='task-input' value={input} onChange={onInputChange}/>
        <button className='button-add' type='submit'>
            {editTodo ? "Edit" : "Add"}
        </button>
    </form>
  )
}
