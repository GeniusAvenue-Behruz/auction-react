import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container flex  lg:flex-nowrap flex-wrap items-center justify-between px-4 py-2 mx-auto">
      <a href="#!" className="text-2xl font-bold text-black">Rolling</a>
      <button
        className="text-black inline-flex p-2 rounded lg:hidden ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`text-3xl fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>
      <div className={`w-full lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <form className="max-w-[470px] w-full md:mx-auto sm:mx-auto flex items-center space-x-3 justify-start rounded-full border-slate-300 py-2 px-5 bg-white border my-2 md:my-0">
          <i className="fa-solid fa-magnifying-glass text-base text-gray-400"></i>
          <input
            type="text"
            placeholder="Search Rolling"
            className="placeholder:text-gray-400 outline-none border-none flex-1"
          />
        </form>
        <ul className="flex flex-col md:justify-center md:mx-auto md:flex-row items-center md:space-x-4">
          <li>
            <a href="#!" className="link block py-2 px-4 text-black md:inline-block">Explore</a>
          </li>
          <li>
            <a href="#!" className="link block py-2 px-4 text-black md:inline-block">Activity</a>
          </li>
          <li>
            <a href="#!" className="link block py-2 px-4 text-black md:inline-block">Feed</a>
          </li>
          <li>
            <a href="#!" className="link block py-2 px-4 text-black md:inline-block">Bids</a>
          </li>
          <li className="mx-3 flex items-center justify-center">
            <a
              href="#!"
              className="rounded-full w-10 h-10 flex items-center justify-center bg-white shadow-md border border-slate-300"
            >
              <i className="fa-solid fa-bolt"></i>
            </a>
          </li>
          <button
            type="button"
            className="bg-sky-100 py-2 px-4 rounded-[33px] flex items-center justify-center hover:shadow-md duration-300 transition-colors"
          >
            <p className="text-base text-blue-500 font-medium leading-none text-center">
              Connect Wallet
            </p>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
