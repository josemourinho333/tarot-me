import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen w-[100vw]" style={{ backgroundImage: `url("https://images.hdqwalls.com/download/gradient-colorful-blur-minimalist-v6-2932x2932.jpg")` }}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">Tarot Stuff</h1>
          <p className="mb-5 text-2xl">The most popular, free and <br/>best looking tarot reader website.</p>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row">
            <button className="btn btn-primary"><a href="/reading">Get a Reading</a></button>
            <button className="btn btn-primary"><a href="/learn">Learn</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;