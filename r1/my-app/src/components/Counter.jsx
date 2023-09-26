import React from "react"

class Counter extends React.Component{

    componentDidMount(){
        console.log("Component did mount runs")
      }

    componentDidUpdate(prevProps,prevState){

        if(prevProps.number!=this.props.number){
            console.log("Component did update runs")
        }
    }

    componentWillUnmount(){
        console.log("Component unmounted")
    }

    render(){
        return <h1>{this.props.number}</h1>
    }
}

export default Counter