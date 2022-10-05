// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// // import { useNavigate } from 'react-router-dom';
// // import ReactTooltip from 'react-tooltip';
// import sunriseImage from '../../img/sunrise.png';
// import sunsetImage from '../../img/sunset.png';

// const Forecast = (props) => {
//   const {
//     sunrise, sunset, date, weather, condition,
//   } = props;

//   return (
//     <div className="forecast">
//       <div className="forecast__date">
//         <p>{date}</p>
//       </div>
//       <div className="forecast__weather">
//         {' '}
//         Temperature:
//         {' '}
//         <span>
//           {weather}
//           {' '}
//           {' '}
//           {' '}
//           degrees
//         </span>
//       </div>
//       <div className="sunriseset">
//         <img src={sunriseImage} alt="sunrise" />
//         <p>{sunrise}</p>
//         <img src={sunsetImage} alt="sunset" />
//         <p>{sunset}</p>
//       </div>
//       <div className="forecast__condition">
//         <img src={condition.icon} alt={condition.text} />
//         <p>{condition.text}</p>
//       </div>
//     </div>
//   );
// };

// Forecast.propTypes = {
//   sunrise: PropTypes.string.isRequired,
//   sunset: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   weather: PropTypes.number.isRequired,
//   condition: PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Forecast;
