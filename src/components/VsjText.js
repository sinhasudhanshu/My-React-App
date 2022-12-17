import React,{useState} from 'react';
const VsjText=(props)=>
{

    const[n1,setN1]=useState(0);
    const[n2,setN2]=useState(0);

    const n1ChangeHandler=(event)=>
    {

        setN1(Number(event.target.value));
        props.onSaveData(event.target.value);

    }
    const n2ChangeHandler=(event)=>
    {

        setN2(event.target.value);
        props.onSaveText(event.target.value);

    }
    return<div>

        <h2>Inside Component A {n1}</h2>
        <h2>Inside Component B {n2}</h2>
        Number<input type="number" onChange={n1ChangeHandler}/>
        Name<input type="text" onChange={n2ChangeHandler}/>
       

    </div>
}
export default VsjText;
