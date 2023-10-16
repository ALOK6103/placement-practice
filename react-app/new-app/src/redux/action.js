import * as types from "./actionTypes.js"

export const handleAdd=(payload)=>{

  return { 
    type:types.ADD,
    payload
   }
}

export const handleReduce=(payload)=>{
    return {
        type:types.REDUCE,
        payload
    }
}