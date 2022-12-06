import React from 'react';
import Image from 'next/image';

const LearningDefault = ({ id, name, desc, family, selectHandler, image }) => {
  return (
    <div className="card w-96 sm:w-72 md:w-80 bg-neutral shadow-xl cursor-pointer" onClick={() => selectHandler(id)}>
      <figure className="relative"><Image src={image} alt={name} width="0" height="0" className="w-full h-auto" unoptimized priority/></figure>
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