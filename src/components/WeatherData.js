import React, { useContext } from 'react';
import Context from '../Context'

const WeatherData = () => {
    const { weather, city, main, desc, weatherIcon, countryCode } = useContext(Context);
    const { temp, humidity, pressure } = weather.main;

    return (
        <div className="weather-data">
            <p className="weather__tagline">Current weather for <span className="weather-data__city">{city}, <strong>{countryCode}</strong>:</span></p>
            <p className="weather__tagline"><span className="weather-main"><strong>{main}</strong>, {desc}</span></p>
            <div className="weather__icon-wrapper">
                <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} className='weather-data__icon' alt="Icon for displaying weather"></img>
            </div>
            <div className="weather-data__box">
                <span className="weather-data__property">
                    <p className="weather-data__title">Temperature</p>
                    <p className="weather-data__value">{temp} °C</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Humidity</p>
                    <p className="weather-data__value">{humidity}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Pressure</p>
                    <p className="weather-data__value">{pressure}</p>
                </span>
            </div>
        </div>

    );
};

export default WeatherData;