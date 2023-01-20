import logo from './logo.svg';
import './App.css';
// import PopoverBasic from './components/PopoverBasic';
// import StackBasic from './components/StackBasic';
// import StackDivider from './components/StackDivider';
// import StandardImageList from './components/StandarImageList';
// import WovenImageList from './components/WovenImageList';
import PopperBasic from './components/PopperBasic';
import PopperPositioned from './components/PopperPositioned';

function App() {
    return (<div>


        <center>

          <PopperBasic/>
          <br></br><br></br><br></br>
          <PopperPositioned/>
        
        </center>

    </div>
    );
}
export default App;
