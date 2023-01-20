import logo from './logo.svg';
import './App.css';
// import PopoverBasic from './components/PopoverBasic';
// import StackBasic from './components/StackBasic';
// import StackDivider from './components/StackDivider';
// import StandardImageList from './components/StandarImageList';
// import WovenImageList from './components/WovenImageList';
// import PopperBasic from './components/PopperBasic';
// import PopperPositioned from './components/PopperPositioned';
import TransitionSimpleCollapse from './components/TransitionSimpleCollapse';
import TransitionGroupExample from './components/TransitionGroupExample';

function App() {
    return (<div>


        <center>

          <TransitionSimpleCollapse/>
          <br></br>
          <TransitionGroupExample/>
          
        </center>

    </div>
    );
}
export default App;
