import React from 'react'

export const WeatherReport = ({weatherData}) => {
    return (
        <div>
            <h3>Weather in {weatherData.location.name}</h3>
            <h4>temperature {weatherData.current.temperature}</h4>
            <img src={weatherData.current.weather_icons[0]} alt={weatherData.location.name}/>
            <p>{weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>
        </div>
    )
}
