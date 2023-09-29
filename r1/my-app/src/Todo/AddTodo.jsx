import React, { useState } from 'react'

const AddTodo = () => {
    const [text,setText]=useState("")
    const [todos,setTodos]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 5
   

    const handleclick=()=>{
      setTodos([...todos,text])
    }

    const handleDelete=(i)=>{
     
        let filtered=todos.filter((ele,index)=>{
            return index!==i
        })

        setTodos(filtered)
    }

    const indexOfLastTodo = currentPage * todosPerPage;
    console.log(indexOfLastTodo,currentPage,todosPerPage)
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  console.log(indexOfFirstTodo);
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  console.log(currentTodos);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
        <div>
        <input type='text' placeholder='title' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleclick}>Add Todo</button>
        </div>
        <div>
            {currentTodos.map((el,i)=>(
                <div key={i+1}>
                <h3>{el}</h3>
                <button onClick={()=>handleDelete(i)}>delete</button>
                </div>
            ))}
        </div>

        <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastTodo >= todos.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default AddTodo