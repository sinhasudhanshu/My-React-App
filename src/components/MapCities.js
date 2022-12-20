import React, { useState } from 'react';
import './MapUse.css';
const MapCities = (props) => {
    const number = props.data;
    const listItem = number.map((cities) =>
   
    <li>{cities} {cities.length}</li>
   
    );
    return(
        <div  className="myMap">
            <h2>List of Number</h2>
            <ul>{listItem}</ul>
            <img  src="fifa.jpg"/>
            
        </div>
    )

};
export default MapCities;