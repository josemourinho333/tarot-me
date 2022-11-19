import React from 'react';
import TarotCardCollapseable from './TarotCardCollapseable';

const TarotCardInfo = ({name, family, description, overview, position, id, modalIdentifer}) => {
  return (
    <>
      <input type="checkbox" id={modalIdentifer} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor={modalIdentifer} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">{name} | {position}</h3>
          <h4 className="font-semibold italic text-lg">{family}</h4>
          <p className="py-4">{description}</p>
          <TarotCardCollapseable overview={overview} title="Overview"/>
        </div>
      </div>
    </>
  )
};

export default TarotCardInfo;