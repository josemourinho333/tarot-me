import React from 'react';

const LearningDefault = ({ name, desc, family }) => {
  return (
    <div className="card w-80 bg-neutral shadow-xl cursor-pointer">
      <figure><img src="https://placeimg.com/400/225/arch" alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <p>{desc.substring(0, 100)}...</p>
        <div className="card-actions justify-start">
          <div className="badge badge-secondary">{family}</div> 
        </div>
      </div>
    </div>
  )
}

export default LearningDefault;