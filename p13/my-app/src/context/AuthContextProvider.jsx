import React, { useState } from 'react'

export const AuthContext=React.createContext()

const AuthContextProvider = ({children}) => {

    const [state,setState]=useState({
        isAuth:false,
        token:null
    })

    const loginUser=(token)=>{

        setState({
            ...state,
            isAuth:true,
            token
        })
    }


    const logoutUser=()=>{
        setState({
            ...state,
            isAuth:false,
            token:null
        })
    }
    
  return (
    <AuthContextProvider value={{authState:state,loginUser,logoutUser}} >
       {children}
    </AuthContextProvider>
  )
}

export default AuthContextProvider