import React from 'react';

function Metric({ metric, setMetric }) {
  return (
    <div className="flex w-full cursor-pointer items-center justify-end gap-2 pr-2 text-xl font-semibold text-cyan-700 dark:text-white sm:text-2xl ">
      <span
        className={
          metric === 'farenheit' ? '' : 'font-extrabold text-orange-400'
        }
        onClick={() => setMetric('celsius')}
      >
        °C
      </span>
      <span className="cursor-none">|</span>
      <span
        className={metric === 'celsius' ? '' : 'font-extrabold text-orange-400'}
        onClick={() => setMetric('farenheit')}
      >
        °F
      </span>
    </div>
  );
}

export default Metric;
