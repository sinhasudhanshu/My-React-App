function Calculator(props)
{
    // console.log("Add");
    return <h2>
       <h1> {props.a}</h1>
       <h1> {props.b}</h1>
       <h1> {Number( props.a) + Number(props.b)}</h1>
       <h1> {Number( props.a) - Number(props.b)}</h1>
        
    </h2>;

}
export default Add; 