import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Tagline from './Tagline';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import Context from '../Context';
import Error from './Error';
import DateTime from './DateTime';
import Footer from './Footer';

const Main = () => {

    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
    const [main, setMain] = useState()
    const [desc, setDesc] = useState()
    const [weatherIcon, setWeatherIcon] = useState()
    const [countryCode, setCountryCode] = useState()

    const [error, setError] = useState()

    const api_call = async e => {
        e.preventDefault()
        const location = e.target.elements.location.value;
        if (!location) {
            setWeather(null); return setError('Please enter the name of the city.');
        }
        const API_KEY = "6e721a56f97140201608bd161a8b7229";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        const request = axios.get(url);
        const response = await request;
        setWeather(response.data);
        setCity(response.data.name);
        setMain(response.data.weather[0].main);
        setDesc(response.data.weather[0].description);
        setWeatherIcon(response.data.weather[0].icon);
        setCountryCode(response.data.sys.country);
        // if all good, remove error
        setError(null);


    }
    weather && console.log(weather);

    return (
        <div className="main">
            <Header />
            <Content>
                <DateTime />
                <Tagline />
                <Context.Provider value={{ api_call, weather, city, error, main, desc, weatherIcon, countryCode }}>
                    <WeatherSearch />
                    {weather && <WeatherData />}
                    {error && <Error error={error} />}
                </Context.Provider>
                <Footer />
            </Content>
        </div>
    );
};

export default Main;