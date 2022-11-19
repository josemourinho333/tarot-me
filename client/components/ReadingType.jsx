import React from 'react';

const ReadingType = ({type, description, target}) => {
  return (
    <div className="carousel-item">
      <div className="card card-compact w-80 h-[500px] bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://i.pinimg.com/564x/b0/9c/f5/b09cf56a71189e965226db755a233a02.jpg" alt="Shoes" className="rounded-xl object-cover h-full w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title basis-1/4">{type}</h2>
          <p className="basis-2/4 px-8">{description}</p>
          <div className="card-actions basis-1/4">
            <button className="btn btn-primary"><a href={`/reading/${type}?target=${target}`}>Start</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadingType;