// import { useContext } from "react";
// import { CounterContext } from "./counterProvider";

// const useCounter = () => {
//     const context = useContext(CounterContext);
//     if (!context) {
//       throw new Error('useCounter must be used within a CounterProvider');
//     }
//     return context;
//   };

// const ComponentA = () => {
//     const { counter, increment } = useCounter();
  
//     return (
//       <div>
//         <h2>Component A</h2>
//         <p>Counter: {counter}</p>
//         <button onClick={increment}>Increment</button>
//       </div>
//     );
// };

// export default ComponentA