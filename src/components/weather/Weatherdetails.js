import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  BiBrightness, BiChevronLeft, BiChevronRight,
} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './Weather.css';
import celsius from '../../img/celsius.png';
import clouds from '../../img/cloud.png';
import compass from '../../img/compass.png';
import gauge from '../../img/gauge.png';
import humid from '../../img/humidity.png';
import precipitacion from '../../img/precipitacion.png';
import visibility from '../../img/visibility.png';
import wind from '../../img/wind.png';

const WeatherDetails = (props) => {
  const {
    name, country, time, lon, lat, conditionDesc, precipitation,
    lastUpdate, pressureMb, windDir, cloud, humidity, tempCelcius, windKph, visibilityKm, icon,
  } = props;

  const navigate = useNavigate();

  const [cityimage, setcityimage, cityvalue] = useState('');

  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${name}&client_id=uFOc6WEV93YMHW4x92VgxuB03crQlU45fAA-TE5uW0I`,
    )
      .then((resp) => resp.json())
      .then((data) => setcityimage(data))
      .then(setcityimage(cityimage))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchImage();
  }, [cityvalue]);

  return (
    <>
      <div>
        <div className="controlMenu">
          <ul className="controls">
            <li>
              <button className="controlBtn oneBtn" type="button">
                <BiChevronLeft
                  onClick={() => navigate('/')}
                  data-for="main"
                  data-tip="Go back"
                  size={40}
                />
              </button>
            </li>
            <li>
              <button className="controlBtn twoBtn" type="button">
                <BiChevronRight size={40} />
              </button>
            </li>
            <li>
              <button className="controlBtn threeBtn" type="button">
                <BiBrightness data-for="main" data-tip="Dark Mode" size={40} />
              </button>
            </li>
          </ul>
          <ul />
        </div>
        <section className="mainCity">
          <div className="card">
            <div className="cardHeader">
              <img
                src={icon}
                alt="logo"
              />
              <h3>
                {conditionDesc}
              </h3>
            </div>
            <div className="cardTitle">
              <h1>Current Weather Information</h1>
            </div>
            <div className="cardBody">
              <div className="topSection">
                <div className="cityName">
                  <h2>
                    {name}
                    <span className="country">
                      {' '}
                      /
                      {country}
                    </span>
                  </h2>
                  <div className="cityMore">
                    <p>
                      Longitude:
                      {lon}
                    </p>
                    <p>
                      Local Time:
                      {time}
                    </p>
                    <p>
                      Latitude:
                      {lat}
                    </p>
                    <p>
                      Lastly Updated:
                      {lastUpdate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="randomImage">
            <img
              src={
            typeof cityimage.results === 'undefined'
              ? console.log('prinintg ond oudf d')
              : cityimage.results[
                Math.floor(Math.random() * cityimage.results.length)
              ].urls.full
          }
              className="cityImage"
              alt="loading"
            />
          </div>
        </section>
        <section className="weather">
          <div className="cards">
            <div className="cardsIcon">
              <img
                src={celsius}
                className="weather-icon"
                alt=""
              />
            </div>
            <div>Temperature:</div>
            <div className="cardsText" id="dataOutputTemp">
              {tempCelcius}
              {' '}
              degrees
            </div>
          </div>

          <div className="cards">
            <div className="cardsIcon">
              <img src={humid} className="weather-icon" alt="" />
            </div>
            <div>Humidity:</div>
            <div className="cardsText" id="dataOutputHumidity">
              {humidity}
              {' '}
              %
            </div>
          </div>

          <div className="cards">
            <div className="cardsIcon">
              <img src={wind} className="weather-icon" alt="" />
            </div>
            <div>Wind Speed:</div>
            <div className="cardsText" id="dataOutputWindSPD">
              {windKph}
              {' '}
              kph
            </div>
          </div>

          <div className="cards">
            <div className="cardsIcon">
              <img src={compass} className="weather-icon" alt="" />
            </div>
            <div>Wind Direction:</div>
            <div className="cardsText" id="dataOutputWindDIR">
              {windDir}
            </div>
          </div>
          <div className="cards">
            <div className="cardsIcon">
              <img src={gauge} className="weather-icon" alt="" />
            </div>
            <div>Barometric Pressure:</div>
            <div className="cardsText" id="dataOutputBarPress">
              {pressureMb}
              {' '}
              mb
            </div>
          </div>

          <div className="cards">
            <div className="cardsIcon">
              <img src={visibility} className="weather-icon" alt="" />
            </div>
            <div>Visibility:</div>
            <div className="cardsText" id="dataOutputVisibility">
              {visibilityKm}
              {' '}
              km
            </div>
          </div>
          <div className="cards">
            <div className="cardsIcon">
              <img src={clouds} className="weather-icon" alt="" />
            </div>
            <div>Cloud Cover:</div>
            <div className="cardsText" id="dataOutputCloudCover">
              {cloud}
              %
            </div>
          </div>
          <div className="cards">
            <div className="cardsIcon">
              <img src={precipitacion} className="weather-icon" alt="" />
            </div>
            <div>Precipitation:</div>
            <div className="cardsText" id="dataOutputCloudCover">
              {precipitation}
              {' '}
              in
            </div>
          </div>
        </section>
      </div>
      <ReactTooltip
        id="main"
        place="top"
        type="light"
        effect="float"
        multiline={false}
      />
    </>

  );
};

WeatherDetails.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  lon: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  conditionDesc: PropTypes.string.isRequired,
  precipitation: PropTypes.number.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  pressureMb: PropTypes.number.isRequired,
  tempCelcius: PropTypes.number.isRequired,
  windDir: PropTypes.string.isRequired,
  cloud: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  windKph: PropTypes.number.isRequired,
  visibilityKm: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WeatherDetails;
