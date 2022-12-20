import React, { useState } from 'react';
import './MapUse.css';
const MapUse = (props) => {
    const number = props.data;
    const listItem = number.map((number) =>
   
    <li>{2*number}</li>
   
    );
    return(
        <div  className="myMap">
            <h2>List of Number</h2>
            <ul>{listItem}</ul>
            <img  src="fifa.jpg"/>
            
        </div>
    )

};
export default MapUse;
                                                                                                           