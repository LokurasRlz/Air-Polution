import { fetchWeather, loadingStart } from './weatherReducer.js';

const apiKey = '2bed54dd4eb346aaa57212632220310';

const getWeather = (payload) => async (dispatch) => {
  dispatch(loadingStart(true));
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${payload}&aqi=no`);
  const finalResponse = await response.json();
  dispatch(fetchWeather(finalResponse));
  dispatch(loadingStart(false));
};

export default getWeather;
