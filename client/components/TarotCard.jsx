import React from 'react';
import TarotCardInfo from './TarotCardInfo';

const TarotCard = ({id, name, family, description, overview, position}) => {
  const modalIdentifer = name.split(' ').join('').toLowerCase();

  return (
    <>
      <label htmlFor={modalIdentifer}>
        <div className="card card-compact w-52 h-96 bg-base-100 shadow-xl image-full cursor-pointer">
          <figure><img src="https://content.wepik.com/statics/4356819/preview-page0.jpg" alt={name} className={position === "reversed" ? 'rotate-180' : ''}/></figure>
          <div className="card-body items-center justify-center">
            <p>{name} | {position}</p>
            <h2 className={`card-title text-xl whitespace-normal break-words inline-block ${position === 'reversed' && 'rotate-180'}`}>{name}</h2>
          </div>
        </div>
      </label>
      <TarotCardInfo name={name} family={family} description={description} overview={overview} position={position} id={id} modalIdentifer={modalIdentifer}/>
    </>
  )
};

export default TarotCard;