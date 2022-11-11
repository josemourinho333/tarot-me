import React from 'react';
import Image from 'next/image';
import Ratings from './Ratings';

const Product = () => {
  return (
    <div className="basis-1/6">
      <Image 
        src="https://placeimg.com/260/400/arch"
        alt="tarot-deck"
        width={500}
        height={500}
        layout="responsive"
      />
      <div className="flex flex-col my-3 items-start">
        <h3 className="font-bold text-xl">Deck Name</h3>
        <p className="font-normal text-md">$50 CAD</p>
        <Ratings />
        <button className="btn btn-sm btn-primary my-3">Add to cart</button>
      </div>
    </div>
  )
}

export default Product;