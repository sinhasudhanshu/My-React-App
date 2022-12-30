import { useRef, useState } from "react";
const ArrayBook = () => {
    const inputBook = useRef();
    const inputSubject = useRef();
    const initialState =[
        {book: " Basic C", subject:'C'},
        {book: "Java", subject:'Java'},
        {book: "Python", subject:'Python'},
    ];
    const [data, setData] = useState(initialState);
    const updateBook = () =>{
        const newBook = data.map(current =>{
        if(current.subject === (inputSubject.current.value)){
            return {...current, book: inputBook.current.value};
        }
        return current;

    });
    setData(newBook);
};
const addBook = () => {
    data.push({subject:(inputSubject.current.value),book:inputBook.current.value});
    const newBook = data.map(current =>{
        return current;
    });
    setData(newBook);
};
const removeBook=()=>{
    data.pop({subject:(inputSubject.current.value)});
    const newBook= data.map(current =>{
        return current;
    });
    setData(newBook);
}; 
return(
    <div>
        Subject <input type="text" ref={inputSubject}/>
        <br/>
        Book <input type="text" ref={inputBook}/>
        <button onClick={updateBook}>UpdateBook</button>
        <button onClick={addBook}>Add Book</button>
        <button onClick={removeBook}>Remove Book</button>

        {data.map(current => {
                return (
                    <div key={current.subject}>
                        <h2>Subject: {current.subject}</h2>
                        <h2>Book: {current.book}</h2>
                        <hr />
                    </div>
                );
        })} 
        </div>
    );
};
export default ArrayBook;
