function Calculator(props)
{
   
    return <h2>
       <h1> {props.a}</h1>
       <h1> {props.b}</h1>
       <h2>Addition {Number( props.a) + Number(props.b)}</h2>
       <h2>Subtraction {Number( props.a) - Number(props.b)}</h2>
       <h2>Multiplication {Number( props.a) * Number(props.b)}</h2>
       <h2>Division {Number( props.a) / Number(props.b)}</h2>
       
       
        
    </h2>;

}
export default Calculator; 