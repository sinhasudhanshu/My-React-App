import React, { useState } from 'react';
import './MapUse.css';
const  ArrayTrain= () => {
    const number = [{trainno:1254,trainname:"shivganga",station:"Varanasi",Destination:"Delhi"},]
    const listItem = number.map((number) =>
   
    <li>{number.trainno},{number.trainname},{number.station},{number.Destination}
    </li>
   
    );
    return(
        <div  className="myMap">
            <h2>List of Train</h2>
            <ul>{listItem}</ul>
            <img  src="fifa.jpg"/>
        </div>
    )

};
export default ArrayTrain;