import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import HelloEffects from './components/HelloEffects';
import WeatherApi from './components/WeatherApi';

//import WeatherApiCity from './components/WeatherApiCity';
//import Abc from './components/Abc';
//import HelloWorld from './components/HelloWorld';

//import UpdateBank from './components/UpdateBank';
//import ArrayBook from './components/ArrayBook'
//import ArrayUpdate from './components/ArrayUpdate';
//import UpdateArray from './components/UpdateArrayTrain';
//import ExpenseCalculatar from './components/ExpenseCalculatar';
//import HelloEffect from './components/HelloEffect';
//import EffectTest from './components/EffectTest';
// import HelloEffect from './components/HelloEffect';

function App(props) {
 return(
     <center>
      <HelloEffects/>
      
  <h2>API</h2>
  <div className="App">
 
        <WeatherApi/>
        
           </div>
       
  
  </center>
 );
}
export default App;
