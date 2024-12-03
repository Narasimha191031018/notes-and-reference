import React,{Component} from "react";
class ClassComp extends Component{
    render(){
        return (
            <div>
                <h2>This is class component</h2>
                <p>This is paragraph</p>
                <p>My name is <strong>{this.props.fname}</strong> I am <strong>{this.props.Post}</strong></p>
            </div>
        );
    };
};

export default ClassComp;