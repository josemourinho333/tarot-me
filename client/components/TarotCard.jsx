import React from 'react';
import TarotCardInfo from './TarotCardInfo';

const TarotCard = ({id, name, family, description, overview, position, image}) => {
  const modalIdentifer = name.split(' ').join('').toLowerCase();

  return (
    <>
      <label htmlFor={modalIdentifer}>
      <div className="carousel-item cursor-pointer">
        <div className="card card-compact w-72 h-[475px] bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt={name} className={`rounded-xl object-cover h-full w-full ${position === "reversed" ? 'rotate-180' : ''}`} />
          </figure>
          {/* <div className="card-body items-center text-center justify-center">
            <p>{name} | {position}</p>
            <h2 className={`card-title text-3xl whitespace-normal break-words inline-block ${position === 'reversed' && 'rotate-180'}`}>{name}</h2>
          </div> */}
        </div>
      </div>
      </label>
      <TarotCardInfo name={name} family={family} description={description} overview={overview} position={position} id={id} modalIdentifer={modalIdentifer}/>
    </>
    
  )
};

export default TarotCard;