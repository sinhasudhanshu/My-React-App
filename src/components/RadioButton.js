import React, { useState } from 'react';
const RadioButton = () => {
    const [radio, setRadio] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    return <p>

        <div onChange={event => setRadio(event.target.value)}>
        <input type="radio" value="1" name="option"/>Addition    
        <input type="radio" value="2" name="option"/>Subtract
        </div>

        <h2>{radio}</h2>
        <h2>Adding Numbers</h2>
        <h2>Total = {sum}</h2>
        <button onClick={()=> { 
            if (radio==1)
            setSum(Number(num1) + Number(num2));
            if(radio==2)
            setSum(Number(num1) - Number(num2));
            }}>
            +
        </button>
        <input type="Number" onChange={event => setNum1(event.target.value)} />
        <input type="Number" onChange={event => setNum2(event.target.value)} />

    </p>

}
export default RadioButton;
 