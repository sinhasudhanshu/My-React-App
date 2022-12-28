import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import ArrayUpdate from './components/ArrayUpdate';
//import UpdateArray from './components/UpdateArrayTrain';

function App(props) {
 return(
     <center>
  <h2>MultipleObject</h2>
  <div>
        <ArrayUpdate/>
           </div>
       
  
  </center>
 );
}
export default App;
