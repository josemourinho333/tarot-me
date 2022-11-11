import React from 'react';
import Product from './Product';

const ProductList = () => {

  const testLimit = 7;

  const testProducts = () => {
    const output = [];
    for (let i = 0; i < testLimit; i++) {
      output.push(
        <Product 
          key={i}
        />
      )
    };

    return output;
  }


  return (
    <section className="product-list flex flex-col my-10">
      <h1 className="text-5xl font-bold self-center">Get your deck</h1>
      <div className="my-10 flex flex-wrap gap-10 justify-center">
        {/* <Product /> */}
        {testProducts()}
      </div>
    </section>
  )
}

export default ProductList;