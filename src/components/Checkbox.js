import React, { useState } from 'react';
const Checkbox = () => {
    const [checkbox, setCheckbox] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    return <p>

        <div onChange={event => setCheckbox(event.target.value)}>
        <input type="checkbox" value="1" name="option"/>Addition    
        </div>

        <h2>{checkbox}</h2>
        <h2>Adding Numbers</h2>
        <h2>Total = {sum}</h2>
        <button onClick={()=> { 
            if (checkbox==1)
            setSum(Number(num1) + Number(num2));
            if(checkbox==2)
            setSum(Number(num1) - Number(num2));
            }}>
            +
        </button>
        <input type="Number" onChange={event => setNum1(event.target.value)} />
        <input type="Number" onChange={event => setNum2(event.target.value)} />

    </p>

}
export default Checkbox;
 