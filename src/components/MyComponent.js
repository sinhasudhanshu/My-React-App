import SubComponent from "./SubComponent";
import './MyComponent.css';
function MyComponent(props){
    return<div className="myclass">

        MyComponent
        <SubComponent></SubComponent>
        <img  src="fifa.jpg"/>
    </div>

    
}
export default MyComponent;