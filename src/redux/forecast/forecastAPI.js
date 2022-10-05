// import { fetchForecast } from './forecastReducer';

// const forecastLocationURL = (location) => `https://api.weatherapi.com/v1/forecast.json?key=0abe7ad125fb4e93af2141636212003&q=${location}&days=7`;

// export const loadLocation = () => async (dispatch) => {
//   const current = await axios.get(defaultLocationURL());
//   const location = await axios.get(defaultLocationURL());

//   dispatch({
//     type: 'FETCH_LOCATION',
//     payload: {
//       location: location.data.location,
//       current: current.data.current,
//     },
//   });
// };

// export const fetchSearch = (location) => async (dispatch) => {
//   const weatherForecast = await axios.get(forecastLocationURL(location));

//   console.log(weatherForecast.data.forecast.forecastday);

//   dispatch({
//     type: 'FETCH_SEARCHED',
//     payload: {
//       forecast: weatherForecast.data.forecast.forecastday,
//     },
//   });
// };
