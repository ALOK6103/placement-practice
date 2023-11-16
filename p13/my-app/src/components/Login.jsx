import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {loginUser,authState}=useContext(AuthContext)


    const handleSubmit=(e)=>{
        e.preventDefault()

        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })

    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type='text'  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type='submit' />
        </form>
    </div>
  )
}

export default Login