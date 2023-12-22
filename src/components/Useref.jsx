import { useRef } from "react"
import { useState } from "react"



   export default function Userfrom(){
const [name,setName]=useState("")
const inputRef=useRef(null);
const[result,setResult]=useState("")
   const handle=(e)=>{
    e.preventDefault()
    //console.log(inputRef.current.value)
   setResult(inputRef.current.value)
   }
   function focus(){
inputRef.current.focus()
   }

   console.log("componenet is rendered , the value of name:" )
return(


    <>
    

    <form onClick={handle}>

<input type="name" name="name" placeholder="enter name here"  ref={inputRef}/>
<br></br>
<button>save</button>
<p1>results:{result}</p1>
    </form>
    <button onClick={focus}>focus here</button>
    </>
)


}







// import { useRef } from "react"
// import { useState } from "react"



//    export default function Userfrom(){
// const [name,setName]=useState("")
// const inputRef=useRef(1)
// console.log(inputRef)
//    const handle=(e)=>{
//     e.preventDefault()
//     console.log(name)
   
//    }

//    console.log("componenet is rendered , the value of name:" )
// return(


//     <>
    

//     <form onClick={handle}>

// <input type="text" placeholder="enter name here" value={name} onChange={(e)=>setName(e.target.value)}/>
// <br></br>
// <button>save</button>
//     </form>
//     </>
// )


// }