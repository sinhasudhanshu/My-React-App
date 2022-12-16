import React, { useState } from 'react';
const DropDown = () => {
    const [option, setOption] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    return <p>
        <select  onChange={event => setOption(event.target.value)}>
        <option value="0">...</option>
            <option value="1">Add</option>
            <option value="2">Sub</option>
        </select>
        <h2>{option}</h2>
        <h2>Adding Numbers</h2>
        <h2>Total = {sum}</h2>
        <button onClick={()=> { 
            if (option==1)
            setSum(Number(num1) + Number(num2));
            if(option==2)
            setSum(Number(num1) - Number(num2));
            }}>
            +
        </button>
       
        <input type="Number" onChange={event => setNum1(event.target.value)} />
        <input type="Number" onChange={event => setNum2(event.target.value)} />

    </p>

}
export default DropDown;
 