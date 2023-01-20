import logo from './logo.svg';
import './App.css';

// import Links from './components/Links';
// import IconMenu from './components/IconMenu';
// import DenseMenu from './components/DenseMenu';
// import PaginationOutlined from './components/PaginationOutlined';
// import PaginationBasic from './components/PaginationBasic';
import StepperLinear from './components/StepperLinear';
import StepperNonLinear from './components/TabsBasic';
import BasicTabs from './components/TabsBasic';
import ScrollableTabs from './components/ScrollableTabs';

function App() {
    return (<div>


        <center>
         
        <BasicTabs/>
        <br></br>
        <ScrollableTabs/>
        
        </center>

    </div>
    );
}
export default App;
