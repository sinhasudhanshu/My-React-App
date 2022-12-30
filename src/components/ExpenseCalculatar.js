import { useRef, useState } from "react";
const ExpenseCalculatar = () => {
    const inputexpenseid = useRef();
    const inputname = useRef();
    const inputcost = useRef();
    const inputdetail = useRef();
    const initialState = [
        { expenseid: 1, name:"mobile", cost: 12, detail: "electronic" },
        { expenseid: 2, name:"popatlal", cost: 45, detail: "gokuldham" },
        { expenseid: 3, name:"spiderman", cost: 35, detail: "action figure" },
    ];
    const [data, setData] = useState(initialState);
    const updateExpanse = () => {
        const newexpense = data.map(current => {
            console.log("Updating " + current.expenseid);
            if (Number(current.expenseid) === Number(inputexpenseid.current.value)) {
                
                return { ...current, name: inputname.current.value ,cost: Number(inputcost.current.value), detail: inputdetail.current.value };
            }
            return current;
        });
        setData(newexpense);
    };
    const addExpense =() => {
        console.log("Adding");
        data.push({expenseid:(inputexpenseid.current.value),name:inputname.current.value ,cost: Number(inputcost.current.value), detail: inputdetail.current.value});
    const newexpense = data.map(current =>{
        return current;
    });
    setData(newexpense);
    }
    return (
        <div>
            
            ExpenseID <input type="number" ref={inputexpenseid} />
            <br />
            Name<input type="text" ref={inputname} />
            <br />
            Cost<input type="number" ref={inputcost} />
            <br />
            Detail <input type="text" ref={inputdetail} />
            <br />
            <button onClick={updateExpanse}>update</button>
            <button onClick={addExpense}>Add</button>

            {data.map(current => {
                return (
                    
                    <div key={current.expenseid}>
                        <h2>Expenseid: {current.expenseid}</h2>
                        <h2>Name: {current.name}</h2>
                        <h2>Cost: {current.cost}</h2>
                        <h2>Detail: {current.detail}</h2>
                        <hr />
                    </div>
                );
            })}
        </div>
    );

};
export default ExpenseCalculatar;