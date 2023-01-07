import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
function WeatherApi() {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=varanasi&appid=32b20e1d45a1df5d721b8176d5983a2c&units=metric";
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
            
        });
    }, []);

    return <div>
        <center>
            <p>{weather}</p>
            
        </center>
    </div>

}
export default WeatherApi;