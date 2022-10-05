import React from 'react';
import { BiCog, BiMicrophone } from 'react-icons/bi';
import weather from '../../img/weather.png';
import './Header.css';

const Header = () => (
  <div className="appName">
    <div className="logo">
      <img src={weather} className="weatherLogo" alt="cloud logo" />
      <h1>World Weather</h1>
    </div>
    <ul className="onlyOne">
      <li>
        <BiCog className="spinningGear" size={30} />
      </li>
      <li>
        <BiMicrophone className="microphone" size={30} />
      </li>
    </ul>
  </div>
);

export default Header;
