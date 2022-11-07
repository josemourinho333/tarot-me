import React, {useState} from 'react';
import TarotCardInfo from './TarotCardInfo';

const TarotCard = ({deck, id, pickedCard}) => {
  const [cardDirection, setCardDirection] = useState(null);

  // pick direction
  const upOrRev = () => {
    const zeroOrOne = Math.random();

    if (zeroOrOne < 0.5) {
      setCardDirection('upright');
    } else {
      setCardDirection('reversed');
    }
  }

  return (
    <>
      <div className="tarot-card card glass w-full h-[70vh] sm:w-[30vh] sm:h-[50vh] md:w-[40vh] md:h-[60vh] lg:w-[40vh] lg:h-[60vh]" onClick={() => pickedCard(deck.name)}>
        <div className="card-body justify-end">
          <div className="card-actions justify-center">
            <label htmlFor={id} className="btn btn-primary btn-sm" onClick={upOrRev}>Read Your Card</label>
          </div>
        </div>
      </div>
      <TarotCardInfo deck={deck} cardDirection={cardDirection} id={id}/>
    </>
  )
}

export default TarotCard;