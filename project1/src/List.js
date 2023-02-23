import React,{useState} from 'react'

function List() {
    var names=["ravi","raju","ramu", "ramana","karim"];
    const [details,setDetails]=useState(names)
  return (
    <div>
            <h1>Student Names</h1>
            {details.map((e)=>(
            <div>{e}</div>)
            )}
    </div>
  )
}

export default List;