import React, { Component } from "react";
class ConditionalRenComp extends Component{
    constructor(){
        super();
        this.state={
            isCond:true
        }
    }
    render(){
            if(!this.state.isCond){
                return<h2>Admin login successfully</h2>
            }
            else{
                return<h2>user login successfully</h2>
            }
        
    }
}

export default ConditionalRenComp;