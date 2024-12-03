import React, { Component } from "react";

class MyStateComp extends Component{

constructor(){
    super();
    this.state={
        empName:"Narasimha",
        empsal:50000
    }
}
changeStateData=()=>{
    this.setState((prevState)=>({empName:"Narasimha",empsal:prevState.empsal+5000}));
}

    render(){
        return(
            <div>
                <h2>This is MyStateComp</h2>
                <p>Employee Name:<strong>{this.state.empName}</strong> and Employee salary:<strong>{this.state.empsal}</strong></p>

                <button type="button" onClick={()=>this.changeStateData()}>ChangeStateData</button>
            </div>
        )
    }
}

export default MyStateComp;