import React from 'react';

const ReadingType = ({type, description}) => {
  return (
    <div className="card card-normal min-w-0 w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 basis-1/2">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl object-cover h-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{type}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">start</button>
        </div>
      </div>
    </div>

  )
}

export default ReadingType;