import React from 'react';

const Hero = ({title, oneLiner, path, cta, bgImg}) => {
  return (
    <div className={`p-10 h-[90vh] flex flex-col w-full bg-blue-500 rounded-2xl justify-center items-center text-center gap-5`} style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: "40% 50%", backgroundSize: "cover" }}>
        <h1 className="text-7xl font-semibold">{title}</h1>
        <p className="text-3xl font-light">{oneLiner}</p>
        <div className="flex flex-row">
          <button className="btn"><a href={path}>{cta}</a></button>
        </div>
    </div>
  )
}

export default Hero;