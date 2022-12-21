import { useRef, useState } from "react";

const UpdateArray = () => {

    const [sumData, setSum] = useState({

        productid: 1,
        productName: 2,
        productPrice: 3
    });
    return <p>
        <label>ID{(sumData.productid)}</label>
        <br></br>

        <label>Name{(sumData.productName)}</label>
        <br></br>

        <label>Price{(sumData.productPrice)}</label>
        
    </p>

}
export default UpdateArray;