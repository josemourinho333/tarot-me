import React from 'react';

const LearningDefault = ({ id, name, desc, family, selectHandler, image }) => {
  return (
    <div className="card w-80 bg-neutral shadow-xl cursor-pointer" onClick={() => selectHandler(id)}>
      <figure><img src={image} alt={name} /></figure>
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