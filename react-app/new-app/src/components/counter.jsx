import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd, handleReduce } from '../redux/action'

const Counter = () => {
    const count=useSelector((store)=>store.reducer.count)
    const dispatch=useDispatch()

    const addHandler=()=>{
        dispatch(handleAdd(1))
    }

    const redHandler=()=>{
        dispatch(handleReduce(1))
    }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={addHandler}>inc</button>
        <button onClick={redHandler}>dec</button>
    </div>
  )
}

export default Counter