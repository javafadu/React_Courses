import { Component } from "react";


export default class ClassTypeTest extends Component {
    
    constructor(props) { // getting props into the system
        
        super(props); // firstly send the props super class constructor

        // use this 
        this.state = {
            hours: 10,
            minutes:20,
            seconds:45
        }


    }
    
    
    render () {
        return (
            <div>
                <h1>{this.props.message}</h1>

               <h2>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h2> 
               <button onClick={()=>this.setState({hours:13})}>Set Hour</button>
               <button onClick={()=>this.setState({minutes:38})}>Set Minute</button>

            </div>
        )
    }
}
