import { useState } from 'react';
import Metric from './components/Metric';
import Navbar from './components/Navbar';
import SearchCity from './components/SearchCity';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [metric, setMetric] = useState('celsius');
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [emptyCity, setEmptyCity] = useState(false);

  const handleSearchCity = (e) => {
    e.preventDefault();
    const fetchWeather = async () => {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=df32ee2b370245bcba1122918221107&q=${city}&days=5&aqi=no&alerts=no&lang=es`;
      const response = await fetch(url);
      const data = await response.json();
      if (city !== '') {
        if (data.error) {
          setError(true);
          setTimeout(() => {
            setError(false);
            setCity('');
          }, 3000);
          // console.log('error fetching data');
        } else if (city.toLowerCase() === data.location.name.toLowerCase()) {
          setWeatherData(data);
          setCity('');
        } else {
          setNotFound(true);
          setWeatherData(null);
          setTimeout(() => {
            setNotFound(false);
            setCity('');
          }, 3000);
        }
      } else {
        setEmptyCity(true);
        setWeatherData(null);
        setTimeout(() => {
          setEmptyCity(false);
          setCity('');
        }, 3000);
      }
    };
    fetchWeather();
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto mt-8 mb-24 max-w-[500px] px-10 sm:max-w-[700px] sm:px-20">
        <Metric metric={metric} setMetric={setMetric} />
        <SearchCity
          setCity={setCity}
          city={city}
          handleSearchCity={handleSearchCity}
          notFound={notFound}
          error={error}
          emptyCity={emptyCity}
        />
        <WeatherInfo weatherData={weatherData} metric={metric} />
      </main>
    </>
  );
}

export default App;
