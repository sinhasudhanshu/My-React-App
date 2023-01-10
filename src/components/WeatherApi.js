import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
function WeatherApi() {
    const [apicity, setApicity]= useState("varanasi");
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${apicity}&appid=32b20e1d45a1df5d721b8176d5983a2c&units=metric`;
    const [weather, setWeather] = useState("data");
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            //let data=JSON.stringify(response.data);   
            let data=response.data["weather"][0]["main"];
            let temp=response.data["main"]["temp"];
            let tempmax=response.data["main"]["temp_max"];
            let tempmin=response.data["main"]["temp_min"];
           
            console.log(data);
            setWeather(data + ": Temp" + temp +" :MaxTemp"+ tempmax +" :MinTemp"+tempmin);
           
            // setWeather(temp);
            
        }).catch(error => {
            
            setCity(['No Data']);
            
        });
    }, [apicity]);
    const clickHandler = (event) => {
        console.log("clicked");
setApicity(city);
    };
    

    const [city, setCity]= useState(0);
    const cityChangeHandler1 = (event) => {

        
        console.log(event.target.value);
        setCity((event.target.value));
    };

    return <div>
        <center>
            <h1>{city}</h1>
           {apicity}
           <h1>{weather}</h1>
            <input type="text" onChange={cityChangeHandler1}/>
            <input type='submit' value="Submit"  onClick={clickHandler}/>
            
        </center>
    </div>

}
export default WeatherApi;