import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import SimpleInterest from './components/SimpleInterest';
//import Calculator from './components/Calculator';
//import Add from './components/Add';
//import Hello from './components/Hello';
//import Sudhanshu from'./components/Sudhanshu';
//import VsjItem from './components/VsjItem';
//import Add from './components/Add';
//import Subtract from './components/Subtract';
//import VsjCounter from './components/VsjCounter';
//import MyComponent from './components/MyComponent';
//import DropDown from './components/DropDown';
//import Addition from './components/Addition';
//import VsjHihello from './components/VsjHihello';
//import RadioButton from './components/RadioButton';
//import Checkbox from './components/Checkbox';
//import VsjA from './components/VsjA';
import VsjText from './components/VsjText';
function App(props) {
  const [mydata, setMyData] = useState(0);
  const [mytext, setMyText] = useState(0);
  const SaveData = (n1) => {    //SaveData me n1 ki value call kr rahe h

    console.log("App");

    setMyData(n1);
    console.log(mydata);

  };
  const SaveText = (n2) => {

    console.log("App");

    setMyText(n2);
    console.log(mytext);

  };
  return (
    <div className="App">
      <h2>From Component A {mydata}</h2>
      <h2>From Component B {mytext}</h2>
      <VsjText onSaveData={SaveData} onSaveText={SaveText} />  //SaveData m VSjA se value input ho rahi h //

    </div>
  );

}
export default App;
