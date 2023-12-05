import { createContext, useContext, useState } from "react";


const AuthContext=createContext()

export const AuthProvider=({children})=>{

    const [user,setUser]=useState(null)

    const login=(username)=>{

        setUser(username)
    }

    const logout=()=>{
        setUser(null)
    }

    const contextValue={
        user,
        login,
        logout
    }

    return <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
}


const useAuth=()=>{
    const context=useContext(AuthContext)

    if(!context){
        throw new Error("error comes")
    }

    return context
}


export const UserComponent=()=>{
    const {user,logout}=useAuth()

    return (
        <div>
          {
            user ? (

                <div>
                    <h1>user: {user}</h1>
                    <button onClick={logout}>Logout</button>
                </div>
            ):(

                <p>Login first</p>
            )
          }  
        </div>
    )
}

export const LoginComp=()=>{

    const {login}=useAuth()

    const handleClick=()=>{
        const username=prompt("Enter your name")

        if(username){
            login(username)
        }
    }

    return (
        <div>
            <button onClick={handleClick} >Login</button>
        </div>
    )
}