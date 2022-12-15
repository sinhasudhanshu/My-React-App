import { useState } from "react"
const VsjHihello = (props) =>{

    const[count, setCount] = useState(0);
    const[num1, setAdd1] = useState(0);
    const[num2, setAdd2] = useState(0);
    return <p>
        <h2>Say = {count}</h2>
        <button onClick={ () => setCount("hi")}>
            press for hi
        </button>
        <button onClick={ () => setCount("hello")}>
            press for hello
        </button>
       
	</p>;
    
}
export default VsjHihello;