import axios from 'axios';
import React, { useState } from 'react';

import '../weather/style.css'

function WeatherApp() {

    const [location, setLocation] = useState("location name....")
    const [temperature, setTemperature] = useState(0)
    const [weathertype, setWeathertype] = useState("....")
    const [temperaturedate, setTemperaturedate] = useState("Date")

    let weatherAPI = {
        key:"988903e1b512ab0fd0cbf8a485d9b547",
        apiurl:"https://api.openweathermap.org/data/2.5/weather?units=metric&q="
    }

function captureLocation(e){
    console.log(e.target.value)
    setLocation(location=>{
        return e.target.value
    })
}

function callAPI(e){
    console.log(e)
    if (e.key === "Enter") {
        let api = weatherAPI.apiurl + location + "&appid=" + weatherAPI.key
        console.log(api)
        axios.get(api)
                .then(res=>{
                    console.log(res.data)
                    setLocation(location=>res.data.name + ", " + res.data.sys.country)
                    setTemperaturedate(dt=>new Date(res.data.dt*1000).toLocaleString())
                    setTemperature(temperature=>res.data.main.temp)
                    setWeathertype(weathertype=>res.data.weather[0].main)
                }, err=>{
                    console.log(err)
                })
    }
}

if (weathertype.includes("Clear")) {
    return ( 
        <div>
            <div className='weather-app-clear'>
                <div className='mainapp'>
                    <div className='searchbox'>
                        <input type='text' className='searchtext'
                            onChange={captureLocation}
                            onKeyPress={callAPI}></input>
                    </div>
                    <div className='location'>
                        <div className='locationname'>{location}</div>
                        <div className='locationdate'>{temperaturedate}</div>
                    </div>
                    <div className='temperaturebox'>
                        <div className='temperature'>{temperature} °C</div>
                        <div className='temperaturetype'> It feels like {weathertype}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

if (weathertype.includes("rainy")) {
    return ( 
        <div>
            <div className='weather-app-rain'>
                <div className='mainapp'>
                    <div className='searchbox'>
                        <input type='text' className='searchtext'
                            onChange={captureLocation}
                            onKeyPress={callAPI}></input>
                    </div>
                    <div className='location'>
                        <div className='locationname'>{location}</div>
                        <div className='locationdate'>{temperaturedate}</div>
                    </div>
                    <div className='temperaturebox'>
                        <div className='temperature'>{temperature} °C</div>
                        <div className='temperaturetype'> It feels like {weathertype}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

if (weathertype.includes("Clouds")) {
    return ( 
        <div>
            <div className='weather-app-cloud'>
                <div className='mainapp'>
                    <div className='searchbox'>
                        <input type='text' className='searchtext'
                            onChange={captureLocation}
                            onKeyPress={callAPI}></input>
                    </div>
                    <div className='location'>
                        <div className='locationname'>{location}</div>
                        <div className='locationdate'>{temperaturedate}</div>
                    </div>
                    <div className='temperaturebox'>
                        <div className='temperature'>{temperature} °C</div>
                        <div className='temperaturetype'> It feels like {weathertype}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

    return ( 
        <div>
            <div className='weather-app-sun'>
                <div className='mainapp'>
                    <div className='searchbox'>
                        <input type='text' className='searchtext'
                            onChange={captureLocation}
                            onKeyPress={callAPI}></input>
                    </div>
                    <div className='location'>
                        <div className='locationname'>{location}</div>
                        <div className='locationdate'>{temperaturedate}</div>
                    </div>
                    <div className='temperaturebox'>
                        <div className='temperature'>{temperature} °C</div>
                        <div className='temperaturetype'> It feels like {weathertype}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default WeatherApp;