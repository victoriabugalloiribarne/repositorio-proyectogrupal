import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchCity({
  city,
  setCity,
  handleSearchCity,
  notFound,
  error,
  emptyCity,
}) {
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <form className="my-4 ">
        <div className="flex items-center justify-center drop-shadow-sm">
          <input
            type="text"
            placeholder="Buscar por Ciudad ..."
            className="h-12 w-full rounded-l-lg bg-slate-200 px-4 text-slate-600 outline-cyan-500 placeholder:text-slate-400 dark:outline-slate-400 "
            value={city}
            onChange={handleChange}
          />
          <span
            onClick={handleSearchCity}
            className="flex h-12 cursor-pointer items-center justify-center rounded-r-lg bg-cyan-700 px-4 hover:opacity-80 dark:bg-slate-600"
          >
            <AiOutlineSearch color={'white'} className="" size={24} />
          </span>
        </div>{' '}
      </form>
      {(notFound || error) && (
        <h3 className="font-semibold italic text-red-500">
          "{city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}" no se
          encontró. Por favor, intenta nuevamente.
        </h3>
      )}
      {emptyCity && (
        <h3 className="font-semibold italic text-red-500">
          Por favor, ingresa una ciudad para realizar la búsqueda.
        </h3>
      )}
    </>
  );
}

export default SearchCity;
