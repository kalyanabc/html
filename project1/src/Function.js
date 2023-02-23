import React,{useState} from "react";
function Function(){
    const [name, setName]=useState("ravi");
    const changeHandler = () =>{
        setName('raju');
    }
    return(
        <div>
            <h1>This is Stateless Componet</h1>
            <h1>
                {name}
            </h1>
            <button onClick={changeHandler}>click here</button>
        </div>
    )
}
export default Function;

