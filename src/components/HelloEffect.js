import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
function HelloEffect() {
    const baseURL = "https://swapi.py4e.com/api/people/1/";
    const[films, setFilms] = useState(null);
    const [star, setStar] = useState(null);

    useEffect(() =>{
        axios.get(baseURL).then((response)=>{
            setStar(response.data);
            setFilms(response.data.films);
        });
    },[]);
    if(!star) return <h1>No Data</h1>;
    return <div className='container'>
        <div className='row'>
        <div className='col-6'>

            
            <p>{star.name}</p>
            <p>{star.mass}</p>
            
            </div>
            <div className='col-6 bg-primary'>
            <p>
                {films.map(current => {                                                                              
                    return(
                        <table className='liwidth' key={current}>
                            <tr><td><a className='btn btn-success' target={"_blank"} href={current}>{current}</a>
                            </td></tr>
                            </table>
                    );
                })}
            </p>
            </div>
        
        </div>
    </div>;
}
export default HelloEffect;