import React, { useState } from 'react';
import './MapUse.css';
const MapUse = () => {
    const number = [{id:1,name:"A",pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/330px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg"},{id:2,name:"B",pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/330px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg"}]
    const listItem = number.map((number) =>
   
    <li>{number.id},{number.name}
    <img src={number.pic}/>
    </li>
   
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
                                                                                                           