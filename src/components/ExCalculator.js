import React,{useState} from 'react';
const ExCalculator=(props)=>
{

    const[n1,setN1]=useState(0);
    const[n2,setN2]=useState(0);

    const n1ChangeHandler=(event)=>
    {

        setN1(event.target.value);
        props.onSaveData(event.target.value);

    }
    const n2ChangeHandler=(event)=>
    {

        setN2(Number(event.target.value));
        props.onSaveText(event.target.value);

    }
    return<div>

        <h2>Inside Component A {n1}</h2>
        <h2>Inside Component B {n2}</h2>
        
        Name<input type="text" onChange={n1ChangeHandler}/>
        Price<input type="number" onChange={n2ChangeHandler}/>
       

    </div>
}
export default ExCalculator;
