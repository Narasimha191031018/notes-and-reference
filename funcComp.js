let FuncComp =(props)=>{
    return (
        <div>
            
            <p>My firstname is <strong>{props.fname}</strong>, My lastname is <strong>{props.lname}</strong>, My salary is <strong>{props.salary}</strong>
            ,My gender is <strong>{props.gender}</strong>,My address is <strong>{props.address}.</strong></p>
                   
        </div>
    );
};
export default FuncComp;