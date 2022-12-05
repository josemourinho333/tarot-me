import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 h-[10vh] bg-base-100/70 backdrop-blur-lg text-base-content px-0 lg:px-4 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-neutral text-base-content w-screen divide-y divide-solid divide-neutral-content">
            {/* <li tabIndex={0}>
              <a className="justify-between">
                Reading
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Tarot Reading</a></li>
                <li><a>Astrology & Horoscope</a></li>
              </ul>
            </li> */}
            <li ><a href="/reading" className="text-2xl font-light py-5">Reading</a></li>
            <li ><a href="/learn" className="text-2xl font-light py-5">Learn</a></li>
            {/* <li><a>Shop</a></li> */}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-3xl font-black">Tarot.Me</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* <li tabIndex={0}>
            <a>
              Reading
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Tarot Reading</a></li>
              <li><a>Astrology & Horoscope</a></li>
            </ul>
          </li> */}
          {/* <li><a href="/learn">Learn</a></li> */}
          {/* <li><a>Shop</a></li> */}
        </ul>
      </div>
      <div className="navbar-end px-[1rem] gap-x-2 lg:px-0 ">
        <a href="/reading" className="btn btn-sm btn-outline">Get a reading</a>
        <a href="/learn" className="btn btn-sm btn-outline hidden lg:flex">Learn</a>
      </div>
    </div>
  )
}

export default Navbar;