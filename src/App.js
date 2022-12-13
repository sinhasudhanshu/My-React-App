import logo from './logo.svg';
import './App.css';
import SimpleInterest from './components/SimpleInterest';
//import Calculator from './components/Calculator';
// import Add from './components/Add';
//import Hello from './components/Hello';
//import Sudhanshu from'./components/Sudhanshu';
//import VsjItem from './components/VsjItem';
//import Add from './components/Add';
//import Subtract from './components/Subtract';
function App() {
  return (
    <center>                           
      <h1>Hello React</h1>
      <img src='logo192.png'/>
      
    <SimpleInterest p="10000" t="5" r="5"/>
    </center>
  );
}
export default App;
