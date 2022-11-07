import React from 'react';
import TarotCardCollapse from './TarotCardCollapse';

const TarotCardInfo = ({deck, cardDirection, id}) => {

  const moreInfo = Object.keys(deck).map((key, index) => {
    if (key !== 'name' && key !== 'description' && key!== 'family') {
      return (
        <TarotCardCollapse 
          key={index}
          title={key}
          keywords={deck[`${key}`][`${cardDirection}`]?.keywords}
          meaning={deck[`${key}`][`${cardDirection}`]?.meaning}
        />
      )
    }
  })

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">{deck.name} | {cardDirection}</h3>
          <p className="py-4">{deck.description}</p>
          {moreInfo}
          <div className="modal-action">
            <label htmlFor={id} className="btn">Do something</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default TarotCardInfo;