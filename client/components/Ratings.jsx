import React from 'react';

const Ratings = () => {
  return (
    <div className="rating rating-sm my-2">
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </div>
  )
}

export default Ratings;