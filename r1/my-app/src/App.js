import logo from './logo.svg';
import './App.css';
import React from "react"
// import Counter from './components/Counter';
import Counter from './components/Counterfn';
import Todo from './Todo/Todo';
import Timer from './timer/Timer';

class App extends React.Component{

  state={
    num:0
  }

  
  
  handleClick(){
    this.setState((state)=>({num:state.num+1}))
  }
render () {
  return <>
  <button onClick={this.handleClick.bind(this)}>Increase</button>
  <Counter number={this.state.num} />
  <Todo />
  <Timer />
  </>
  }
}
export default App;
