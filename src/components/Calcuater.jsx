import { useState } from "react"


 export default function Cal(){


const [number1,setNumber1]=useState(0)
const [number2,setNumber2]=useState(0)
const [result,setResult]=useState(0)
function add(){
    const num1=parseInt(number1)
    const num2=parseInt(number2)
    setResult(num1+num2)
}

    return(
        <>
        <input type="text" placeholder="enter number1" value={number1} onChange={(e)=>setNumber1(e.target.value)}></input>
        <br></br>
        <input type="text" placeholder="enter number2" value={number2} onChange={(e)=>setNumber2(e.target.value)}></input>
        <button onClick={add}>add number</button>
        <p>results:{result}</p>
        </>
    )
}