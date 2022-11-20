import React from 'react';
import TarotCardKeywords from './TarotCardKeywords';

const LearningView = ({ name, desc, family, overview, image }) => {
  return (
    <div classsName="flex flex-col">
      <h2 className="font-bold text-5xl my-5">{name}</h2>
      <p className="italic text-xl font-semibold my-5">{family}</p>
      <div className="carousel carousel-center h-[400px] max-w-full p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img src={image} alt="" className="w-full object-cover rounded-xl"/>
        </div> 
        <div className="carousel-item">
          <img src={image} alt="" className="w-full object-cover rounded-xl rotate-180"/>        
        </div> 
      </div>
      {/* <div className="flex flex-col lg:flex-row gap-10 h-[600px] bg-neutral rounded-xl p-10">
        <img src="https://i.pinimg.com/564x/b0/9c/f5/b09cf56a71189e965226db755a233a02.jpg" alt="" className="w-[400px] object-cover"/>
        <img src="https://i.pinimg.com/564x/b0/9c/f5/b09cf56a71189e965226db755a233a02.jpg" alt="" className="w-[400px] object-cover"/>
      </div> */}
      <p className="text-lg my-5 tracking-wide leading-7">{desc}</p>

      <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-5"> 
        <div className="collapse-title text-xl font-medium">
          Upright Overview
        </div>
        <div className="collapse-content"> 
          <p>{overview.upright[0].meaning}</p>
          <TarotCardKeywords keywords={overview.upright[0].keywords} />
        </div>
      </div>

      <div tabIndex={1} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-5"> 
        <div className="collapse-title text-xl font-medium">
          Reversed Overview
        </div>
        <div className="collapse-content"> 
          <p>{overview.reversed[0].meaning}</p>
          <TarotCardKeywords keywords={overview.reversed[0].keywords} />
        </div>
      </div>

    </div>
  )
}

export default LearningView;