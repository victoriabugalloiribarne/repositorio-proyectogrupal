import React from 'react';
import ForecastItem from './ForecastItem';

function WeatherInfo({ weatherData, metric }) {
  // Set day name to display in forecast

  // Today's date
  const today = new Date();

  // Today's date + 1
  const dayPlusOne = new Date(today);
  dayPlusOne.setDate(dayPlusOne.getDate() + 1);
  let dayPlusOneName = dayPlusOne.toLocaleString('es-ar', {
    weekday: 'long',
  });
  dayPlusOneName =
    dayPlusOneName.charAt(0).toUpperCase() + dayPlusOneName.slice(1);

  // Today's date + 2
  const dayPlusTwo = new Date(today);
  dayPlusTwo.setDate(dayPlusTwo.getDate() + 2);
  let dayPlusTwoName = dayPlusTwo.toLocaleString('es-ar', {
    weekday: 'long',
  });
  dayPlusTwoName =
    dayPlusTwoName.charAt(0).toUpperCase() + dayPlusTwoName.slice(1);

  return (
    <>
      {weatherData === null ? (
        ''
      ) : (
        <section className="mx-auto flex h-auto flex-col items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-12 drop-shadow-md dark:bg-slate-600 sm:px-8">
          <h2 className="mb-2 px-10 text-center text-2xl font-bold tracking-wider text-white sm:text-4xl">
            {weatherData.location.name}
          </h2>
          <div className="-mt-2 text-center text-xs text-white sm:text-sm ">
            {/* <span>{weatherData.location.region}, </span> */}
            <span>{weatherData.location.country}</span>
          </div>
          <div className="leading-11 flex flex-col items-center justify-center text-white sm:gap-2">
            <div className="flex flex-col items-center justify-center">
              <span className="mt-2 text-sm font-thin tracking-wide">
                {weatherData.current.condition.text}
              </span>
              <img
                className="my-2 h-[96px] w-[96px] md:h-[96px] md:w-[96px]"
                src={weatherData.current.condition.icon}
                alt={weatherData.location.name}
              />
            </div>
            <div className="">
              {metric === 'celsius' ? (
                <span className="text-5xl font-bold drop-shadow-sm sm:text-7xl">
                  {Math.round(weatherData.current.temp_c)}°C
                </span>
              ) : (
                <span className="text-5xl font-bold tracking-widest drop-shadow-sm sm:text-7xl">
                  {Math.round(weatherData.current.temp_f)}°F
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center text-slate-200">
              <span className="text-[10px]">Amanecer</span>
              <span className="text-xs font-bold">
                {weatherData.forecast.forecastday[0].astro.sunrise}
              </span>
            </div>
            <div className="flex flex-col items-center text-slate-200">
              <span className="text-[10px]">Atardecer</span>
              <span className="text-xs font-bold">
                {weatherData.forecast.forecastday[0].astro.sunset}
              </span>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col gap-2">
            <h3 className="ml-1 text-xs text-orange-200 sm:text-sm">
              Pronóstico extendido 48hs
            </h3>
            <ForecastItem
              weatherData={weatherData}
              metric={metric}
              dayNumber={0}
              dayName={'Hoy'}
            />
            <ForecastItem
              weatherData={weatherData}
              metric={metric}
              dayNumber={1}
              dayName={dayPlusOneName}
            />
            <ForecastItem
              weatherData={weatherData}
              metric={metric}
              dayNumber={2}
              dayName={dayPlusTwoName}
            />
          </div>
          <div className="flex w-full flex-col items-center gap-2 py-3 text-slate-200">
            <span className="text-xs">Índice UV</span>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-yellow-500 to-purple-600">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-2xl font-semibold dark:bg-slate-600">
                {weatherData.current.uv}
              </span>
            </span>
          </div>
          <div className="grid w-full gap-2 rounded-lg py-3 text-white sm:grid-cols-3 sm:justify-between sm:bg-cyan-400/50 sm:px-2 sm:drop-shadow-md sm:dark:bg-slate-500/50">
            <div className="info-details">
              {metric === 'celsius' ? (
                <span>{weatherData.current.wind_kph} KM/H</span>
              ) : (
                <span>{weatherData.current.wind_mph} MP/H</span>
              )}
              <span>Viento</span>
            </div>
            <div className="info-details sm:rounded-none sm:border-x-2 sm:border-cyan-400/70 sm:dark:border-slate-400/40">
              <span> {weatherData.current.humidity} %</span>
              <span>Humedad</span>
            </div>
            <div className="info-details">
              {metric === 'celsius' ? (
                <span>{Math.round(weatherData.current.feelslike_c)}°C</span>
              ) : (
                <span>{Math.round(weatherData.current.feelslike_f)}°F</span>
              )}
              <span>ST</span>
            </div>
          </div>
          <div className="mt-2 text-center text-[8px] italic tracking-wide text-slate-200">
            Actualizado: {weatherData.current.last_updated}
          </div>
        </section>
      )}
    </>
  );
}

export default WeatherInfo;
