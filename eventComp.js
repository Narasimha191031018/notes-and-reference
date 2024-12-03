import React,{Component} from "react";
class eventComp extends Component{

    greeting=()=>{
        window.alert("hello everyone");
    };

    welcome=(...std)=>{
        window.alert(`welcome you ${std}`);
    };

    render(){
        return (
            <div>
                <h1>This is event component</h1>
                <button type="button" onClick={()=>this.greeting}>call greeting</button>
                <button type="button" onClick={()=>this.welcome("tarun","vinay")}>call welcome</button>
                <h2 onMouseOver={()=>this.welcome("Madhav","ragul","rupesh")}>Welcome</h2>
            </div>
        );
    };
};

export default eventComp;