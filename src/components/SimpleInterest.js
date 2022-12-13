function SimpleInterest(props) {
    return <h2>
        <h1> {props.p}</h1>
        <h1> {props.t}</h1>
        <h1> {props.r}</h1>
        <h2>SimpleInterest {(Number(props.p) * Number(props.t) * Number(props.r)) / 100}</h2>
    </h2>

}
export default SimpleInterest;