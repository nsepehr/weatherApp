import axios from 'axios';

const API_KEY  = '64d03c437c1bfa8e240f170d9da5e6f5';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: '); console.log(request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
