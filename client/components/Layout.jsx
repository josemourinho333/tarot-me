import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main className="w-[90%] m-auto my-5">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;