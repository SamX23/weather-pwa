import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '979e009a26c3de868907b8fdebf0271e'

export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params:{
      q: query,
      units:'metric',
      APPID: API_KEY,
    }
  })
  return data;
}
