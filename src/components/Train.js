import { useState } from "react"
import './Train.css';
const Train = () => {


    const [trainData, setTrain] = useState([{ trainno: 1253, trainname: "shivganga" }])
    const sumN1 = (event) => {
        console.log(trainData[0].trainno);
        setTrain(

            [{ trainname: event.target.value, trainno: trainData[0].trainno }]
        );
        console.log("Object Changed");
    };
    const sumN2 = (event) => {
        console.log(trainData[0].trainname);
        setTrain(

            [{ trainno: event.target.value, trainname: trainData[0].trainname }]
        );
        console.log("Object Changed");

    };
    return (
        <div className="myTrain">
            <h2>List of Train</h2>
            <h2>{trainData[0].trainname}</h2>
            <h2>{trainData[0].trainno}</h2>
            <label>Trai Name</label>
            <input type="text" onChange={sumN1} />
            <label>Train No</label>
            <input type="number" onChange={sumN2} />
            <br></br>

            <img src="train.jpg" />
        </div>
    )
};
export default Train;