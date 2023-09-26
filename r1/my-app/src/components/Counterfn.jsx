import { useEffect } from "react";

function Counter ({number}){
  useEffect(()=>{
      console.log("component updated")

      return ()=>{
         console.log("unmounted");
      }
  },[number])

  return <h1>{number}</h1>
}

export default Counter