import { useEffect } from "react";


const comp1=(Wrapped)=>{

    const wrap=(props)=>{

        // useEffect(() => {
        //     console.log(`Component "${Wrapped.name}" is rendered.`);
        // },[]);
      
        return <Wrapped {...props}  />
    }

    return wrap

}

const comp2=({name})=>{

    return <h1>Hello : {name}</h1>
}

const Finalcomp=comp1(comp2)

export default Finalcomp