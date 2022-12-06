import React from 'react';
import TarotCardInfo from './TarotCardInfo';
import Image from 'next/image';

const TarotCard = ({id, name, family, description, overview, position, image}) => {
  const modalIdentifer = name.split(' ').join('').toLowerCase();

  return (
    <>
      <label htmlFor={modalIdentifer}>
      <div className="carousel-item cursor-pointer">
        <div className="card card-compact w-72 h-[475px] bg-base-100 shadow-xl">
          <figure>
            <Image width="0" height="0" src={image} alt={name} className={`rounded-xl object-cover h-full w-full ${position === "reversed" ? 'rotate-180' : ''}`} unoptimized priority/>
          </figure>
        </div>
      </div>
      </label>
      <TarotCardInfo name={name} family={family} description={description} overview={overview} position={position} id={id} modalIdentifer={modalIdentifer}/>
    </>
    
  )
};

export default TarotCard;