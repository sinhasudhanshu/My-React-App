import {useRef, useState } from 'react';
const UpdateBank = () => {
    const inputName = useRef();
    const inputAccontNo = useRef();
    const initialState = [
        {accountno: 2541, name: 'sagar'},
        {accountno: 3689, name: 'sachin'},
        {accountno: 8526, name: 'shivam'},
    ];
    const [data, setData] = useState(initialState);
    const updateName = () => {
        const newName = data.map(current =>{
            if(current.accountno === Number(inputAccontNo.current.value)){
                return {...current, name: inputName.current.value};
            }
            return current;
        });
        setData(newName);
    };
    const addName = () => {
        data.push({accountno:Number(inputAccontNo.current.value),name:inputName.current.value});
        const newName = data.map(current =>{
            return current;
        });
        setData(newName);
    };
    return (
        <div>
            Account No   <input type="text" ref={inputAccontNo} />
            <br/>
           Name   <input type="text" ref={inputName} />
            <button onClick={updateName}>Update accout</button>
            <button onClick={addName}>Add accout</button>
            {data.map(current => {
                return (
                    <div key={current.accountno}>
                        <h2>Accountno: {current.accountno}</h2>
                        <h2>name: {current.name}</h2>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};
export default UpdateBank;