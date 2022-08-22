import React from 'react'

export default function TodosList({todos, setTodos, setEditTodo}) {
  //delete
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  //complete
  const handleComplete = (id) => {
    setTodos(todos.map((item) => {
        if(item.id === id){
            return {
                ...item,
                completed : !item.completed
            }
        }
        return item;
    }))
  }

  //edit
  const handleEdit = (id) => {
    let findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  return (
    <div>
        {todos.map((todo) => (
            <li className='list-item' key={todo.id}>
                <input type="text" value={todo.title} className="list" onChange={(e) => e.preventDefault() }  />
                <div>
                    {
                        todo.completed === true ? (
                            <button className="button-complete task-button green" onClick={() => handleComplete(todo.id)}>
                                <i className='fa fa-check-circle'></i>
                            </button>   
                        )
                        : (
                            <button className="button-complete task-button" onClick={() => handleComplete(todo.id)}>
                                <i className='fa fa-check-circle'></i>
                            </button>  
                        )
                    }
                    <button className='button-edit task-button' onClick={() => handleEdit(todo.id)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={() => handleDelete(todo.id)}>
                        <i className='fa fa-trash'></i>
                    </button>    
                </div>
            </li>
        ))}
    </div>
  )
}
