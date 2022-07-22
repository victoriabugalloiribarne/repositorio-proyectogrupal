import React, { useState } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="mx-auto bg-slate-100 px-5 drop-shadow-md dark:bg-slate-700 sm:px-10">
      <div className="mx-auto flex items-center justify-between py-6 md:max-w-[700px]">
        <div className="flex items-center gap-2 text-cyan-700 dark:text-white">
          <TiWeatherPartlySunny size={48} />
          <h1 className="pt-2 text-2xl font-bold tracking-wide sm:text-3xl ">
            aclim<span className="text-orange-400">APP</span>tate
          </h1>
        </div>
        <div className="cursor-pointer pt-3 " onClick={handleDarkMode}>
          {!darkMode ? (
            <span className="flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-white sm:text-lg">
              <MdDarkMode size={24} /> Dark Mode
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-white sm:text-lg">
              <MdOutlineLightMode size={24} />
              Light Mode
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
