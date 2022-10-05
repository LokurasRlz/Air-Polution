// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loadLocation } from "../../redux/forecast/forecastAPI";
// import Forecast from "./ForecastList";

// const Home = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(loadLocation());
//     }, [dispatch]);

//     const searchedLocation = useSelector(
//       (state) => state.location.searchedLocation
//     );

//     const searchedCurrent = useSelector(
//       (state) => state.location.searchedCurrent
//     );

//     const forecast = useSelector((state) => state.location.searchedForecast);

//     return (
//         <div>
//       <HomeContainer>
//         {typeof searchedLocation !== "undefined" ? (
//             <div>
//                  <ForecastItem>
//               {forecast.map((thisForecast) => (
//                 <AnimatePresence exitBeforeEnter>
//                   <motion.div
//                     variants={fadeInAnim2}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                     key={uudv4()}
//                   >
//                     <Forecast
//                       date={thisForecast.date}
//                       sunrise={thisForecast.astro.sunrise}
//                       sunset={thisForecast.astro.sunset}
//                       weather={thisForecast.day.avgtemp_c}
//                       condition={thisForecast.day.condition}
//                     />
//                   </motion.div>
//                 </AnimatePresence>
//               ))}
//             </ForecastItem>
//             </div>

//     )};

//     </HomeContainer>
//     </div>
//     );
