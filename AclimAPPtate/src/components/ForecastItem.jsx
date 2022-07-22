import React from 'react';

function ForecastItem({ weatherData, metric, dayNumber, dayName }) {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-cyan-400/30 py-4 px-4 text-slate-200 drop-shadow-md dark:bg-slate-500/20 sm:px-6">
      <span className="w-12 text-xs sm:text-base">{dayName}</span>
      <div className="ml-auto flex items-center justify-center gap-2 text-sm tracking-wide text-slate-200 sm:text-base">
        {metric === 'celsius' ? (
          <span>
            Min:{' '}
            {Math.round(
              weatherData.forecast.forecastday[dayNumber].day.mintemp_c
            )}
            °C
          </span>
        ) : (
          <span>
            Min:{' '}
            {Math.round(
              weatherData.forecast.forecastday[dayNumber].day.mintemp_f
            )}
            °F
          </span>
        )}
        <span>|</span>
        {metric === 'celsius' ? (
          <span>
            Máx:{' '}
            {Math.round(
              weatherData.forecast.forecastday[dayNumber].day.maxtemp_c
            )}
            °C
          </span>
        ) : (
          <span>
            Máx:{' '}
            {Math.round(
              weatherData.forecast.forecastday[dayNumber].day.maxtemp_f
            )}
            °F
          </span>
        )}
      </div>
    </div>
  );
}

export default ForecastItem;
