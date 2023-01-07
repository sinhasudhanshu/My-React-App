import { useState } from "react"

const Abc = () =>{
    const[num1,setNum1]= useState(0);
    const[num2,setNum2]= useState(0);
    const[sum,setSum] = useState(0);
    return<p>
        <h2>Total = {sum}</h2>
        <button onClick={()=> setSum(Number(num1)+ Number(num2))}>
            +
        </button>
        <button onClick= {()=> setSum(Number(num1)- Number(num2))}>
            -
        </button>
        <br></br>
        <input type="Number" onChange={event =>setNum1(event.target.value)}/>
        <input type="Number" onChange={event => setNum2(event.target.value)}/>
    </p>
}
export default Abc;