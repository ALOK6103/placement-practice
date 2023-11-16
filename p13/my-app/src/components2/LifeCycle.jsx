import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [count, setCount]=useState(0)



    useEffect(()=>{

        console.log('component mounted or updated')

        return ()=>{
            console.log('component unmounted')
        }
    },[count])

    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleClick}>increase</button>
    </div>
  )
}

export default LifeCycle