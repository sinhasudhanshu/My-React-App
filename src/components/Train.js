import { useState } from "react"
const Train = () => {

    const [trainData, setTrain] = useState([{ trainno: 1253, trainname: "shivganga" }])
    const sumN1 = (event) => {
        setTrain(
            ...trainData
            [{ trainno: 1253, trainname: event.target.value }]
        );
        console.log("Object Changed");
    };
    const sumN2 = (event) => {
        setTrain(
            ...trainData
            [{ trainno:event.target.value }]
        );
        console.log("Object Changed");
    };
    return (
        <div className="myMap">
            <h2>List of Train</h2>
            <h2>{trainData[0].trainname }</h2>
            <h2>{trainData[0].trainno }</h2>
            
            <label>Trai Name</label>
            <input type="text" onChange={sumN1} />
            <label>Train No</label>
            <input type="number" onChange={sumN2} />
            <br></br>
            <img src="fifa.jpg" />
        </div>
    )

};
export default Train;