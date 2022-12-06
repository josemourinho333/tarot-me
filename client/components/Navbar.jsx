import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 h-[10vh] bg-base-100/70 backdrop-blur-lg text-base-content px-0 lg:px-4 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-neutral text-base-content w-screen divide-y divide-solid divide-neutral-content">
            <li ><Link href="/reading" className="text-2xl font-light py-5">Reading</Link></li>
            <li ><Link href="/learn" className="text-2xl font-light py-5">Learn</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-3xl font-black">Tarot.Me</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        </ul>
      </div>
      <div className="navbar-end px-[1rem] gap-x-2 lg:px-0 ">
        <Link href="/reading" className="btn btn-sm btn-outline">Get a reading</Link>
        <Link href="/learn" className="btn btn-sm btn-outline hidden lg:flex">Learn</Link>
      </div>
    </div>
  )
}

export default Navbar;