import axios from 'axios';

const API_KEY = '4f64b2f262dbfd86a646f444d58aed24';
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
