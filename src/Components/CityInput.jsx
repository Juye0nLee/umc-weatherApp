import React, { useState } from 'react';
import styled from 'styled-components';
import { searchWeather } from './Weather_api';

const API_KEY = 'a40d9d626194b30d1df5a79ef7fd4280';

export const InputStyle = styled.input`
    width: 20%;
    border: 2px solid;
    border-radius: 5px;
    padding: 10px;
`;

export const WeatherStyle = styled.div`
    border: 2px solid;
    width: 300px;
    height: 200px;
`;

function CityInput() {
    const [temp, setTemp] = useState("");
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState([]);
    const [cityName, setCityName] = useState("");

    const handleKeyPress = async (e) => {
        if (e.key === "Enter") {
            try {
                const result = await searchWeather(cityName, API_KEY);
                // Assuming searchWeather returns an object with city, temp, and weather properties
                console.log(result);
                setCity(result.data.name);
                setTemp(result.data.main.temp);
                setWeather(result.data.weather[0].main);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                // Handle error as needed
            }
        }
    };

    return (
        <div>
            <InputStyle
                placeholder="도시를 입력하세요."
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <WeatherStyle>
                {city && <p>City: {city}</p>}
                {temp && <p>Temperature: {temp}</p>}
                {weather && <p>Weather: {weather}</p>}
            </WeatherStyle>
        </div>
    );
}

export default CityInput;
