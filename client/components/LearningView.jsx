import React from 'react';
import TarotCardKeywords from './TarotCardKeywords';
import Image from 'next/image';

const LearningView = ({ name, desc, family, overview, image }) => {
  return (
    <div classsName="flex flex-col">
      <h2 className="font-semibold text-6xl my-5">{name}</h2>
      <p className="italic text-3xl font-base my-5">{family}</p>
      <div className="carousel carousel-center h-[70vh] max-w-full p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <Image src={image} alt={`${name}-up`} width="0" height="0" className="w-full rounded-xl" unoptimized priority/>
        </div> 
        <div className="carousel-item">
          <Image src={image} alt={`${name}-reverse`} width="0" height="0" className="w-full rounded-xl rotate-180" unoptimized priority/>        
        </div> 
      </div>

      <div tabIndex={2} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-5 p-3 md:p-10"> 
        <div className="collapse-title text-xl md:text-2xl font-semibold">
          Description
        </div>
        <div className="collapse-content text-lg md:text-xl font-extralight"> 
          <p>{desc}</p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-5 p-3 md:p-10"> 
        <div className="collapse-title text-xl md:text-2xl font-semibold">
          Upright Overview
        </div>
        <div className="collapse-content text-lg md:text-xl font-extralight"> 
          <p>{overview.upright[0].meaning}</p>
          <TarotCardKeywords keywords={overview.upright[0].keywords} />
        </div>
      </div>

      <div tabIndex={1} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-5 p-3 md:p-10"> 
        <div className="collapse-title text-xl md:text-2xl font-semibold">
          Reversed Overview
        </div>
        <div className="collapse-content text-lg md:text-xl font-extralight"> 
          <p>{overview.reversed[0].meaning}</p>
          <TarotCardKeywords keywords={overview.reversed[0].keywords} />
        </div>
      </div>

    </div>
  )
}

export default LearningView;