import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getAllCities from './redux/place/thunk';
// import PlaceContainer from './components/place/PlaceContainer';
import AutoForm from './components/autoComplete/AutoForm';
import WeatherContainer from './components/weather/WeatherContainer';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  return (
    <>
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<AutoForm />} />
          <Route path="/details/:city" element={<WeatherContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
