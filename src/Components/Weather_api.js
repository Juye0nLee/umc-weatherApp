import axios from 'axios';

 const url = 'https://api.openweathermap.org/data/2.5/weather?q='

export const searchWeather = async (cityName,API_KEY) => { //?
    try {
        const response = await axios.get(`${url}${cityName}&appid=${API_KEY}`);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};