import React, { useState } from 'react';

const MapUse = (props) => {
    const number = [1,2,3];
    const listItem = number.map((number) =>
    <li>{2*number}</li>
    );
    return(
        <div>
            <h2>List of Number</h2>
            <ul>{listItem}</ul>

        </div>
    )

};
export default MapUse;