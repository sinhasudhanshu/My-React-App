import React, { useState } from 'react';


const ObjectSimpleInterest=()=>{

    const[sumData, setSum] = useState({

        p:1,
        t:2,
        r:3
    });

    const sumN1=(event)=>
    {
        setSum({
            ...sumData,
            p:Number( event.target.value),
        });
        console.log("Object Changed");
        
    };
    const sumN2=(event)=>
    {
        setSum({
            ...sumData,
            t:Number( event.target.value),
        });
        console.log("Object Changed");
        
    };
    const sumN3=(event)=>
    {
        setSum({
            ...sumData,
            r:Number( event.target.value),
        });
        console.log("Object Changed");
        
    };
    return<form>
        <label>N1</label>
        <input type="text" onChange={sumN1}/>
        <label>N2</label>
        <input type="text" onChange={sumN2}/>
        <label>N2</label>
        <input type="text" onChange={sumN3}/>
        <br></br>
       <h2> SimpleInterest{(sumData.p * sumData.t * sumData.r)/100}</h2> 

    </form>

}
export default ObjectSimpleInterest;    
