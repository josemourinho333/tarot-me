import React from 'react';
import TarotCardInfo from './TarotCardInfo';

const TarotCard = ({id, name, family, description, overview, position}) => {
  const modalIdentifer = name.split(' ').join('').toLowerCase();

  return (
    <>
      <label htmlFor={modalIdentifer}>
      <div className="carousel-item cursor-pointer">
        <div className="card card-compact w-80 h-[500px] bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.pinimg.com/474x/dd/c3/b5/ddc3b5730b79ce9d1f4f837b3a0ded3f.jpg" alt={name} className={`rounded-xl object-cover h-full w-full ${position === "reversed" ? 'rotate-180' : ''}`} />
          </figure>
          <div className="card-body items-center text-center justify-center">
            <p>{name} | {position}</p>
            <h2 className={`card-title text-3xl whitespace-normal break-words inline-block ${position === 'reversed' && 'rotate-180'}`}>{name}</h2>
          </div>
        </div>
      </div>
      </label>
      <TarotCardInfo name={name} family={family} description={description} overview={overview} position={position} id={id} modalIdentifer={modalIdentifer}/>
    </>
    
  )
};

export default TarotCard;