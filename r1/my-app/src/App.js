import logo from './logo.svg';
import './App.css';
import React from "react"
import Counter from './components/Counter';

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
  </>
  }
}
export default App;
