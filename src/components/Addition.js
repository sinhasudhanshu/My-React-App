 import React,{useState} from 'react';
 const Addition=()=>
{                                      
const[num1,setNum1]=useState(0);
const[num2,setNum2]=useState(0);
const[sum,setSum] =useState(0);

return <p>
<h2>Adding Numbers</h2>
<h2>Sum = {sum}</h2>
        <button onClick={ () => setSum(Number(num1) + Number(num2))}>
            +
        </button>
        <button onClick={ () => setSum(Number(num1) - Number(num2))}>
            -
        </button>
    <input type="Number" onChange={ event => setNum1(event.target.value)}/>
    <input type="Number" onChange={ event => setNum2(event.target.value)}/>
    
    

</p>

}
export default Addition;
