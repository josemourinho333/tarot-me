import React from 'react';

const ReadingType = ({type, description, next}) => {
  return (
    <div className="carousel-item">
      <div className="card card-normal w-96 h-[600px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 basis-1/2">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl object-cover h-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{type}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary"> <a href={`/reading/${type}`}>Start</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadingType;