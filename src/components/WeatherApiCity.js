import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
//import './HelloEffect.css';``

function WeatherApiCity() {
    const [value, setValue] = useState(0);
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?${value}&appid=32b20e1d45a1df5d721b8176d5983a2c&units=metric`;

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null);

    useEffect(() => {

        axios.get(baseURL).then((response) => {
            console.log(response.data.city);
            setWeather(response.data);
            setCity(response.data.city);

        })
            .catch(error => {
                setWeather(["weather"][0]["main"]);
                setCity(['No Data']);

            });
    }, [value]);

    if (!weather) return (<div>
        <center>
            <input type="text" onChange={valueChange} />
            <p>No Data</p>
        </center>
    </div>);
    return <div>
        <center>
            <input type="text" value={value} onChange={valueChange} />
            
            <p>Name {(city.name) ? city.name : "No Data"}</p>
           

            {weather.map(current => {
                return (
                    <ul className='liwidth' key={current}>
                        <li> <a target={"_blank"} href={current}>{current}</a>


                        </li>
                    </ul>
                );
            })}



        </center>
    </div>

}
export default WeatherApiCity;