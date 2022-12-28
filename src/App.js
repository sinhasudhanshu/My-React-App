import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import UpdateBank from './components/UpdateBank';
//import ArrayUpdate from './components/ArrayUpdate';
//import UpdateArray from './components/UpdateArrayTrain';

function App(props) {
 return(
     <center>
  <h2>MultipleObject</h2>
  <div>
        <UpdateBank/>
           </div>
       
  
  </center>
 );
}
export default App;
